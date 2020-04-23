<template>
    <div class="wrapp">
        <h2>Selamat Datang {{ getUsername }}</h2>
    </div>
</template>
<script>
export default {
    layout:'dashboard',
    middleware:['auth'],
    computed:{
        getUsername(){
            return this.$store.state.user.username
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapp{
        h2{
            text-align: center;
        }
    }
</style>