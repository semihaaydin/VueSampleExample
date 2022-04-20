Vue.component('EnvanterList',{
     template:'#envanter-list-template',
     props:{
         title:{type:String,required:true,default:'Liste'},
         items:{type:Array,required: true, default: []}
     },
    computed: {
         totalPrice(){
             let total=0;
             this.items.forEach((item)=>{
                    total+=parseFloat(item.fiyat.toString());
             });
             return total.toFixed(2);
         },

        totalItems(){
            let total=0;
            this.items.forEach((item)=>{
                total+=parseInt(item.adet.toString());
            });
            return total;
        }
    },
    methods:{
        changeItemStatus(item){
            item.arsiv=!item.arsiv;
        },
        deleteItem(id){
           // this.$parent.$data.allItems=this.$parent.$data.allItems.filter(i=>i.id !==id);
            //veya aşağıdaki gibi tanımlayıp vue instance içindeki kendi değerini silmeyi sağlayabiliriz.
            this.$emit('item-delete',id);
        }
    }

});

Vue.component('EnvanterForm',{
    template:'#envanter-form-template',
    data(){
        return{
            item:{}
        }
    },methods:{
        saveItem(){
           Vue.set(this.item,'id',++this.$parent.$data.lastId);
           Vue.set(this.item,'arsiv',false);
            this.$parent.$data.allItems.push(this.item);
            this.item={};
           // this.$emit('item-save',item);
        }
    }

});



const App = new Vue({
    el: '#app',
    data: {
        item: {},
        lastId:0,
        allItems: [
            {"id": 1, "baslik": "masa", "kategori": "Mobilya", "adet": "1", "fiyat": 259, "arsiv": false},
            {"id": 2, "baslik": "kitaplık", "kategori": "Mobilya", "adet": "2", "fiyat": 159, "arsiv": false},
            {"id": 3, "baslik": "monitor", "kategori": "Elektronik", "adet": "5", "fiyat": 400, "arsiv": true}
        ],
        filteredItems:[],
        search:'',

    },
    created() {
        this.lastId=this.allItems.length;
        this.filteredItems=this.allItems;
    },
    computed: {

        activedItems(){
            debugger;
            return this.filteredItems.filter(i=> i.arsiv === false);
        },

        archivedItems(){
            return this.filteredItems.filter(i=> i.arsiv === true);
        }
    },
    methods: {
        itemDeleted(id){
            this.allItems=this.allItems.filter(i=>i.id !==id);
        },
        itemSaved(item){
            this.allItems.push(item);
        },
        searchItem(){
            this.filteredItems=[];
            if(this.search.length>0){
                this.allItems.forEach(item=>{
                    if(item.baslik!=null && item.baslik.includes(this.search)){
                        this.filteredItems.push(item);
                    }

                });
            }else{
                this.filteredItems=this.allItems;
            }

        }
    }
});