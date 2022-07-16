<template>
<div class="row justify-content-center">
    <div class="col-md-12">
        <h2>Show Students</h2>
        <div class="row">
            <div class="col-md-100">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                            
                        </tr>
                        </thead>
                         <tbody>
                        <tr v-for="student in Students" :key="student._id">
                            <img src ={{student.img}}>
                            <td>{{student.name}}</td>
                            <td>{{student.email}}</td>
                            <td>{{student.phone}}</td>
                            </tr>                    
                     </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            Students: []
    }
  },
  created() {
    let apiURL = 'http://localhost:4000'
    axios.get(apiURL).then(res => {
        this.Students = res.data
    }).catch(error => {
        console.log(error)
    })
  },
}
</script>