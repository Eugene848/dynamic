<template>
    <v-container fluid>
        <div v-for="(item, i) in info" :key="i" class="mt-15 d-flex flex-wrap">
            <v-card width="40%" height="200px">
                <v-row class="text-left">
                <v-col cols="3" class="ml-5 mt-5">
                    <v-img :src="img[i+1]" style="max-width: 100%" class="rounded-circle"></v-img>
                </v-col>

                <v-divider class="mt-8 mb-6" vertical inset/>

                <v-col cols="5" class="text-left">
                <v-card-title>
                    {{ item.name }}
                </v-card-title>
                <v-card-subtitle>
                    {{ item.address.city }}
                </v-card-subtitle>
                <v-btn class="ma-2" outlined color="green lighten-1">
                    Перейти в профиль
                </v-btn>
                </v-col>
                </v-row>
            </v-card>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'FriendsPage',

    data: () => ({
        info: [],
        img: []
    }),

    methods: {
        getFriends() {
            this.axios({
                method: 'GET',
                url: "http://jsonplaceholder.typicode.com/users"
            }).then((response) => {
                this.info = response.data;
                for (let i = 1; i <= 10; i++) {
                    this.img[i] = "https://randomuser.me/api/portraits/men/" + i + ".jpg";
                }
            })
        }
    },
    mounted() {
        this.getFriends()
    },
    watch: {
        $route() {
            this.getFriends()
        }
    }
}
</script>
