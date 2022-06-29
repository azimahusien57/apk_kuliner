<template>
  <!-- testing -->
  <!-- <h1>Food Details{{ $route.params.id }}</h1> -->
  <div class="food-detail">
    <Navbar />
    <!-- tampilan breadcrumb  -->
    <div class="container">
      <!-- mt adalah margin bawah -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">
                  <router-link to="/" class="text-dark">Home</router-link>
                </a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">
                  <router-link to="/foods" class="text-dark">Foods</router-link>
                </a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- gambar -->
      <div class="row mt-5">
        <div class="col-md-6">
          <img
            :src="'../assets/images/' + products.gambar"
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ products.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga:<strong>Rp.{{ products.harga }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-grup">
              <label for="jumlah_pesanan">Jumlah Pesanan</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pesanan"
              />
            </div>
            <div class="form-grup">
              <label for="keterangan">Keterangan</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Keterangan spt:Pedas,Manis,dll...."
              ></textarea>
            </div>
            <hr />
            <!-- submit -->
            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart></b-icon-cart> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },

  data() {
    return {
      products: {},
      pesan: {},
    };
  },
  //  method data backends
  methods: {
    setProducts(data) {
      this.products = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pesanan) {
        this.pesan.products = this.products;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            // push rooter keranjang
            this.$router.push({ path: "/keranjang" })
            this.$toast.success("sukses masuk keranjang", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("jumlah pesanan Harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  // conding di dalem mothed ini akan bejalan menurul api dari  siback end
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
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