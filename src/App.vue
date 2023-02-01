<template>
  <v-app>
    <v-navigation-drawer color="green lighten-1" dark expand-on-hover hide-overlay permanent right absolute temporary>

      <v-list nav shaped dense>
        <v-list-item>
          <v-list-item-avatar>
            <img v-bind:src="Info.photo">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-black">{{Info.name}}</v-list-item-title>
            <v-list-item-subtitle>{{Info.website}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-3"></v-divider>
        
        <v-list-item link to="">
          <v-list-item-icon><v-icon>mdi-home-outline</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Главная</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/users">
          <v-list-item-icon><v-icon>mdi-account-outline</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Мой профиль</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/friends">
          <v-list-item-icon><v-icon>mdi-account-multiple-plus-outline</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Найти друзей</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-content app class="px-12 py-3">
      <router-view v-on:login="setUser"></router-view>
    </v-content>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    currentId: "",
    Info: []
  }),

  methods: {
    setUser(data){
      this.Info = data;
    }
  },
  mounted() {
      this.currentId = this.$route.params.id;
      this.setUser()
    },
  watch: {
    $route() {
      this.currentId = this.$route.params.id;
      this.setUser()
    }
  }
};
</script>
