<template>
    <div class="wrapper">
        <div class="logo">
            <span>
                <nuxt-link to="/">Admin App</nuxt-link>
            </span>
        </div>
        <div class="logout">
            <div class="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="logout-btn" >
                <span @click="logout">Logout</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        logout(){
            this.$store.dispatch('setAuth', false)
            this.$nuxt.$router.push({path : '/login'})
        }
    }
}
</script>
<style lang="scss" src="./style.scss" />