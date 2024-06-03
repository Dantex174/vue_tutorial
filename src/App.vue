<template>
    <div class="app">
      <h1>Страница с постами</h1>
      <MyInput v-model="searchQuery" placeholder="Поиск..."/>
      <div class="app__btns">
        <MyButtons @click="showDialog">Создать пост</MyButtons>
        <MySelect v-model="selectedSort" :options="sortOptions"/>
      </div>
      <MyButtons @click="fetchPosts">Получить посты</MyButtons>

      <MyDialog v-model:show="dialogVisible">
        <postForm
            @create="createPost"
        />
      </MyDialog>

        <postList
            v-if="!isPostLoading"
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
        />
      <div v-else>Идет загрузка...</div>
      <div ref="observer" class="observer"></div>
<!--      <div class="page__wrapper">-->
<!--        <div-->
<!--            v-for="pageNumber in totalPages"-->
<!--            :key="pageNumber"-->
<!--            class="page"-->
<!--            :class="{-->
<!--              'current-page': page === pageNumber-->
<!--            }"-->
<!--            @click="changePage(pageNumber)"-->
<!--        >{{ pageNumber }}</div>-->
<!--      </div>-->
    </div>
</template>

<script>
import axios from "axios";

import postForm from "./components/postForm.vue";
import postList from "./components/postList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButtons from "@/components/UI/MyButtons.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";


    export default {
        components: {
          MyInput,
          MySelect,
          MyButtons,
          MyDialog,
            postForm,
            postList
        },
        data() {
            return {
                posts: [

                ],
              dialogVisible: false,
              isPostLoading: false,
              selectedSort: '',
              sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержанию'},
              ],
              searchQuery: '',
              page: 1,
              limit: 10,
              totalPages: 0,
            }
        },
        methods: {
          createPost(post) {
              this.posts.push(post);
              this.dialogVisible = false;
          },
          removePost(post) {
              this.posts = this.posts.filter(p => p.id !== post.id)
          },
          showDialog() {
              this.dialogVisible = true;
          },
          // changePage(pageNumber) {
          //     this.page = pageNumber;
          //     this.fetchPosts();
          // },
          // async fetchPosts() {
          //   try {
          //     this.isPostLoading = true;
          //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10', {
          //       params: {
          //         _limit: this.limit,
          //         _page: this.page,
          //       }
          //     });
          //     this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit);
          //     this.posts = res.data;
          //     this.isPostLoading = false;
          //   }
          //   catch (e) {
          //     alert('Ошибка');
          //   }
          //   finally {
          //
          //   }
          // }
          async loadMorePosts() {
            try {
              this.page += 1;
              const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10', {
                params: {
                  _limit: this.limit,
                  _page: this.page,
                }
              });
              this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit);
              this.posts = [...this.posts, ...res.data];
              this.isPostLoading = false;
            }
            catch (e) {
              alert('Ошибка');
            }
          }

        },
      mounted() {
          this.loadMorePosts();

          const options = {
            rootMargin: '0px',
            threshold: 1.0
          }
          const callback = (entries, observer) =>  {
            if (entries[0].isIntersecting && this.page < this.totalPages) {
              this.loadMorePosts();
            }
          }
          const observer = new IntersectionObserver(callback, options)
          observer.observe(this.$refs.observer);
      },
      // watch: {
      //   selectedSort(newValue) {
      //     this.posts.sort((post1, post2) => {
      //       return post1[newValue]?.localeCompare(post2[newValue]);
      //     })
      //   },
      //   // dialogVisible(newValue) {
      //   //   console.log(newValue)
      //   // }
      // },
      computed: {
          sortedPosts() {
            return [...this.posts].sort((post1, post2) => {
              return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
            })
          },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
       }
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid green;
  padding: 10px;
}

.observer {
  height: 30px;
  background-color: green;
}
</style>