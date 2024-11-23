<template>
    <div class="container">
      <h3>Kiến thức sức khỏe cộng đồng</h3>
      <div class="row">
        <!-- Lặp qua danh sách bài viết bằng v-for -->
        <div v-for="(item, index) in posts" :key="index" class="col-md-4">
          <div class="card">
            <img :src="item.image" class="card-img-top" alt="Image" />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.content }}</p>
              <button class="btn btn-primary">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>

  
  export default {
    name: "Lab6Bai33",
    setup() {
      const month = ref(1);
  
      return { month };
    },
  };
  </script>
  
  <script setup>
  import { ref } from 'vue';
  
  // Dữ liệu bài viết
  const posts = ref([
    {
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20210915/pngtree-fruit-photography-image_881781.jpg',  // Thay thế bằng đường dẫn ảnh thực
      title: 'Lợi ích của quả dừa ghiu cami',
      content: 'Lợi ích của quả dừa ghiu cami là...'
    },
    {
      image: 'https://cayantraidetrong.com/wp-content/uploads/2021/07/cay-ot-hiem-4.jpg',
      title: 'Các loại gia vị tốt cho sức khỏe',
      content: 'Gia vị như tỏi, gừng... rất tốt cho sức khỏe.'
    },
    {
      image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/11/6/tac-dung-cua-cu-lac1-1636193773007710964858.jpg',
      title: '8 loại đồ ăn bổ dưỡng nên ăn mỗi ngày',
      content: 'Dưới đây là 8 loại đồ ăn bổ dưỡng cho sức khỏe...'
    }
  ]);
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  
  .card {
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }
  
  .card-img-top {
    width: 100%;
    height: auto;
  }
  
  .card-body {
    padding: 15px;
  }
  
  .card-title {
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 1em;
    color: #555;
  }
  
  .btn {
    background-color: #007bff;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  