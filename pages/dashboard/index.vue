<template>
    <div class="container">
        <popupAdd v-if="popup" @close="closePopup" />
        <popupEdit v-if="popupEdit" :getIdEdit="getIdEdit" @close="closePopupEdit" />
        <popupDelete v-if="popupDelete" :getIdDelete="getIdDelete" @close="closePopupDelete" />
        <button class="btn btn-success mb-3" @click="popupShow">Add</button>
        <table class="table w-50  table-bordered" v-if="getUsers.length > 0">
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
                        <button class="btn btn-warning" @click="popupDeleteShow(user.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <h2>Data Kosong</h2>
        </div>
    </div>
</template>

<script>
import popupAdd from '@/components/popupAdd/component'
import popupEdit from '@/components/popupEdit/component'
import popupDelete from '@/components/popupDelete/component'

export default {
    middleware:['auth'],
    components:{
        popupAdd,popupEdit,popupDelete
    },
    data(){
        return{
            title: 'Dashboard',
            popup: false,
            popupEdit: false,
            popupDelete: false,
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
        popupDeleteShow(id){
            this.popupDelete = true
            this.getIdDelete = id
        },
        popupEditShow(){
            this.popupEdit = true
        },
        closePopupEdit(){
            this.popupEdit = false
        },
        closePopupDelete(){
            this.popupDelete = false
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