<template>
    <div class="cover-all">
        <div class="cover">
            <div class="box">
                <div class="form-title">
                    Add User 
                    <span @click="closePopup">&times;</span>
                </div>
                <div class="form">
                    <input :style="errorStateName ? `border-color:red;` : `border-color:#cccccc;margin: 20px auto;`"  v-model="name" type="text" placeholder="name">
                    <span v-if="errorStateName">{{ errorMsgName }}</span>
                    <input :style="errorStatePassword ? `border-color:red;` : `border-color:#cccccc;margin: 20px auto;`" v-model="password" type="password" placeholder="password">
                    <span v-if="errorStatePassword">{{ erroMsgPassword }}</span>
                    <div class="button" @click="saveData">Save</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            password : '',
            errorStateName: false,
            errorStatePassword: false,
            errorMsgName: '',
            erroMsgPassword: '',
        }
    },
    computed:{
        lengthUsers(){
            return this.$store.state.users.length
        },
        lastId(){
            return this.$store.state.users
        }
    },
    mounted(){
        
    },
    methods:{
        validation(){
            if(this.name == ''){
                this.errorStateName = true
                this.errorMsgName = 'Tidak Boleh Kosong'
            } 
            else if(this.name.indexOf(' ') >= 0){
                this.errorStateName = true
                this.errorMsgName = 'Tidak Boleh Ada Spasi'
            }
            else if(this.name.length >= 20){
                this.errorStateName = true
                this.errorMsgName = 'Tidak Boleh Lebih dari 20'
            }
            else {
                this.errorStateName = false
                this.errorMsgName = ''
            }

            if(this.password == ''){
                this.errorStatePassword = true
                this.erroMsgPassword = 'Tidak Boleh Kosong'
            }
            else if(this.password.indexOf(' ') >= 0){
                this.errorStatePassword = true
                this.erroMsgPassword = 'Tidak Boleh Ada Spasi'
            }
            else if(this.password.length > 6){
                this.errorStatePassword = true
                this.erroMsgPassword = 'Tidak Boleh Lebih dari 6'
            }
            else {
                this.errorStatePassword = false
                this.erroMsgPassword = ''
            }

            if(this.errorStateName == false && this.errorStatePassword == false) {
                return true
            }
        },

        saveData(){
            if(this.validation()){
                this.$store.commit('PUSH_DATA', {
                    id:1,
                    name: this.name,
                    password: this.password
                })
                this.closePopup()
            }
        },
        closePopup(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" src="./style.scss"/>