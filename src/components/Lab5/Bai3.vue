<template>
    <div class="container mt-5">
      <h2 class="mb-4">Thông tin cá nhân</h2>
  
      <!-- Form nhập thông tin -->
      <div class="form-group mb-3">
        <label for="fullName">Họ và tên:</label>
        <input
          id="fullName"
          v-model="fullName"
          type="text"
          placeholder="Nhập họ và tên"
          class="form-control"
        />
      </div>
  
      <div class="form-group mb-3">
        <label for="age">Tuổi:</label>
        <input
          id="age"
          v-model="age"
          type="number"
          placeholder="Nhập tuổi"
          class="form-control"
        />
      </div>
  
      <div class="form-group mb-3">
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Nhập email"
          class="form-control"
        />
      </div>
  
      <!-- Hiển thị thông tin đã nhập -->
      <div class="card mt-4">
        <div class="card-body">
          <h4>Thông tin đã nhập:</h4>
          <p>Họ và tên: {{ fullName }}</p>
          <p>Tuổi: {{ age }}</p>
          <p>Email: {{ email }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab5Bai3", // Tên component
  
    // Dữ liệu trong form
    data() {
      return {
        fullName: "", // Họ và tên
        age: "", // Tuổi
        email: "", // Email
      };
    },
  };
  </script>
  
  <style>
  /* CSS để làm đẹp giao diện */
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  h2 {
    text-align: center;
  }
  
  .form-control {
    padding: 10px;
    font-size: 16px;
  }
  
  .card {
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .card-body h4 {
    margin-bottom: 15px;
    color: #333;
  }
  </style>
  