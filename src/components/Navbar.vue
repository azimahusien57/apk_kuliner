<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand href="#">Kulineran</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/foods">Foods</router-link>
            </li>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- bagian keranjang -->
            <ul class="navbar-nav ml-auto">
              <!-- bagian ini masuk rooter link -->
              <li class="nav-item">
                <router-link class="nav-link" to="/keranjang"
                  >Keranjang
                  <b-icon-bag></b-icon-bag>
                  <span class="badge badge-success ml-2">
                    {{
                      updatekeranjang
                        ? updatekeranjang.length
                        : jumlah_pesanans.length
                    }}</span
                  >
                </router-link>
              </li>
            </ul>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  data() {
    return {
      jumlah_pesanans: [],
    };
  },
  // prop data yg dioper dari satu komponen ke komponen lain
  props: ["updatekeranjang"],
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },

  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlah(response.data))
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