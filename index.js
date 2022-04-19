var app = new Vue({
    el: '#app',
    data: {
      message: 'Merhaba',
      created(){
          this.GetCategories();
      },
      categories:[]
    },
    methods:{
        GetCategories: function(){
            axios.get('http://localhost:61307/api/category')
            
            .then(response =>{
               
                if(response.data.isSuccessFull==true){
                    console.log(response)
                this.categories = response.data.entities;
                 }
                 }
            
            )
            .catch(err=>{
             console.log(err.status.text)
            })
        }
    }
  })