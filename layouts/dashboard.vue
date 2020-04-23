<template>
  <div>
    <Header />
    <Sidebar />
    <nuxt class="nxt" />
  </div>
</template>
<script>
import Header from '@/components/dashboard/header/component'
import Sidebar from '@/components/dashboard/sidebar/component'

export default {
    components:{
        Header,
        Sidebar
    }
}
</script>

<style lang="scss" scope>
    .nxt{
        margin-left:270px !important;
        margin-top: 80px;
    }
</style>