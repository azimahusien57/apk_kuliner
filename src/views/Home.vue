<template>
  <div class="home">
   <Navbar/>
<div class="container">
   <Hero/>
 <div class="row mt-4">
 <div class="col">
  <h2>Best <strong>Foods</strong></h2>
 </div>
 <!-- tombol lihat semua -->
 <div class="col">
  <router-link to="/foods" class="btn btn-success float-right"><b-icon-eye></b-icon-eye> Lihat semua</router-link>
 </div>
 </div> 
 <!--  -->
 <div class="row mb-4">
  <!-- panggil dibawa ini -->
  <div class="col md-4 mt-4" v-for="product in products" :key="product.id">
<CardProduct :product="product"/>
  </div>
  
 </div>
  


</div>
   <!-- bagian yg dipanggil -->

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
// setiap elemeny yg berhubungan ditampilan home harusv dipanggil
import Hero from '@/components/Hero.vue'
// card product
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios';
export default {
  name: 'Home',

  components: {
    Navbar,
    Hero,
    CardProduct,
  },  
   data(){
    return {
      products:[],
    };
   },
  //  method data backends
  methods: {
    setProducts(data){
      this.products=data;
    },
  },
  // conding di dalem mothed ini akan bejalan menurul api dari  siback end
  mounted()  {
axios
.get("http://localhost:3000/best-products")
.then((response) => this.setProducts(response.data))
  // handle succes cek
  // console.log("Berhasil :" ,response);  
  // data asli


// bagian data api nya dari backend salah atau typo maka gagal
.catch((error) => console.log(error))
  // handle

  },
};
</script>
