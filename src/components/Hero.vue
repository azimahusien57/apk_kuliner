<template>
 <div class="hero">
<!-- untuk tampilan destop -->
<div class="d-none d-md-block">
   <div class="row mt-4">
      <div class="col-md-6">
        <div class="d-flex h-100">
<div class="justify-content-center align-self-center">
  <h2><strong>Delecious Foods Menu</strong><br>in your App</br></h2>
  <p>Ayo segera pilih makanan favorite Anda</p>
  <!-- button diarahkan ke foods -->
  <router-link class="btn btn-lg btn-success" to="/foods"><b-icon-arrow-right ></b-icon-arrow-right>Pesan</router-link>
</div>
        </div>

      </div>
      <!-- gambar baground -->
      <div class="col-md-6">
<img src="../assets/images/p.png" width="100%"/>

      </div>
  </div>
</div>


<!-- yg kedua untuk tampilan mobile -->
<div class="d-sm-block d-md-none">

   <div class="row mt-4">
      <div class="col-md-6 mb-3">
<img src="../assets/images/p.png" width="100%"/>

      </div>
      <div class="col-md-6">
        <div class="d-flex h-100">
<div class="justify-content-center align-self-center">
  <h2><strong>Delecious Foods Menu</strong><br>in your App </br></h2>
  <p>Ayo segera pilih makanan favorite Anda</p>
  <button class="btn btn-lg btn-success"><b-icon-arrow-right ></b-icon-arrow-right> Pesan</button>
</div>
        </div>

      </div>
    
  </div>
</div>

 </div>
</template>

<script>
export default {
name: "Hero" 
}
</script>

<style>

</style>