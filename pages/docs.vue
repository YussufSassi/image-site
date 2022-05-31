<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          img.cards API Docs
        </v-card-title>
        <v-card-text>
          <p>Img.cards has a public API that allows you to upload images, view image data and more!</p>
       <h4>Image Upload</h4>
       <p>Method: <code>POST</code><br>
        URL: <code>https://api.img.cards/api/v1/upload</code>
        <br>
        Data: <code>"file": multipart/form-data</code></p>

        <h4>Image Info</h4>
       <p>Method: <code>GET</code><br>
        URL: <code>https://api.img.cards/api/v1/image/:id</code>
        <br>
        Data: <code>"id": URL param, id of the image</code></p>

        <h4>Raw image data</h4>
       <p>Method: <code>GET</code><br>
        URL: <code>https://api.img.cards/api/v1/image/:id/raw</code>
        <br>
        Data: <code>"id": URL param, id of the image</code>
        <br>
        Tip: This endpoint does not send a JSON response, but raw image data. Use this if you want to hotlink an image.
        </p>

         <h4>Download Image</h4>
       <p>Method: <code>GET</code><br>
        URL: <code>https://api.img.cards/api/v1/image/:id/download</code>
        <br>
        Data: <code>"id": URL param, id of the image</code>
        <br>
        Tip: Same data is sent as the endpoint above, however it sends a forced download instead of raw data.
        </p>
         <h4>Daily upload stats</h4>
       <p>Method: <code>GET</code><br>
        URL: <code>https://api.img.cards/api/v1/stats/daily</code>
        <br>
        Note: Experimental endpoint that is not used in the UI yet. It responds with daily upload stats for this site.
        </p>
        
        </v-card-text>
      </v-card>
    </v-col>


  </v-row>

</template>

<script>
import axios from 'axios'

export default {
  name: 'DocsPage'

}

</script>
