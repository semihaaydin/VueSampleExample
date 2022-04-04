const app = new Vue({
    el: '#app',
    name: 'VueJS Denemeleri',
    data: {
        harcamalar:[
            {id:1,title:'Çağdaş',tutar:'108.7',kategoriId:1},
            {id:2,title:'Altun Bilekler',tutar:'110.2',kategoriId:1},
            {id:3,title:'Kasap',tutar:'10.50',kategoriId:1},
            {id:4,title:'Migros',tutar:'10.50',kategoriId:1},
            {id:5,title:'İş Bankası',tutar:'10.50',kategoriId:2},
            {id:6,title:'FinansBank',tutar:'10.50',kategoriId:2},
            {id:7,title:'Akbank',tutar:'10.50',kategoriId:2},
            {id:8,title:'Mavi',tutar:'150.50',kategoriId:4},
            {id:9,title:'Defacto',tutar:'150.50',kategoriId:4},
            {id:10,title:'Zara',tutar:'150.50',kategoriId:4},
            {id:11,title:'Mango',tutar:'150.50',kategoriId:4},
            {id:12,title:'Sinema',tutar:'110.5',kategoriId:5},
            {id:13,title:'Tiyatro',tutar:'110.5',kategoriId:5},
            {id:14,title:'Gratis',tutar:'110.5',kategoriId:6},
            {id:15,title:'Watsons',tutar:'110.5',kategoriId:6},

        ],
        kategoriler:[
            {id:1,title:'Market'},
            {id:2,title:'Kredi Kartı'},
            {id:3,title:'Faturalar'},
            {id:4,title:'Giyim'},
            {id:5,title:'Eğlence'},
            {id:6,title:'Kozmetik'},
        ],
        activeKategori:{},
        newKategori:[{id:0,title:''},],
        newHarcama:{id:0,title:'',tutar:'0.00',kategoriId:0},
        filterListHarcama:[],
    },
    created(){
        const defaultKategori=this.kategoriler[0];
        this.changeKategori(defaultKategori);
    },
    methods:{
        changeKategori(item){
            debugger;
         this.activeKategori.title=item.title;
            this.activeKategori.id=item.id;
         return this.filterListHarcamaByKategoriId(item.id);
        },
        createKategori(){
            if(this.newKategori.title !=null){
                this.newKategori.id=this.kategoriler.length + 1;
                this.kategoriler.push(this.newKategori);
                this.newKategori={};

            }
        },

        createHarcama(){
            debugger;
            if(this.newHarcama.title !=null){
                this.newHarcama.id=this.harcamalar.length + 1;
                this.newHarcama.kategoriId=this.activeKategori.id;
                this.harcamalar.push(this.newHarcama);
                debugger;
                this.newHarcama={};
                debugger;
                this.changeKategori(this.activeKategori);
            }
        },
        filterListHarcamaByKategoriId(kategoriId){
            debugger;
          this.filterListHarcama=this.harcamalar.filter(x=>x.kategoriId===kategoriId);
        },
        countHarcamaByKategori(kategoriId){
            return this.harcamalar.filter(x=>x.kategoriId===kategoriId).length;
        }

    },
    computed:{
        listHarcamaByKategoriId(){
            return this.filterListHarcama;
        }

    }
})