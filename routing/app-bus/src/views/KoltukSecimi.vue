<template>
  <div>
    <h2>Koltuk Seçimi</h2>
    <table class="table table-bordered text-center" style="width: inherit">
      <tr>
        <td v-for="item in getKoltukList('Çiftli', 'Cam Kenarı')">
          <button :class="{'koltuk': item.durum === 0, 'koltuk koltuk-dolu': item.durum === 1, 'koltuk koltuk-rez': item.durum === 2}"
                  :disabled="item.durum === 1"
                  @click="koltuk_sec(item.id)">
            {{ item.numara }}
          </button>
        </td>
      </tr>
      <tr>
        <td v-for="item in getKoltukList('Çiftli', 'Koridor')">
          <button :class="{'koltuk': item.durum === 0, 'koltuk koltuk-dolu': item.durum === 1, 'koltuk koltuk-rez': item.durum === 2}"
                  :disabled="item.durum === 1"
                  @click="koltuk_sec(item.id)">
            {{ item.numara }}
          </button>
        </td>
      </tr>
      <tr>
        <td colspan="20"></td>
      </tr>
      <tr>
        <td v-for="item in getKoltukList('Tekli', 'Cam Kenarı')">
          <button :class="{'koltuk': item.durum === 0, 'koltuk koltuk-dolu': item.durum === 1, 'koltuk koltuk-rez': item.durum === 2}"
                  :disabled="item.durum === 1"
                  @click="koltuk_sec(item.id)">
            {{ item.numara }}
          </button>
        </td>
      </tr>
    </table>
  </div>

</template>

<script>
import db from '../assets/db.json'
export default {
  name: 'AramaFormu',
  props: {
    msg: String
  },
  data(){
    return {
        seferler:[],
    }
  },
  created() {
    this.seferler=db.seferler;
    this.fetchKoltuklar();

  },
  methods:{
    fetchKoltuklar(){
          let sefer_id;
          if(this.$route.params.sefer_id){
            sefer_id=parseInt(this.$route.params.sefer_id);
          }else{
            this.$router.push({name:'seferara'});
          }

          this.secilen_sefer=
    },
    getKoltukList(){
    }
  }
}
</script>
