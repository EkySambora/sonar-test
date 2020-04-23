<template>
    <div class="container">
        <popup v-if="popup" @close="closePopup" />
        <popupEdit v-if="popupEdit" :getIdEdit="getIdEdit" @close="closePopupEdit" />
        <button class="btn btn-success mb-3" @click="popupShow">Add</button>
        <table class="table w-50  table-bordered">
            <thead>
                <tr>
                    <!-- <th scope="col">#</th> -->
                    <th scope="col">Username</th>
                    <th scope="col">Password</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in getUsers" :key="user.id">
                    <!-- <th scope="row">{{ 1 }}</th> -->
                    <td>{{ user.name }}</td>
                    <td>{{ user.password }}</td>
                    <td>
                        <button class="btn btn-success" @click="editData(user.id)">Edit</button>
                        <button class="btn btn-warning" @click="deleteData(user.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import popup from '@/components/popup/component'
import popupEdit from '@/components/popupEdit/component'

export default {
    middleware:['auth'],
    components:{
        popup,popupEdit
    },
    data(){
        return{
            title: 'Dashboard',
            popup: false,
            popupEdit: false,
            getIdEdit: ''
        }
    },
    computed:{
        getUsers(){
            return this.$store.state.users
        }
    },
    head(){
        return {
            title: this.title,
            link: [
                { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' }
            ]
        }
    },
    layout: 'dashboard',
    methods:{
        editData(id){
            this.popupEditShow()
            this.getIdEdit = id
        },
        deleteData(id){
            this.$store.commit('DELETE_DATA', id)
        },
        popupEditShow(){
            this.popupEdit = true
        },
        closePopupEdit(){
            this.popupEdit = false
        },
        popupShow(){
            this.popup = true
        },
        closePopup(){
            this.popup = false
        }
    }
}
</script>