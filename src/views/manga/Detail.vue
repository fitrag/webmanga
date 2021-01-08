<template>
<Header/>
    <div class="container" style="margin-top:65px !important">
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
                <div class="card bg-white border-0">
                    <img :src="data.img" alt="" style="height:280px;object-fit:cover;object-position:50% 30%">
                    <div class="card-body position-relative">
                        <div class="row">
                            <div class="col-lg-4 col-md-4">
                                <img :src="data.img" alt="" class="d-lg-inline-block d-md-inline-block d-none img-thumbnail shadow" style="width:170px;position:absolute;top:-30px;left:40px">
                            </div>
                            <div class="col-lg-8 col-md-8">
                                <div>
                                    <p class="mb-0" style="font-family: 'Fira Sans', sans-serif;font-weight:700;font-size:25px">
                                        {{data.judul}}
                                    </p>
                                    <p class="mt-0">
                                        <span class=" badge bg-info" style="font-family: 'Fira Sans', sans-serif;font-size:small">
                                            Type: {{data.type}}
                                        </span>
                                        <span class="mx-1 badge bg-warning" style="font-family: 'Fira Sans', sans-serif;font-size:small">
                                            Status: {{data.status}}
                                        </span>
                                    </p>
                                    <p style="font-family: 'Fira Sans', sans-serif;font-size:16px;font-weight:500" class="mb-0">
                                        Sinopsis :
                                    </p>
                                    <p style="font-family: 'Fira Sans', sans-serif;font-size:15px">
                                        {{data.sinopsis}}
                                    </p>
                                    <div class="">
                                        <span v-for="(genre,index) in data.genre_list" :key="index" class="btn btn-primary btn-sm mx-1 mb-1" style="font-family: 'Fira Sans', sans-serif;font-size:15px">
                                            {{ genre.genre_name }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-white mt-4 border-0">
                    <div class="card-header bg-white">
                        Chapter List
                    </div>
                    <div class="card-body">
                        <ul class="list-group" style="height:400px;overflow-y:scroll;overflow-x:hidden">
                            <li class="list-group-item" v-for="(chapter,index) in data.chapter_list" :key="index">
                                <router-link :to="{name: 'chapter', params:{link: chapter.link}}" class=" text-decoration-none text-dark">
                                    <div>
                                        <p class="mb-0" style="
                                            font-family: 'Fira Sans', sans-serif;
                                            font-size: 15px;
                                            font-weight:500
                                            ">
                                            {{ data.judul }}
                                        </p>
                                        <p
                                            style="
                                            font-family: 'Fira Sans', sans-serif;
                                            font-size: small;
                                            "
                                            class="mt-0 mb-0"
                                        >
                                            {{ chapter.chapter }}
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-4"></div>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
import Header from "../../components/Header.vue";

export default {
    data(){
        return{
            link:'',
            data:[],
            loading:true
        }
    },
    components:{
        Header
    },
    created(){
        this.ambilDetail()
    },
    methods:{
        ambilDetail(){
            axios.get("https://apimanga09.herokuapp.com/manga/detail/" + this.$route.params.link)
            .then(response => {
                this.data = response.data
                this.loading = false
            })
        }
    }
}
</script>