<template>
  <Header />
  <div class="container mt-4 mb-4 px-lg-5 px-3 bg-white pt-4" style="margin-top:54px !important">
    <div class="row">
      <div class="col-lg-8">
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
        <h3 style="
                font-weight: 700;
                font-size: 18px;
                font-family: 'Fira Sans', sans-serif;color:red
              " class="mb-3" v-if="!loading">Chapter Terbaru</h3>
        <div class="row">
          <div
            v-for="(manga, index) in mangas"
            class="col-lg-3 col-md-4 col-sm-6 col-6 mb-2"
            :key="index"
          >
            <router-link
              :to="{ name: 'detail', params: { link: manga.link } }"
              class="text-decoration-none text-dark"
              style="
                font-weight: 500;
                font-size: 13px;
                font-family: 'Fira Sans', sans-serif;
              "
            >
              <div class="card border-0">
                <div class="position-relative">
                  <img
                    :src="manga.img"
                    alt=""
                    class="card-img-top rounded"
                    style="height: 220px; object-fit: cover"
                  />
                  <span
                    class="position-absolute badge"
                    style="left: 10px; bottom: 10px; background: red"
                  >
                    {{ manga.type }}
                  </span>
                </div>
                <div class="card-body pb-0 pt-2 px-0">
                  {{ manga.title }}
                  <p
                    style="
                      font-family: 'Fira Sans', sans-serif;
                      font-size: small;
                      font-weight:300
                    "
                  >
                    {{ manga.chapter }}
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>
</template>

<style>

    body{
      background: #f1f1f1 !important;
    }
</style>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import Header from "../../components/Header.vue";

export default {
  data() {
    return {
      mangas: [],
      loading: true,
    };
  },
  components: {
    Header,
  },
  created() {
    this.ambilManga();
  },
  methods: {
    ambilManga() {
      axios
        .get("https://apimanga09.herokuapp.com/manga")
        .then((respon) => {
          this.mangas = respon.data;
          this.loading = false;
          // console.log(respon.data)
        })
        .catch((err) => {
          console.log(err.respon);
        });
    },
  },
};
</script>
