<template>
    <div class="cover">
        <div class="box">
            <div class="form-title">
                Sign in
            </div>
            <div class="form">
                <input :style="errorStateUsername ? `border-color:red;` : `border-color:#cccccc;margin: 20px auto;`" type="text" placeholder="username" @input="validationUsername" v-model="username" autofocus />
                <span v-if="errorStateUsername">{{ errorMsgUsername }}</span>
                <input :style="errorStatePassword ? `border-color:red;` : `border-color:#cccccc;margin: 20px auto;`" type="password" placeholder="password" v-model="password" @input="validationPassword" @keyup.enter="login" autofocus />
                <span v-if="errorStatePassword">{{ erroMsgPassword }}</span>
                <div class="button" @click="login" >Login</div>
            </div>
        </div>
    </div>
</template>

<script>
import { onlyLetters } from '~/plugins/helpers.js'
export default {
    head(){
        return{
            title: 'Login'
        }
    },
    data(){
        return{
            username: '',
            password: '',
            errorStateUsername: false,
            errorStatePassword: false,
            errorMsgUsername: '',
            erroMsgPassword: '',
        }
    },
    computed:{
        getUser(){
            return this.$store.state.user
        }
    },
    methods:{
        validationUsername(){
            if(this.username == ''){
                this.errorStateUsername = true
                this.errorMsgUsername = 'Tidak Boleh Kosong'
            } 
            else if(this.username != this.getUser.username){
                this.errorStateUsername = true
                this.errorMsgUsername = 'Username Salah'
            }
            else if(this.username.indexOf(' ') >= 0){
                this.errorStateUsername = true
                this.errorMsgUsername = 'Tidak Boleh Ada Spasi'
            }
            else if(this.username.length >= 20){
                this.errorStateUsername = true
                this.errorMsgUsername = 'Tidak Boleh Lebih dari 20'
            }
            else {
                this.errorStateUsername = false
                this.errorMsgUsername = ''
                return true
            }
        },
        validationPassword(){
            if(this.password == ''){
                this.errorStatePassword = true
                this.erroMsgPassword = 'Tidak Boleh Kosong'
            }
            else if(this.password != this.getUser.password){
                this.errorStatePassword = true
                this.erroMsgPassword = 'Password Salah'
            }
            else if(this.password.indexOf(' ') >= 0){
                this.errorStatePassword = true
                this.erroMsgPassword = 'Tidak Boleh Ada Spasi'
            }
            else if(this.password.length >= 6){
                this.errorStatePassword = true
                this.erroMsgPassword = 'Tidak Boleh Lebih dari 6'
            }
            else {
                this.errorStatePassword = false
                this.erroMsgPassword = ''
                return true
            }
        },

        login(){
            if(this.validationUsername() && this.validationPassword() ) {
                let data = {
                    username : this.username,
                    password : this.password
                }
                this.$store.dispatch('setAuth', true)
                this.$store.dispatch('setUser', data)
                this.$nuxt.$router.push({path : '/'})
            }
            
        }
    }
}
</script>
<style lang="scss" src="./style.scss"/>