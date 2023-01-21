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
            <v-img :src="img" style="max-width: 100%"></v-img>
        </v-col>
        <v-col cols="5" class="text-left">
          <p>
            Веб-сайт: <a href="..." target="_blank">{{info.website}}</a>
          </p>
          <p>
            E-mail: <a href="mailto:...">{{info.email}}</a>
          </p>
          <p>
            Город: {{info.address.city}}
          </p>
          <p>
            Место работы: {{info.company.name}}
          </p>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ProfilePage',

  data: () => ({
        currentId: null,
        info: [],
        img: ""
    }),

    methods: {
        getInfo() {
            this.axios({
                method: 'GET',
                url: "http://jsonplaceholder.typicode.com/users/" + this.currentId
            }).then((response) => {
                this.info = response.data;
                this.img = "https://randomuser.me/api/portraits/men/" + this.$route.params.id + ".jpg";
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
