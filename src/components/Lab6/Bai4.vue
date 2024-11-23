<template>
    <div id="app">
      <h1>Quản Lý Học Sinh</h1>
      
      <!-- Form nhập thông tin học sinh -->
      <form @submit.prevent="addStudent">
        <div class="form-group">
          <label for="name">Họ tên:</label>
          <input type="text" id="name" v-model="student.name" placeholder="Nhập họ tên" required />
        </div>
        <div class="form-group">
          <label for="score">Điểm:</label>
          <input type="number" id="score" v-model="student.score" placeholder="Nhập điểm" required />
        </div>
        <div class="form-group">
          <label for="dob">Ngày sinh:</label>
          <input type="date" id="dob" v-model="student.dob" required />
        </div>
        <button type="submit" class="btn">Thêm học sinh</button>
      </form>
  
      <!-- Danh sách học sinh -->
      <table class="student-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Họ tên</th>
            <th>Điểm</th>
            <th>Ngày sinh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in students" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.score }}</td>
            <td>{{ item.dob }}</td>
            <td>
              <button @click="editStudent(index)" class="btn btn-edit">Sửa</button>
              <button @click="deleteStudent(index)" class="btn btn-delete">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "Lab6Bai4",
    setup() {
      // Dữ liệu học sinh
      const student = ref({
        name: "",
        score: "",
        dob: "",
      });
  
      const students = ref([]);
  
      // Thêm học sinh
      const addStudent = () => {
        if (student.value.name && student.value.score && student.value.dob) {
          students.value.push({ ...student.value }); // Thêm học sinh mới
          // Reset form
          student.value.name = "";
          student.value.score = "";
          student.value.dob = "";
        } else {
          alert("Vui lòng nhập đầy đủ thông tin!");
        }
      };
  
      // Sửa học sinh
      const editStudent = (index) => {
        const currentStudent = students.value[index];
        student.value.name = currentStudent.name;
        student.value.score = currentStudent.score;
        student.value.dob = currentStudent.dob;
        students.value.splice(index, 1); // Xóa mục cũ
      };
  
      // Xóa học sinh
      const deleteStudent = (index) => {
        if (confirm("Bạn có chắc chắn muốn xóa học sinh này?")) {
          students.value.splice(index, 1);
        }
      };
  
      return {
        student,
        students,
        addStudent,
        editStudent,
        deleteStudent,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Tổng thể */
  #app {
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  
  /* Tiêu đề */
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  /* Form */
  form {
    margin-bottom: 20px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  
  button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* Nút */
  .btn {
    background-color: #4CAF50;
    color: white;
  }
  
  .btn-edit {
    background-color: #FFC107;
  }
  
  .btn-delete {
    background-color: #F44336;
    color: white;
  }
  
  .btn:hover {
    opacity: 0.8;
  }
  
  /* Bảng */
  .student-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .student-table th,
  .student-table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .student-table th {
    background-color: #f4f4f4;
  }
  
  .student-table tbody tr:hover {
    background-color: #f9f9f9;
  }
  </style>
  