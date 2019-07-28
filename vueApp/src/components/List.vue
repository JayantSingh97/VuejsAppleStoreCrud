<template>
    
    
    <div class="newlist">
        
       <div class="container">    
           
           <div class="panel panel-default">    
               <div class="panel panel-heading"> Details List   </div>
             <div class="panel-body">  
          
 <h2 class="text-left">Details Page</h2>
           <div class="navbar-right inputcutom">
               <input type="text" id="filter" placeholder="serach" class="form-control input-sm "   v-model="search">   
          </div>
  <table class="table table-hover text-center">
    <thead >
      <tr >
        <th class="text-center">ID</th>
        <th class="text-center">Name</th>
        <th class="text-center">Email</th>
        <th class="text-center">Body</th>
      </tr>
    </thead>
    <tbody >
        
       <tr v-for="value in filtreddata" :key="value.id">
            <td> {{value.id}}</td>
           <td> {{value.username}}</td>
           <td> {{value.email}}</td>
            <td> {{value.address}}</td>
            
           
       </tr>
     
    </tbody>
  </table>
</div>
  </div>
          </div>
    </div>
     
          
</template>
 
<script>
 
 
export default {
  name: 'newlist',
  data () {
    return {
        DataList:[],
        search:'',
    }
     
  },
  methods:{
     
    
      
    } ,
    created:function(){
    
              this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(data){
            
             this.DataList = data.body.slice(0,10);
            
              })
            },
              computed:{

              filtreddata:function(){
                return this.DataList.filter((d)=> {
                  return d.username.toUpperCase().match(this.search.toUpperCase());
                });
              }

            }
    
}
 
</script>

 <style scoped>
    .inputcutom{
        margin-left: 24px;
    }
 </style>
 