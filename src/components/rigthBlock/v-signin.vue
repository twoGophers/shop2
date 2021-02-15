<template>
    <div class="v-registr">
            
            <b-form class="formRegistr" @submit.prevent="onFormSubmit">

                <label class="sr-only" for="inline-form-input-username">Email</label>
                <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input 
                id="inline-form-input-username" 
                placeholder="Email"
                name="login"
                type="email"
                v-model="email"
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
                required
                ></b-form-input>

                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Запомнить меня</b-form-checkbox>

                <b-button 
                variant="primary"
                @click.prevent="signin"
                :disabled="precesing"
                >Регистрация</b-button>
                
            </b-form>
    </div>
</template>

<script>


export default {
    name : 'v-registr',
    data() {
            return {
                email : null,
                password : null
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
            if(val === true)
                this.$router.push("/")
        }
    },
    methods : {
        signin () {
            //Передавать в сторе по нажатию
            this.$store.dispatch('SIGNIN', {email: this.email, password: this.password})
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

    }

}
</style>