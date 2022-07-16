<template>
    <div>
      <nav  class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
        <div class="container">
          <router-link to="/" class="navbar-brand float-left">MEVN Stack CRUD</router-link>
          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Create Student</router-link>
            </li>
            <li class="nav-item">
              <router-link to="view" class="nav-link">  View Students</router-link>
            </li>
            <li class="nav-item">
              <router-link to="show" class="nav-link">  Show Students</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <!-- -------router-view------- -->
      <div class="container mt-5">
        <router-view></router-view>

      </div>
    </div>
  </template>

  <script>

  export default {
    components: {
    }
  }
  </script>