<template>
  <v-container fluid>
    <div class="mt-15">
      <v-row class="text-left">
        <v-col cols="5">
          <h1 class="green--text text--darken-2">
            <v-icon large color="green darken-2">mdi-account-outline</v-icon>
            {{info.name}}
          </h1>
        </v-col>
      </v-row>
      <v-row class="text-left">
        <v-col cols="1">
            <v-img :src="info.photo" style="max-width: 100%"></v-img>
        </v-col>
        <v-col cols="5" class="text-left">
          <p>
            Веб-сайт: <a href="..." target="_blank">{{info.website}}</a>
          </p>
          <p>
            E-mail: <a href="mailto:...">{{info.email}}</a>
          </p>
          <p>
            Город: {{info.city}}
          </p>
          <p>
            Место работы: {{info.company}}
          </p>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ProfilePage',

  props: ["myId"],

  data: () => ({
        currentId: null,
        info: []
    }),

    methods: {
        getInfo() {
            this.axios({
                method: 'GET',
                url: "https://api.npoint.io/63c17ed3003011515fc0"
            }).then((response) => {
                this.info = response.data[this.currentId-1];
            })
        }
    },
    mounted() {
        this.currentId = this.$route.params.id;
        this.getInfo()
    },
    watch: {
      $route() {
        this.currentId = this.$route.params.id;
        this.getInfo()
      }
    }
}
</script>
