<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Success!
        </v-card-title>
        <v-card-text>
          <p>Your image was successfully uploaded. </p>
          <v-img v-bind:src="'https://api.img.cards/api/v1/image/' + id + '/raw'" alt="Uploaded image" >
          <template v-slot:placeholder>
    <v-sheet>
      <v-skeleton-loader />
    </v-sheet>
  </template> </v-img>
        Click the URL to copy it
          <v-text-field
          v-bind:value="baseUrl + '/image/' + id"
          label="Share URL"
          prepend-icon="mdi-content-copy"
          @click="copyText(baseUrl + '/image/' + id)"
          filled
          readonly
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary" @click="$router.push('/image/' + id)">
          Go to image page
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

  </v-row>
</template>

<script>
import axios from 'axios';
export default {

  name: 'SuccessPage',
  data () {
    return {
      id: this.$router.currentRoute.query.id,
      baseUrl: "https://img.cards"
    }
  },
  methods: {
    copyText(url) {
      navigator.clipboard.writeText(url);
    },
    checkImage(id){
      axios.get('https://api.img.cards/api/v1/image/' + id).then(response => {
        this.imageInfo = response.body;
      }).catch(error => {
        window.location.href = '/';
      });
    }

  },
  beforeMount: function () {
    this.checkImage(this.id);
  }
}
</script>
