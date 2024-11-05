<template>
  <div class="container-fluid d-flex align-items-center justify-content-center" style="height: 100vh;">
    <div class="my-4">
      <h3 class="text-center text-danger fw-bold">Bảng Thành Phần Dinh Dưỡng</h3>
      <table class="table table-bordered text-center mx-auto">
        <thead>
          <tr>
            <th class="align-middle" rowspan="2">Thành Phần</th>
            <th colspan="2" class="bg-warning text-white align-middle">Giá Trị</th>
          </tr>
          <tr>
            <th class="align-middle">Khối Lượng</th>
            <th class="align-middle">% DV*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="align-middle">Calories</td>
            <td class="align-middle">200 kcal</td>
            <td class="align-middle">20%</td>
          </tr>
          <tr>
            <td class="align-middle">Chất Béo</td>
            <td class="align-middle">9 g</td>
            <td class="align-middle">14%</td>
          </tr>
          <tr>
            <td class="align-middle">Chất Béo Bão Hòa</td>
            <td class="align-middle">2 g</td>
            <td class="align-middle">10%</td>
          </tr>
          <tr>
            <td class="align-middle">Chất Đạm</td>
            <td class="align-middle">8 g</td>
            <td class="align-middle">16%</td>
          </tr>
          <tr>
            <td class="align-middle">Chất Xơ</td>
            <td class="align-middle">5 g</td>
            <td class="align-middle">20%</td>
          </tr>
          <tr>
            <td class="align-middle">Đường</td>
            <td class="align-middle">12 g</td>
            <td class="align-middle">0%</td>
          </tr>
          <tr>
            <td class="align-middle" rowspan="2">Vitamin</td>
            <td class="align-middle">Vitamin C</td>
            <td class="align-middle">25%</td>
          </tr>
          <tr>
            <td class="align-middle">Vitamin D</td>
            <td class="align-middle">10%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lab2Bai1Component"
};
</script>

<style scoped>
.table th, .table td {
  vertical-align: middle;
  text-align: center;
}
</style>
