<template>
    <div class="p-5">
      <!-- Input với v-model để binding với biến userInput -->
      <input
        v-model="userInput"
        placeholder="Nhập dữ liệu vào đây"
        class="form-control mb-3"
      />
  
      <!-- Hiển thị giá trị của userInput -->
      <p>Giá trị bạn nhập: {{ userInput }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab5Bai2", // Tên component
  
    // Khai báo dữ liệu
    data() {
      return {
        userInput: "FPL", // Giá trị mặc định của input
      };
    },
  };
  </script>
  
  <style>
  /* CSS để cải thiện giao diện */
  .p-5 {
    padding: 20px;
  }
  
  input.form-control {
    padding: 10px;
    width: 100%;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .mb-3 {
    margin-bottom: 15px;
  }
  
  p {
    font-size: 18px;
    color: #333;
  }
  </style>
  