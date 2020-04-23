<template>
    <div class="wrapp">
        <h2>Selamat Datang {{ getUsername }}</h2>
    </div>
</template>
<script>
export default {
    layout:'dashboard',
    computed:{
        getUsername(){
            return this.$store.state.username
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