<template>
    <div class="cover-all">
        <div class="cover">
            <div class="box">
                <div class="form-title">
                    Add User 
                    <span @click="closePopup">&times;</span>
                </div>
                <div class="form">
                    <input type="text" placeholder="username">
                    <input type="password" placeholder="password">
                    <div class="button">Save</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        closePopup(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" src="./style.scss"/>