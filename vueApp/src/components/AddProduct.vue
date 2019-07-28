<template> 
  <div id="addproduct">
      <div class="container">
 
<div class="card"   v-if="!isproductcreated">
    <div class="col-6 cardbtn">
    <div class="btn btn-primary btn-block"> <span class="fa fa-plus"></span> Add New Product To Website</div>
    </div>
  <div class="card-body cardcutom">
 <form   @submit="AddProduct" 
         novalidate="true"> 
          
  <div class="row">
      <div class="col-6">
           <div class="form-group">
    <label for="Productmodel"><span class="fa fa-laptop"></span>Product Model</label>
    <input  
    v-model="ProductName" class="form-control form-control-sm" name="ProductName" id="ProductName"  
    placeholder="Enter Product model"> 
    {{ProductName}}
  </div>
      </div>
      <div class="col-6">
           <div class="form-group">
    <label for="Price">&#8377; Price</label>
    
    <input   class="form-control form-control-sm"
    v-model="Price" name="Price" id="Price"  
    placeholder="Enter  model Price"> 
     {{Price}}
  </div>
      </div>
      <div class="col-6">
           <div class="form-group">
    <label for="availability"><span class="fa fa-check"></span> IsAvailable</label>
    <input  class="form-control form-control-sm"
    v-model="IsAvailable" name="availability" id="IsAvailable"  
    placeholder="Enter availability"> 
     {{IsAvailable}}
  </div>
      </div>
      <div class="col-6">
           <div class="form-group">
    <label for="Launchdate"><span class="fa fa-time"></span>Launchdate</label>
    <input  class="form-control form-control-sm"
    v-model="Launchdate" name="Launchdate" id="Launchdate"  
    placeholder="Enter Launchdate"> 
     {{Launchdate}}
  </div>
      </div>
        <div class="col-6">
           <div class="form-group">
    <label for="Color"><span class="fa fa-paint-brush"></span>Color</label>
    <input  
    v-model="Color" class="form-control form-control-sm" name="Color" id="Color"  
    placeholder="Enter Product Color"> 
     {{Color}}
  </div>
      </div>
      <div class="col-6">
           <div class="form-group">
    <label for="Camera"><span class="fa fa-camera"></span>Camera</label>
    <input   class="form-control form-control-sm"
    v-model="Camera" name="Camera" id="Camera"  
    placeholder="Enter Camera Detail"> 
     {{Camera}}
  </div>
      </div>
      <div class="col-6">
           <div class="form-group">
    <label for="Display"><span class="fa fa-phone"></span>Display</label>
    <input  class="form-control form-control-sm"
    v-model="Display" name="Display" id="Display"  
    placeholder="Enter Display infomation"> 
     {{Display}}
  </div>
      </div>
      <div class="col-6">
           <div class="form-group">
    <label for="Processor"><span class="fa fa-cog"></span>Processor</label>
    <input  class="form-control form-control-sm"
    v-model="Processor" name="Processor" id="Processor"  
    placeholder="Enter Product Processor detail"> 
     {{Processor}}
  </div>
      </div>
        <div class="col-6">
           <div class="form-group">
    <label for="Storage"><span class="fa fa-database"></span>Storage</label>
    <input  
    v-model="Storage" class="form-control form-control-sm" name="Storage" id="Storage"  
    placeholder="Enter Product Storage"> 
     {{Storage}}
  </div>
      </div>
      <div class="col-6">
           <div class="form-group">
    <label for="Weight"><span class="fa fa-thermometer-quarter"></span>Weight</label>
    <input   class="form-control form-control-sm"
    v-model="Weight" name="Weight" id="Weight"  
    placeholder="Enter Product Weight"> 
     {{Weight}}
  </div>
      </div>
      <div class="col-6">
           <div class="form-group">
    <label for="Productmodel"><span class="fa fa-list"></span>Description</label>
    <input  class="form-control form-control-sm"
    v-model="Description" name="Description" id="Description"  
    placeholder="Enter Product Description"> 
     {{Description}}
  </div>
      </div>
      <div class="col-6">
           <div class="form-group">
    <label for="Category"><span class="fa fa-address-book"></span>Category</label>
    <input  class="form-control form-control-sm"
    v-model="Category" name="Category" id="Category"  
    placeholder="Enter Product Category"> 
     {{Category}}
  </div>
       
       
      
       </div>
     
  </div>
   <div class="row"> 
     
      <div class="col-12">
           <div class="form-group">
    <label for="ImageUrl"><span class="fa fa-globe"></span>ImgURL</label>
    <input  class="form-control form-control-sm"
    v-model="ImageUrl" name="ImageUrl" id="ImageUrl"  
    placeholder="Enter Product ImageUrl"> 
  </div>
       
       <div class="col-6">
           <img class="urltoimg" v-bind:src="ImageUrl"  v-if="ImageUrl.length > 5" alt="URL is wrong no image found at obve URL.">
             
      </div>
      
       
       </div>
      </div>

 <div class="row"> 
     
      <div class="col-12">
          <button class="btn btn-success  savebtn"  > <span class="fa fa-upload"></span> Save Product</button>
            <button type="reset"  class="btn btn-danger  savebtn"> <span class="fa fa-trash"></span> Reset Form</button>
      </div>
      </div>

     
   <div class="row"> 
     <p v-if="errors.length">
    <b class="text-danger ">Please correct the following error(s):</b>
    <ol>
      <li class="text-danger" v-for="error in errors" :key="error.error">{{ error }}</li>
    </ol>
  </p>
   </div>
 </form>
  </div>
</div>


<div v-if="isproductcreated" >
  <div v-for="Produtoview in NewProducts" :key="Produtoview.ProductId">
  <div class="row" >
  <div class="col-lg-5">
    <div class="card" >
  <img class="productview card-img-overlay" v-bind:src="Produtoview.imageUrl"  alt="Product">  
  </div>
  </div>
  <div class="col-lg-5"> 
  <div class="card">
  <ul class="list-group list-group-flush">
    <h4 class="text-primary Custom-list-item"><span class="fa fa-laptop"></span> Model Name :  {{Produtoview.productName}}</h4>
    <li class="list-group-item Custom-list-item"><span class="fa fa-brush"></span> Color :  {{Produtoview.color}}</li>
    <li class="list-group-item Custom-list-item"><span class="fa fa-database"></span> Is Available 
     <label class="btn-success lablebtn" v-if="Produtoview.isAvailable == 'True'" > In stock </label> 
        <label class="lablebtn btn-danger" v-else> Out of stock</label> 
    </li>
      <li class="list-group-item Custom-list-item"><span class="fa fa-camera"></span> Camera :  {{Produtoview.camera}}</li>
        <li class="list-group-item Custom-list-item"><span class="fa fa-mobile"></span> Display :  {{Produtoview.display}}</li>
          <li class="list-group-item Custom-list-item"><span class="fa fa-cogs  "></span> Processor :  {{Produtoview.processor}}</li>
            <li class="list-group-item Custom-list-item"><span class="fa fa-database"></span> Storage :  {{Produtoview.storage}}</li>
            <li class="list-group-item Custom-list-item"><span class="fa fa-tasks"></span> Weight :  {{Produtoview.weight}}</li>

     <li class="list-group-item text-danger Custom-list-item">&#8377; <strong>Price :  {{Produtoview.price}}</strong></li>
      <li class="list-group-item Custom-list-item"><span class="fa fa-calendar-check"></span> Launch Date :  {{Produtoview.launchdate}}</li>
  </ul>
   <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
              <span class="fa fa-star-half"></span>
    </li> 
  </ul>
  <div class="card-body"> 
    
     <router-link    to="/Products" class="btn btn-outline-info">   <span class="fa fa-arrow-left"></span> Go Back </router-link>
      <button type="button"  v-on:click="editproduct()"     class="btn btn-outline-success">   <span class="fa fa-wrench"></span></button>
       <button type="button"  v-on:click="DeleteProduct(Produtoview.productId)"     class="btn btn-outline-danger">   <span class="fa fa-trash"></span> </button>
  </div>
  
</div>
  </div>
  </div>
  <div class="card-body container discription">
    <h4> <span class="fa fa-info-circle"></span> Product Company Information</h4>
    <hr>
    {{Produtoview.description}}  
  </div>
</div>
</div>
  </div> 
    </div> 
</template> 
<script>

// Vue CRUD Operation(s).

import { from } from 'zen-observable';
export default {
  name: 'addproduct',
  data () {
    return { 
      ProductId:'',
      ProductName:'',Price:'',
      IsAvailable:'',Launchdate:'',Category:'',Color:'',ImageUrl:'',Camera:'',
      Display:'',Processor:'',Storage:'',Weight:'',Description:'', 
      errors:[], 
      NewProducts:[], 
      isproductcreated:false
    }
  },
  methods:{

      
     AddProduct: function (e) {
      this.errors = []; 
      
      if (this.ProductName.length <= 0)
        this.errors.push('Product Model Name is Required.');
        if (this.Price.length <= 0)
        this.errors.push('Product Price is Required.');
          if (this.Category.length <= 0)
        this.errors.push('Product Category is Required.');
          if (this.Camera.length <= 0)
        this.errors.push('Product Camera detail is Required.');
          if (this.Weight.length <= 0)
        this.errors.push('Product Weight is Required.');
          if (this.Description.length <= 0)
        this.errors.push('Product Description is Required.');
          if (this.Launchdate.length <= 0)
        this.errors.push('Product Launchdate is Required.');
          if (this.Storage.length <= 0)
        this.errors.push('Product Storage is Required.');
          if (this.Processor.length <= 0)
        this.errors.push('Product Processor is Required.');
          if (this.Display.length <= 0)
        this.errors.push('Product Display is Required.');
          if (this.ImageUrl.length <= 0)
        this.errors.push('Product ImageUrl is Required.');
          if (this.Color.length <= 0)
        this.errors.push('Product Color is Required.');
             if (this.IsAvailable.length <= 0) 
        this.errors.push('Product availability is Required.');
          

      if (!this.errors.length) 
      {  
          var prodcut = new Object(); 
          prodcut.ProductId = "1020";
          prodcut.ProductName = this.ProductName;
          prodcut.Price =  this.Price;
          prodcut.Category = this.Category;
          prodcut.Camera = this.Camera;
          prodcut.ImageUrl = this.ImageUrl;
          prodcut.Color = this.Color;
          prodcut.Storage = this.Storage;
          prodcut.IsAvailable = this.IsAvailable;
          prodcut.Processor = this.Processor;
          prodcut.Launchdate = this.Launchdate;
          prodcut.Weight = this.Weight;
          prodcut.Display = this.Display;
          prodcut.Description = this.Description;  
          console.log(prodcut) 

          this.$http.post('http://localhost:65009/api/Product', prodcut)
                .then(function(response){ 
                  this.NewProducts = response.body.slice(0,100); 
                  console.log(this.NewProducts );
                   this.isproductcreated = !this.isproductcreated;
                  this.$toaster.success('Product  = '+prodcut.ProductName+' Created Successfully.', {timeout: 3000});
                },
                function(errorresponse){ 
                console.log(errorresponse); 
                  this.$toaster.error(errorresponse, {timeout: 7000});
                });
                 
                   
      } 
        e.preventDefault();
    }
    ,

    editproduct(){
      this.isproductcreated = !this.isproductcreated;
    },

 
    DeleteProduct: function(Productid){ 

        this.$http.delete('http://localhost:65009/api/Product?Productid='+Productid)
        .then(function(response){  
               this.$toaster.success('Product with id = '+Productid+' Deleted Successfully.', {timeout: 3000});
                 this.isproductcreated = !this.isproductcreated; 
                },
                function(errorresponse){ 
                console.log(errorresponse); 
                  this.$toaster.error(errorresponse, {timeout: 7000});
                });
    }
  
  },

 //Vue js lifecycle hooks.
  mounted:function()
  {
      
  },
  beforeUpdate(){

  },
  updated(){

  },
  beforeCreate(){

  }
  ,
  created(){

  },
  beforeDestroy(){

  },
  destroyed(){

  }

}
</script>
 

<style scoped>

.cardcutom{
  border:2px solid whitesmoke;
}
.card{
    margin-top: 80px;
}
.cardbtn{
        margin-left: -16px;
    margin-top: -39px;
}
.savebtn{
    text-align: -webkit-right;
}
.form-group{
   text-align:  -webkit-auto
}
.urltoimg{
    text-align: -webkit-left;
    height: 200px; 
}
.card
{
  border:none;  
   pointer-events:all;
}


.list-group-item{
  border: none;
  padding: 0px;
}
.productview {
       width: 100%;
    
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
    min-height: 550Px;
    border-radius: 32px 32px 30px 23px;
     box-shadow: 0 0px 1px rgba(0,0,0,.65);
    height: -webkit-fill-available;
    

}


.Custom-list-item {
    border-right: 0;
    border-left: 0;
    border-radius: 0;
    padding: 8px;
    
    
    
}

.productview:hover{

       width: 105%;
    
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
    min-height: 550Px;
    border-radius: 32px 32px 30px 23px;
     box-shadow: 0 0px 5px rgba(0,0,0,.65);

     
}

.lablebtn{
  BORDER-RADIUS: 7px 6px 6px 7px;
    width: 110px;
    

}

.fa-star,.fa-star-half{
  color:goldenrod;
}

.discription{
  margin-top: 100px;
}
</style>
