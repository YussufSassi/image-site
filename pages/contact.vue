<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Contact
        </v-card-title>
        <v-card-text>
          <p>Use this email for any type of contact request. Please send abuse takedown requests there too. Thanks</p>
          <p>You can contact the owner, operator and developer of this site via the following e-mail:</p>
        <p><a href="mailto:admin@yussuf.ovh"><b>admin@yussuf.ovh</b></a></p>
        <div v-if="report">
          <p>Detected you want to report the image with the id <b>{{report}}</b></p>
          <b>Please make sure you include this ID in your message so I know which image to check. For this to be a valid report, you will also need to provide a reason and all other relevant info. Thanks.</b>
        </div>


        <div class="container">
        <v-text-field placeholder="Subject" filled v-model="subject"></v-text-field>
        <v-textarea placeholder="Message" filled v-model="message"></v-textarea>
        <v-btn color="primary" @click="sendMail">Send</v-btn>
      </div>
        </v-card-text>
        <v-card-actions>

        </v-card-actions>
      </v-card>
    </v-col>

  </v-row>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return{
      message: '',
      subject: '',
      report: null
    }
  },
  methods: {
    sendMail: function (){
      window.location.href = `mailto:admin@yussuf.ovh?subject=${this.subject}&body=${this.message}`
    },
    checkifReport: function(){
      if(this.$router.currentRoute.query.report){
        this.report = this.$router.currentRoute.query.report;
      }
      else{
        return
      }
    }

  },
  beforeMount: function(){
    this.checkifReport();
  }

}
</script>
