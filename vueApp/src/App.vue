<template>
  <div id="app">   
 <nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
 
    <span class="container">
       <img  src="..\src\assets\logo1.png" alt="Apple Store" class="nvarbar-brand websitelogo"> <span style="color:white;"><strong style="margin-left: 13px;">  Online Apple Sotre</strong></span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<div class="navbar-nav navbar-collapse" id="navbarsExample03">
    <ul class="navbar-nav mr-auto"> 
        <li class="nav-item active">
       <router-link to="/Products" class="nav-link">   <span class="fa fa-mobile"></span> Products </router-link>
      </li>
       <li class="nav-item active">
       <router-link to="/Products" class="nav-link">   <span class="fa fa-redo"></span> Refresh Dashboard </router-link>
      </li> 
    </ul> 
  </div>
  <div class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
    <ul class="navbar-nav mr-auto">
       <li class="nav-item active navbar-right">
       <router-link to="/login" class="nav-link">   <span class="fa fa-user-lock"> </span> Welcome : User </router-link>
      </li>
       <li class="nav-item active navbar-right">
       <li v-on:click="alertdev()" class="nav-link grab">   <span class="fa fa-lock"> </span> Login </li>
       
       
    </ul> 
  </div>
 </span>
</nav> 
 <router-view v-if="userlogedin"/>  
</div> 
</template>

<script>
import router from './router'
export default {
  name: 'app'
  ,
  data(){
    return{
      userlogedin:true,
      userlogedout:true,
       
     
    }
  },
  methods:{
    Logout(){
      this.$router.push({ name: 'Login', query: { redirect: '/Login' } });
               this.userlogedin = !this.userlogedin;  
            
    },
    alertdev(){
      alert("Login Panel is underdevelopment will be add to site soon.");
    }
  }
  ,
  beforeMount(){
    this.$router.replace("products");
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   
}
.websitelogo
{
    height: 37px;
    width: 37px;
    border-radius: 82px;
    background: white;
}
.navbar{
  font-size: 12px;
}
.layoutoverflowoption
{
  overflow-y:auto;
   
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
}
::-webkit-scrollbar {
    width: 2px;
}

.grab {cursor: -webkit-grab; cursor: grab;}
.list-group-item{
   
   border: none;
}



 
  .progress {cursor: progress;}
 

::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}
.btn-default
{
  color:black;
  width: 100%;
}

.btn-default:hover
{
  background-color:#e1dfe2;
}
</style>
