<template>
    <div class="cover-all">
        <div class="cover">
            <div class="box">
                <div class="form-title">
                    Hapus Data
                    <span @click="closePopup">&times;</span>
                </div>
                <div class="title">
                    <p>Apakah anda yakin ingin menghapus Data ini?</p>
                </div>
                <div class="btn">
                    <button @click="closePopup">Tidak</button>
                    <button class="button" @click="deleteData">Ya</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   props:['getIdDelete'],
    methods:{
        closePopup(){
            this.$emit('close')
        },
        deleteData(){
            this.$store.commit('DELETE_DATA', this.getIdDelete)
            this.closePopup()
        }
    }
}
</script>

<style lang="scss" src="./style.scss"/>