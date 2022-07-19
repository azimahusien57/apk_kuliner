<template>
  <div class="pesanan-sukses">
    <Navbar/>
   
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/images/menunggu.png" width="30%"/>
 <h2><strong>success!!</strong></h2>
 <h4>pesanan anda segera di proses<br>selamant menunggu</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
name: "PesananSukses",
components: {
    Navbar,
},
};
</script>

<style>

</style>