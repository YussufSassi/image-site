<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to img.cards
        </v-card-title>
        <v-card-text>
          <p>Get started by choosing an image you want to upload.</p>
          <p>You can choose an image of any resolution, up to 100MB (104857600 bytes) - We don't compress your images.</p>
  <v-file-input
  label="Choose an image" prepend-icon="mdi-camera" filled id="image">
  </v-file-input>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            @click="uploadFile"
          >
            Upload
          </v-btn>

        </v-card-actions>
         <v-progress-linear v-if="loading == true" indeterminate></v-progress-linear>
      </v-card>
    </v-col>
     <v-snackbar :color="snackbar.color" v-model="snackbar.show">
        {{ snackbar.message }}
    </v-snackbar>

  </v-row>

</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  data () {
    return {
      snackbar: {
                show: false,
                message: null,
                color: null
            },
      loading: false,
      overlay: true
    }
  },
  methods: {

    uploadFile () {
      const formData = new FormData()
      let file = document.getElementById("image").files[0]
      if(file){
      formData.append('file', file)
      this.loading = true
      axios.post('https://api.img.cards/api/v1/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },

       })

        .then(response => {
          if(response.status == 200){
            this.loading = false
            this.$router.push('/success?id=' + response.data)
          }
        })
        .catch(error => {
          if(error.response.data){
            this.snackbar = {
                        message: error.response.data.error,
                        color: 'error',
                        show: true
                    }
                    this.loading = false
          }else {
            this.snackbar = {
                        message: 'An unknown error occured',
                        color: 'error',
                        show: true}
                        this.loading = false

          }


        })
      }else {
        this.snackbar = {
            message: "Please choose an image",
            color: 'purple',
            show: true
        }
      }
    }
  },

}

</script>
