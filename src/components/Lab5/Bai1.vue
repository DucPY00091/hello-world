<template>
    <div class="p-5">
      <!-- Hiển thị giá trị của message -->
      <p>{{ message }}</p>
  
      <!-- Hiển thị giá trị của name -->
      <p>Tên của bạn: {{ name }}</p>
  
      <!-- Nút bấm để thay đổi giá trị -->
      <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab5Bai1", // Tên component
  
    // Dữ liệu trong component
    data() {
      return {
        message: "Thông điệp ban đầu", // Giá trị mặc định cho message
        name: "Nguyễn Văn A", // Giá trị mặc định cho name
      };
    },
  
    // Các hàm xử lý sự kiện
    methods: {
      updateMessage() {
        this.message = "Thông điệp đã được thay đổi!"; // Thay đổi message
        this.name = "Nguyễn Văn B"; // Thay đổi name
      },
    },
  };
  </script>
  
  <style>
  /* CSS để định dạng giao diện */
  .p-5 {
    padding: 20px;
  }
  
  p {
    font-size: 16px;
    color: #333;
  }
  
  .btn {
    padding: 10px 20px;
    color: #fff;
    background-color: #343a40;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .btn:hover {
    background-color: #495057;
  }
  </style>
  