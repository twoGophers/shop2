<template>
    <div class="v-registr">
            
            <b-form 
            class="formRegistr" 
            @submit.prevent="onFormSubmit"
            v-model="valid"
            >

                <label class="sr-only" for="inline-form-input-username">Email</label>
                <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input 
                id="inline-form-input-username" 
                placeholder="Email"
                name="login"
                type="email"
                v-model="email"
                :rules="emailRules"
                required
                ></b-form-input>
                </b-input-group>

                
                <label class="sr-only" for="inline-form-input-name">Имя</label>
                <b-form-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Логин"
                name="name"
                type="password"
                v-model="password"
                :rules="passwordRules"
                required
                ></b-form-input>

                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Запомнить меня</b-form-checkbox>

                <b-button 
                variant="primary"
                @click.prevent="signup"
                :disabled="precesing || !valid"
                >
                Регистрация
                </b-button>
                
                
            </b-form>
            
    </div>
</template>

<script>


export default {
    name : 'v-registr',
    data() {
            return {
                email : null,
                password : null,
                valid : false,
                emailRules: [
                    (v) => !!v || 'Пожалуйства введите email',
                    (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Введите правльный email'
                ],
                passwordRules : [
                    (v) => !!v || 'Name is required',
                    (v) => (v && v.length >= 6) || 'Пароль слишком короткий - минимум 6 символов'
                ]

            }
    },
    computed : {
        precesing() {
            return this.$store.getters.getProcessing;
        },
        isUserAuthenticated () {
            return this.$store.getters.isAuthenticated
        }
    },
    watch : {
        isUserAuthenticated(val) {
            if(val == true)
                this.$router.push("/")
        }
    },
    methods : {
        signup () {
            //Передавать в сторе по нажатию
            this.$store.dispatch('SIGNUP', {email: this.email, password: this.password})
            return [
                this.email = null,
                this.password = null
            ]
        }
    }
}
</script>

<style lang="scss">
.v-registr {
    width: 100%;
    display: flex;
    border: 1px solid rgb(252, 200, 239);
    box-shadow: 0 0 10px 0 rgb(252, 200, 239);
    background: url("../../images/bgHeader.jpg") no-repeat;
    border-radius: 1%;
    overflow:hidden;
    .formRegistr {
        margin-left: 3%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .mb-2 {
            margin-top: 5%;
        }
        .button  {
            margin: 1%;
            padding: 1%;
        }
    }
        a {
            color: rgb(3, 0, 0);
        }
}
</style>