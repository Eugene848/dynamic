<template>
  <v-app>
    <v-navigation-drawer color="green lighten-1" dark expand-on-hover hide-overlay permanent right absolute temporary>

      <v-list nav shaped dense>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/7.jpg">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-black">Ман</v-list-item-title>
            <v-list-item-subtitle>Денчик слазит</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-3"></v-divider>
        
        <v-list-item link to="">
          <v-list-item-icon><v-icon>mdi-home-outline</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Главная</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/users/7">
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
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  })
};
</script>
