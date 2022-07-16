<!-- eslint-disable no-unused-vars -->
<template>
<div class="row justify-content-center">
    <div class="col-md-6">
        <h2>Create Students</h2>
        <form @submit.prevent="handleSubmitForm">
            <div class="form-group">
                <label for="img">Picture</label>
                <input type="text" src="image/img" class="form-control" v-model="student.img" required>
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" v-model="student.name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" v-model="student.email" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" v-model="student.phone" required>
            </div>
            <div class="form-group">
                <button class="btn btn-success btn-block">Create</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            student: {
                img: '',
                name: '',
                email: '',
                phone: '',
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/create-student';
            axios.post(apiURL, this.student).then(() => {
                this.$router.push('/view');
                this.student = {
                    img: '',
                    name: '',
                    email: '',
                    phone: '',
                }
            }).catch(error => {
                console.log(error);
            })

        }
    }
 }
</script>