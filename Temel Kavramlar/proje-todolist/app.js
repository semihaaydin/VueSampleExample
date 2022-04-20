const app = new Vue({
    el: '#app',
    name: 'Vue Deneme Projesi',
    data: {
        dataItem:{title:'',status:true},
        dataList:[
            {id:1,title:'ders notlarını hazırla', status:true, list:'İş'},
            {id:2,title:'vue js ders planlaması yap', status:false, list:'İş'},
            {id:3,title:'spring boot ders planlaması yap', status:true, list:'İş'},
            {id:4,title:'Spring boot jwt ders planlamasını yap', status:true, list:'İş'},
            {id:5,title:'Kahve Çikolata al', status:false, list:'Genel'},
            {id:5,title:'Ev silme', status:false, list:'Özel'},
        ],
        listItems:[
            {id:1,title:'Genel'},
            {id:2,title:'İş'},
            {id:3   ,title:'Özel'}
        ],
        newListItem:[
            {id:0,title:''},
        ],
        activeListItem:{},
        filterListItem:[],

    },
    created(){
        const defaultListItem=this.listItems[0];
        this.changeListItem(defaultListItem.id);
    },
    methods:{
        toggleTodoListStatus(index){
            this.todolist[index].status=!this.todolist[index].status;
        },
        toggleTodoListFinishedStatus(index){
            this.todolistCompleted[index].status=!this.todolistCompleted[index].status;
        },
        saveItem(){
            debugger;
            if(this.dataItem.title !==''){
                this.dataItem.id=this.dataList.length+1;
                this.dataItem.list=this.activeListItem.title;
                this.dataList.push(this.dataItem);
                this.clearForm();
                this.changeListItem(this.activeListItem.id);
            }
        },
        deleteItem(id){
            debugger;
            this.dataList=this.dataList.filter(x=>x.id !== id)
        },
        changeListItem(id){
            const listItem=this.listItems.find(x=>x.id===id)
            debugger;
            if(listItem!==null){
                this.activeListItem=listItem;
                this.filterListItem=this.dataList.filter(x=>x.list===listItem.title);
            }
        },
        clearForm(){
            this.dataItem={title:'',status:true};
        },
        listItemSave(){
            if(this.newListItem.title !=null){
                this.newListItem.id=this.listItems.length + 1;
                this.listItems.push(this.newListItem);
                this.newListItem={};
            }
        },
        listItemCount(title){
            if(title!==null)
            {
                return this.dataList.filter(item=>item.list===title).length;
            }
        }
    },
    computed:{
        todolist(){
            debugger;
            return this.filterListItem.filter(x=>x.status===true);
        },
        todolistCompleted(){
            return this.filterListItem.filter(x=>x.status===false);
        }

    }
})