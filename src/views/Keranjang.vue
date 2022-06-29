<template>
  <div class="keranjang">
    <Navbar :updateKeranjang="keranjangs" />
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
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- keranjang -->
      <div class="row">
        <div class="col">
          <h2>Keranjang<strong>Saya</strong></h2>
          <!-- table -->
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <!-- image -->
                  <td>
                    <img
                      :src="' ../assets/images/' + keranjang.products.gambar"
                      class="img-fluid shadow"
                      width="250px"
                    />
                  </td>
                  <!-- keranang -->
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <!-- keterangan -->
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
                  </td>
                  <!-- jumlh pemesanan -->
                  <td>{{ keranjang.jumlah_pesanan }}</td>
                  <!-- harga -->
                  <td align="right">Rp.{{ keranjang.products.harga }}</td>
                  <!-- total harga -->
                  <td align="right">
                    Rp.{{ keranjang.products.harga * keranjang.jumlah_pesanan }}
                  </td>
                  <!-- bagian Hapus -->

                  <td align="center" class="text-danger">
                    <b-icon-trash
                      @click="hapusKeranjang(keranjang.id)"
                    ></b-icon-trash>
                  </td>
                </tr>
                <!-- colspan -->
                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga :</strong>
                  </td>
                  <td colspan="2" align="right">
                    <strong>Rp.{{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- from cekout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-grup">
              <label for="nama">Nama:</label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>

            <div class="form-grup">
              <label for="noMeja">Nomer Meja:</label>
              <input type="text" class="form-control" v-model="pesan.noMeja" />
            </div>
            <hr />
            <!-- submit -->
            <button type="submit" class="btn btn-success" @click="checkout">
              <b-icon-cart></b-icon-cart> checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "Keranjang",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    // hapus
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$toast.error("sukses hapus keranjang", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
          // updatae data keranjang -
          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    // checkout
    checkout() {
      if (this.pesan.nama && this.pesan.noMeja) {
        this.pesan.keranjangs = this.keranjangs;
        axios
       .post("http://localhost:3000/pesanan",this.pesan)
       .then(() => {
// hapus semua keranjjang

          this.keranjangs.map(function (item) {
            return axios
              .delete("http://localhost:3000/keranjangs/" + item.id)
              .catch((error) => console.log(error));
          });

          // push rooter keranjang
          this.$router.push({ path: "/pesanan-sukses" });
          this.$toast.success("sukses dipesan", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Nama Dan No Meja Harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      // handle succes cek
      // console.log("Berhasil :" ,response);
      // data asli

      // bagian data api nya dari backend salah atau typo maka gagal
      .catch((error) => console.log(error));
    // handle
  },
  // computed ini menjjumlahkan
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pesanan;
      }, 0);
    },
  },
};
</script>

<style>
</style>