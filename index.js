var app = new Vue({
    el: '#app',
    created(){
        this.GetCategories()
        
    },
    data: {
      message: 'Merhaba',
     
      categories:[],
      category:{},
      UserName:'',
      password:''
    },
    methods:{
        GetCategories: function(){
            axios.get('http://localhost:61307/api/category')
            
            .then(response =>{
               
                if(response.data.isSuccessFull==true){
                   
                this.categories = response.data.entities;
                 }
                 console.log(this.categories)
              
                 }
                
            )
            .catch(err=>{
             console.log(err.status.text)
            })
        },
        GeetCategoryById: function(category){
            axios.get('http://localhost:61307/api/category/'+ category.id)
            .then(response =>{
               
                if(response.data.isSuccessFull==true){
                   
                this.category = response.data.entity;
                 }
                 console.log(this.category)
                 console.log(data)
                 }
                
            )
            .catch(err=>{
             console.log(err.status.text)
            })
        },
        login : function(UserName, password){
            
            var dat = {
                'UserName': UserName,
                'password': password
            }

            var headers = {
                withCredentiasl : true,
                headers: {'Content-Type': 'application/json-patch'+'json'}
            }
            return axios.post('https://localhost:44393/Autt', dat, headers)
            .then(response => {
                if(response.data.token){
                   localStorage.setItem('user',JSON.stringify(response));
                }
                return response;
            })
            .catch(err =>{
                return err;
            })
        },

    loginOnSubmit : function(){
        this.login(this.UserName, this.password)
        .then(response => {
            if(response.status ==200){
                alert("Giriş başarılı");
            }else{
                alert("Başarısız işlem");
            }
        })
    } 
    }
})