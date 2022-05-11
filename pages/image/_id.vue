<template>
 <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
        {{ imageInfo.originalFileName }}
        </v-card-title>
        <v-card-text >
          <div class="images" v-viewer>
          <img v-for="src in images" :key="src" :src="src"  class="responsive" style="cursor: pointer;"/>
          </div>
          <viewer :images="images">
    </viewer>
        <v-list>

          <v-list-item>
            <v-list-item-title>File Name:</v-list-item-title>
            <v-list-item-subtitle>{{ imageInfo.originalFileName }}</v-list-item-subtitle>
          </v-list-item>
           <v-list-item>
            <v-list-item-title>File Size:</v-list-item-title>
            <v-list-item-subtitle>
              {{ this.bytesToSize(this.imageInfo.size) }} ({{imageInfo.size}} B)</v-list-item-subtitle>


          </v-list-item>
           <v-list-item>
            <v-list-item-title>Uploaded At:</v-list-item-title>
            <v-list-item-subtitle>{{new Date(imageInfo.uploadedAt).toLocaleDateString()}}</v-list-item-subtitle>
          </v-list-item>

        </v-list>
          <v-text-field
          v-bind:value="baseUrl + '/image/' + id"
          label="Share URL"
          prepend-icon="mdi-link"
          @click="copyText(baseUrl + '/image/' + id, 'share-url')"
          filled
          readonly
          id="share-url"
          ></v-text-field>
          <v-text-field
          v-bind:value="'https://api.img.cards/api/v1' + '/image/' + id + '/raw'"
          label="Raw URL"
          prepend-icon="mdi-camera"
          @click="copyText('https://api.img.cards/api/v1' + '/image/' + id + '/raw', 'raw-url')"
          filled
          readonly
          id="raw-url"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-around">
          <v-btn
            color="primary" @click="downloadImage" >
          Download Image
          </v-btn>
          <v-spacer />
          <ExifDialog :id="id"/>
          <v-spacer />
          <v-btn
            color="error" @click="$router.push('/contact?report=' + id)">
          Report Image
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-col>
<v-snackbar :color="snackbar.color" v-model="snackbar.show">
        {{ snackbar.message }}
    </v-snackbar>
    <v-overlay
      :opacity="1"
      :value="overlay"
    >
        <v-progress-circular
      indeterminate
      color="purple"
      :size="70"
      :width="7"
    ></v-progress-circular>
    </v-overlay>
  </v-row>

</template>
<script>
import '../../assets/viewer.css';
import Vue from 'vue'
import VueViewer from 'v-viewer'
import axios from 'axios'

Vue.use(VueViewer)
export default {
  name: 'ImagePage',

  data ({params}) {
    return {
      id: this.$route.params.id,
      images: [
        'https://api.img.cards/api/v1/image/' + this.$route.params.id + '/raw'
      ],
      baseUrl: "https://img.cards",
      imageInfo: {},
      exifData: {},
      snackbar: {
          show: false,
          message: null,
          color: null
      },
      overlay: true,
    }
  },
  methods: {
    downloadImage() {
      window.location.href = 'https://api.img.cards/api/v1/image/' + this.$route.params.id + '/download'
    },
    getImageInfo(){
      axios.get('https://api.img.cards/api/v1/image/' + this.$route.params.id)
      .then(response => {
        this.imageInfo = response.data
      })
      .catch(error => {
        if(error.response.data){
        this.snackbar = {
          show: true,
          message: error.response.data.error,
        }
        window.location.href = "/"
        }else{
          this.snackbar = {
            show: true,
            message: "There was an unknown error while fetching EXIF data for this image.",
          }
          window.location.href = "/"
        }

      })

    },
    bytesToSize(bytes) {
       let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes == 0) return '0 Byte';
      let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },
    copyText(url, id) {
      navigator.clipboard.writeText(url);
       const input = document.getElementById(id);
       input.focus();
       input.select();
    },
    getExifMetadata(id){
      axios.get('https://api.img.cards/api/v1/image/' + id + '/metadata')
      .then(response => {
        this.exifData = response.data
      })
      .catch(error => {
        console.log(error)
      })
    },

  },
  beforeMount: function () {
    this.getImageInfo()
  },
  mounted: function () {
    this.overlay = false
  },

}

</script>

<style scoped>
.images > img{
  width: 100%;
  height: 100%;
}
</style>
