<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Зарегистрируйтесь
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

            <v-text-field
                label="Введите имя"
                v-model="name"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите сайт"
                v-model="website"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите почту"
                v-model="email"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите родной город"
                v-model="city"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите место работы"
                v-model="company"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите url своего фото"
                v-model="photo"
                outlined
            ></v-text-field>

            <v-btn @click="registration">
                Зарегистрироваться
            </v-btn>
        </v-card>
    </div>
</template>

<script>
export default {
  name: 'RegistrationPage',

  data: () => ({
        login: "",
        password: "",
        name: "",
        website: "",
        email: "",
        city: "",
        company: "",
        photo: ""
    }),

    methods: {
        registration() {
            // Делаем запрос на сервер для получения списка всех пользователей
            this.axios.get('https://api.npoint.io/63c17ed3003011515fc0')
                .then((response)=>{
                    // Это список всех зарегистрированных пользователей
                    let userList = response.data;

                    // Создаем нового пользователя в том же формате, что остальные
                    let newUser = {
                        id: 3,
                        login: this.login,
                        password: this.password,
                        name: this.name,
                        website: this.website,
                        email: this.email,
                        city: this.city,
                        company: this.company,
                        photo: this.photo
                    }

                    // Добавим его в массив пользователей
                    userList.push(newUser);

                    // Отправим обновленный массив пользователей на сервер
                    this.axios.put('https://api.npoint.io/63c17ed3003011515fc0', userList)

                    this.$router.push('/login');
                    this.$router.go(0);
                })
        }
    },
    
}
</script>