<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Войдите в аккаунт
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
            ></v-text-field>

            <v-btn @click="authenticate">
                Войти
            </v-btn>
        </v-card>
    </div>
</template>

<script>
export default {
  name: 'LoginPage',

  data: () => ({
        info: [],
        login: "",
        password: ""
    }),

    methods: {
        authenticate() {
            this.axios({
                method: 'GET',
                url: "https://api.npoint.io/63c17ed3003011515fc0"
            }).then((response) => {
                this.info = response.data;
                let found = false;
                for(let item in this.info) {
                    if(this.login == this.info[item].login && this.password == this.info[item].password) {
                        this.$emit('login', this.info[item]);
                        found = true;
                        this.$router.push('/users/' + this.info[item].id);
                        this.$router.go(0);
                    }
                }
                if(!found) {
                    window.alert("Sorry.. Mein gott, muss das sein!")
                }
            })
        }
    }
    
}
</script>