<template>
  <div>
    <Navbar />

    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar <strong>Makanan</strong></h2>
        </div>
      </div>
      <!-- imputan -->
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Makanan Kesukaan anda"
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />

            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- untuk botton -->
      <div class="row mb-5">
        <!-- panggil dibawa ini -->
        <div
          class="col md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
// card product
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Foods",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  //  method data backends
  methods: {
    setProducts(data) {
      this.products = data;
    },
    // bagian search data
    searchFood() {
      axios
        // untuk pencarian data http://localhost:3000/products?q=
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => this.setProducts(response.data))
        // handle succes cek
        // console.log("Berhasil :" ,response);

        // bagian data api nya dari backend salah atau typo maka gagal
        .catch((error) => console.log(error));
      // handle
    },
  },
  // conding di dalem mothed ini akan bejalan menurul api dari  siback end
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      // handle succes cek
      // console.log("Berhasil :" ,response);
      // data asli

      // bagian data api nya dari backend salah atau typo maka gagal
      .catch((error) => console.log(error));
    // handle
  },
};
</script>

<style>
</style>
