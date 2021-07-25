<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-white">TodoList</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link text-white">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/addnew" class="nav-link text-white">Add Todo</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>

</style>