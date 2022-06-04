<template>
   <v-dialog
      v-model="dialog"
      scrollable
      max-width="60%"
      v-if="exifData"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="purple"
          dark
          v-bind="attrs"
          v-on="on"
        >
          View Exif Metadata
        </v-btn>
      </template>
      <v-card >
        <v-card-title>Exif Metadata</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
         <v-list>
           <v-list-item>
             <v-list-item-title>Make: <b>{{exifData.image.Make}}</b></v-list-item-title>
             </v-list-item>
            <v-list-item>
              <v-list-item-title>Camera Model: <b>{{exifData.image.Model}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Orientation: <b>{{exifData.image.Orientation}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>X Resolution: <b>{{exifData.image.XResolution}}</b></v-list-item-title>
            </v-list-item>
             <v-list-item>
              <v-list-item-title>Y Resolution: <b>{{exifData.image.YResolution}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Resolution Unit: <b>{{exifData.image.ResolutionUnit}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Software: <b>{{exifData.image.Software}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Modify Date: <b>{{exifData.image.ModifyDate}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>YCbCrPositioning: <b>{{exifData.image.YCbCrPositioning}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >Copyright: <b>{{exifData.image.Copyright}}</b></v-list-item-title>
            </v-list-item>
             <v-list-item>
              <v-list-item-title >ExifOffset: <b>{{exifData.image.ExifOffset}}</b></v-list-item-title>
            </v-list-item>
             <v-list-item>
              <v-list-item-title >ISO: <b>{{exifData.exif.ISO}}</b></v-list-item-title>
            </v-list-item>
             <v-list-item>
              <v-list-item-title >Flash: <b>{{exifData.exif.Flash}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >ExposureCompensation: <b>{{exifData.exif.ExposureCompensation}}</b></v-list-item-title>
            </v-list-item>
             <v-list-item>
              <v-list-item-title >ExposureProgram: <b>{{exifData.exif.ExposureProgram}}</b></v-list-item-title>
            </v-list-item>
             <v-list-item>
              <v-list-item-title >ShutterSpeedValue: <b>{{exifData.exif.ShutterSpeedValue}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >ColorSpace: <b>{{exifData.exif.ColorSpace}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >ExifImageWidth: <b>{{exifData.exif.ExifImageWidth}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >ApertureValue: <b>{{exifData.exif.ApertureValue}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >BrightnessValue: <b>{{exifData.exif.BrightnessValue}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >FocalPlaneYResolution: <b>{{exifData.exif.FocalPlaneYResolution}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >SensingMethod: <b>{{exifData.exif.SensingMethod}}</b></v-list-item-title>
            </v-list-item>
             <v-list-item>
              <v-list-item-title >FNumber: <b>{{exifData.exif.FNumber}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >DateTimeOriginal: <b>{{exifData.exif.DateTimeOriginal}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >FocalLength: <b>{{exifData.exif.FocalLength}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >CreateDate: <b>{{exifData.exif.CreateDate}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >FocalPlaneXResolution: <b>{{exifData.exif.FocalPlaneXResolution}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >ExifImageHeight: <b>{{exifData.exif.FocalPlaneXResolution}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >MaxApertureValue: <b>{{exifData.exif.MaxApertureValue}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >InteropOffset: <b>{{exifData.exif.InteropOffset}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >FocalPlaneResolutionUnit: <b>{{exifData.exif.FocalPlaneResolutionUnit}}</b></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title >MeteringMode: <b>{{exifData.exif.MeteringMode}}</b></v-list-item-title>
            </v-list-item>
           <v-list-item>
              <v-list-item-title>GPS (?): <b>{{exifData.gps}}</b></v-list-item-title>
            </v-list-item>
         </v-list>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="saveExifAsJSON"
          >
            Save as JSON
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-snackbar :color="snackbar.color" v-model="snackbar.show">
        {{ snackbar.message }}
    </v-snackbar>
    </v-dialog>
</template>
<script>
import axios from 'axios'
  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        dialogm1: '',
        dialog: false,
        exifData: null,
        snackbar: {
          show: false,
          message: null,
          color: null
        },
      }
    },
    methods: {
      getExifMetadata(id){
      axios.get('https://api.img.cards/api/v1/image/' + id + '/metadata')
      .then(response => {
        if(response.data){
        this.exifData = response.data
        }
      })
      .catch(error => {
        if(error.response.data){
        this.snackbar = {
          show: true,
          message: error.response.data.error,
          color: 'error',
        }
        this.exifData = null
        }else{
          this.snackbar = {
            show: true,
            message: "There was an unknown error while fetching EXIF data for this image.",
          }
        }
      })

    },
    saveExifAsJSON(){
      const blob = new Blob([JSON.stringify(this.exifData)], {type: "application/json"})
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'exif.json')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)


    }
    },
    created() {
      this.getExifMetadata(this.id)
    }

  }

</script>
