
<template>
  
  <h1>Nav Bar</h1>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">LAB1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          LAB1
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/Lab1/B1">Bai1</a></li>
          <li><a class="dropdown-item" href="/Lab1/B2">Bai2</a></li>

          <li><a class="dropdown-item" href="/Lab1/B3">Bai3</a></li>
        </ul>
      </li>
       <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          LAB2
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/Lab2/Bai1">Bai1</a></li>
         <li><a class="dropdown-item" href="/Lab2/Bai2">Bai2</a></li>
         

          <!-- <li><a class="dropdown-item" href="/Lab1/B3">Bai3</a></li> -->
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          LAB3
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/Lab3/Bai1">Bai1</a></li>
         <li><a class="dropdown-item" href="/Lab3/Bai2">Bai2</a></li>
         <li><a class="dropdown-item" href="/Lab3/Bai3">Bai3</a></li>
         <li><a class="dropdown-item" href="/Lab3/Bai4">Bai4</a></li>

          <!-- <li><a class="dropdown-item" href="/Lab1/B3">Bai3</a></li> -->
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          LAB5
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/Lab5/Bai1">Bai1</a></li>
          <li><a class="dropdown-item" href="/Lab5/Bai2">Bai2</a></li>
          <li><a class="dropdown-item" href="/Lab5/Bai3">Bai3</a></li>
          <li><a class="dropdown-item" href="/Lab5/App">Bai4</a></li>
         

          <!-- <li><a class="dropdown-item" href="/Lab1/B3">Bai3</a></li> -->
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          LAB6
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/Lab6/Bai1">Bai1</a></li>
          <li><a class="dropdown-item" href="/Lab6/Bai22">Bai2</a></li>
          <li><a class="dropdown-item" href="/Lab6/Bai33">Bai3</a></li>
          <li><a class="dropdown-item" href="/Lab6/Bai4">Bai4</a></li>
         

          <!-- <li><a class="dropdown-item" href="/Lab1/B3">Bai3</a></li> -->
        </ul>
      </li>

      
      
      <li class="nav-item"> 
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
</template>

<script>
export default {
name: 'NavBar'
}
</script>

<style scoped>

</style>
