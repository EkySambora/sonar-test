<template>
    <div class="container">
        <popup v-if="popup" @close="closePopup" />
        <button class="btn btn-success mb-3" @click="addData">Add</button>
        <table class="table w-50  table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">User</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>
                        <button class="btn btn-success">Edit</button>
                        <button class="btn btn-warning">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Larry</td>
                    <td>
                        <button class="btn btn-success">Edit</button>
                        <button class="btn btn-warning">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Larry</td>
                    <td>
                        <button class="btn btn-success">Edit</button>
                        <button class="btn btn-warning">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import popup from '@/components/popup/component'
export default {
    middleware:['auth'],
    components:{
        popup
    },
    data(){
        return{
            title: 'Dashboard',
            popup: false
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
        addData(){
            this.popup = true
        },
        closePopup(){
            this.popup = false
        }
    }
}
</script>