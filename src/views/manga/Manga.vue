<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white" style="font-family: 'Fira Sans', sans-serif;">
    <div class="container">
      <router-link :to="{name: 'home'}" class="navbar-brand" style="font-weight:700;font-size:15px">{{data.title}}</router-link>
    </div>
  </nav>
  <div class="container px-lg-4 px-0">
      <div
          class="d-flex justify-content-center align-items-center"
          style="height: 100vh"
          v-if="loading"
        >
          <div class="loadingio-spinner-ripple-yu0kxeoq23k">
            <div class="ldio-gxsc5zm78dp">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
    <div class="row" v-if="!loading">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body px-lg-3 px-0 pt-lg-3 pt-0">
            <div v-for="(chapter, index) in data.chapter_list" :key="index" style="text-align:center">
                  <img :src="chapter.chapter_image" alt="" class="w-100" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>
</template>

<style>
</style>

<script>

import axios from "axios";
import Header from "../../components/Header.vue";

export default {
  data() {
    return {
      data: [],
      loading:true
    };
  },
  created() {
    this.ambilChapter();
  },
  components:{
      Header
  },
  methods: {
    ambilChapter() {
      axios
        .get(
          "https://apimanga09.herokuapp.com/chapter/" + this.$route.params.link
        )
        .then((response) => {
          this.data = response.data;
          console.log(response.data);
          this.loading = false
        });
    },
  },
};
</script>
