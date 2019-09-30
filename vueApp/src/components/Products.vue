<template>

<div id="Products">
<nav aria-label="breadcrumb container sticky-top">
    <div class="row  breadcrumb">
        <div class="col-6 ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="#" v-on:click="GetProducts()"><span class="fa fa-home"></span> Home</a>
                </li>
                <li class="breadcrumb-item" aria-current="page" v-on:click="FilterIphones()">
                    <a href="#"><span class="fa fa-mobile"></span>Iphones</a>
                </li>
                <li class="breadcrumb-item" aria-current="page" v-on:click="FilterMackBook()">
                    <a href="#"><span class="fa fa-laptop"></span>MackBook</a>
                </li>
            </ol>
        </div>
        <div class="col-6 cartright">
            <router-link v-if="!Showcart" to="/addProduct" class="fa fa-plus addbutton btn btn-primary btn-sm mb-2">Add New Product</router-link>
            <div class="nav-item active navbar-right" v-if="Showcart">

                <a href="#" v-on:click="showCartProducts()" class="fa fa-cart-plus text-primary cart"> Item(s) in cart =<strong class="cartitems"> {{ItemsIncart}}</strong></a>

            </div>
        </div>
    </div>


</nav>
<div v-if="Isdataloaded">

    <div class="alert alert-danger container">
        <strong> <span class="fa fa-exclamation-triangle"></span> Server Info !</strong>
        <hr>
        Unable to communicate with Api service. data could not be loaded ! Please try after some time later
        <br>
        Please Fix the Following issue to take website live.<br>
        <ol>
            <li>Api service congifuration issue</li>
            <hr>
            <li>Api service could be down</li>
        </ol>
        <button type="button" class="btn btn-danger btn-sm mb-2" v-on:click="refresh"> <span class="fa fa-redo"></span> Retry Now</button>
    </div>
</div>
<div v-if="!Showcartitems">
    <div class="row" v-if="!Isdataloaded">
        <div class="col-lg-2">
            <br>
            <h5 class="font-hinden"> <span class="fa fa-filter"></span> Filter item(s):</h5>
            <br>
            <ul class="list-group">
                <h6 style="text-align: left;"><span class="fa fa-laptop"></span> Device Type: </h6>
                <div class="form-check">
                    <input class="form-check-input" v-on:click="GetProducts()" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                    <label class="form-check-label" for="exampleRadios2">
                        All
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" v-on:click="FilterIphones()" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                    <label class="form-check-label" for="exampleRadios1">
                        Iphone
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" v-on:click="FilterMackBook()" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                    <label class="form-check-label" for="exampleRadios2">
                        MackBook
                    </label>
                </div>

            </ul>
            <hr>
            <ul class="list-group">
                <h6 style="text-align: left;"><span class="fa fa-brush"></span> Color Type: </h6>
                <li class="list-group-item btn btn-sm btn-default">
                    <input class="form-check-input" v-on:click="FilterByColor('Gold')" type="checkbox" value="" id="defaultCheck1"> Gold
                </li>
                <li class="list-group-item btn btn-sm btn-default">
                    <input class="form-check-input" v-on:click="FilterByColor('Sliver')" type="checkbox" value="" id="defaultCheck1"> Sliver
                </li>
                <li class="list-group-item btn btn-sm btn-default">
                    <input class="form-check-input" v-on:click="FilterByColor('Black')" type="checkbox" value="" id="defaultCheck1"> Black
                </li>
                <li class="list-group-item btn btn-sm btn-default">
                    <input class="form-check-input" v-on:click="FilterByColor('Rose')" type="checkbox" value="" id="defaultCheck1"> Rose
                </li>


            </ul>
            <hr>
            <ul class="list-group">
                <h6 style="text-align: left;">&#8377; Price: </h6>
                <li class="list-group-item btn btn-sm btn-default">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"> 0 To 20k
                </li>
                <li class="list-group-item btn btn-sm btn-default">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"> 20 To 40k
                </li>
                <li class="list-group-item btn btn-sm btn-default">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"> 40 To 1 Lac.
                </li>


            </ul>
        </div>


        <div class="col-lg-10 layoutoverflowoption">


            <div class="card" v-if="SearchAllow">
                <div class="card-body" style="border: 2px solid whitesmoke">
                    <form class="form-inline">
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">ProductName</label>
                            <input type="password" class="form-control-sm form-control" id="inputPassword2" placeholder="By Product Name">
                        </div>
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">ProductModel</label>
                            <input type="password" class="form-control-sm form-control" id="inputPassword2" placeholder="By Product Model">
                        </div>

                        <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">By Color</label>
                            <input type="password" class="form-control-sm form-control" id="inputPassword2" placeholder="By Product Color">
                        </div>
                        <button type="submit" class="btn btn-primary btn-sm mb-2"> <span class="fa fa-search"></span> Search</button>
                    </form>
                </div>
            </div>


            <div class="row" v-if="!AllowProductview">
                <div class="col-12  ContentRighAlign">

                    <button type="button" class="btn btn-primary btn-sm mb-2" v-on:click="refresh"> <span class="fa fa-redo"></span> Refresh</button>
                    <button type="submit" class="btn btn-primary btn-sm mb-2" v-on:click="AllowSearch"> <span class="fa fa-search"></span> Search Product</button>
                </div>


                <div class="customercard" v-for="product in Products" :key="product.productId">

                    <div class="col-2">

                        <div class="card overview" style="width: 18rem;">
                            <img class="card-img-top" v-bind:src="product.imageUrl" alt="Card image cap">
                            <div class="card-body ">
                                <h5 class="card-title text-primary">{{product.productName}} ({{product.color}})</h5>

                                <ul class="list-group list-group-flush">
                                    <div class="btn-success" v-if="product.isAvailable == 'True'"> In stock </div>
                                    <div class="btn-danger" v-else> Out of stock</div>
                                </ul> <br>
                                <p class="card-text text-danger"> &#8377; <strong>{{product.price}}</strong></p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Sale Started on : {{product.launchdate.slice(1,10)}}</li>
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
                                <button type="button" class="card-link btn btn-outline-primary" v-on:click="ViewProduct(product.productId)" v-bind:class="{disabled:product.isAvailable == 'False'}"><span class="fa fa-eye"></span> View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>

            <div class="row container" v-if="AllowProductview">
                <div class="col-lg-5">
                    <div class="card">
                        <img class="productview card-img-overlay" v-bind:src="Produtoview.imageUrl" alt="Product">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="card">
                        <ul class="list-group list-group-flush">
                            <h4 class="text-primary Custom-list-item"><span class="fa fa-laptop"></span> Model Name : {{Produtoview.productName}}</h4>
                            <li class="list-group-item Custom-list-item"><span class="fa fa-brush"></span> Color : {{Produtoview.color}}</li>
                            <li class="list-group-item Custom-list-item">
                                <span class="fa fa-database"></span> Is Available
                                <div class="btn-success" v-if="Produtoview.isAvailable == 'True'"> In stock </div>
                                <div class="btn-danger" v-else> Out of stock</div>
                            </li>
                            <li class="list-group-item Custom-list-item"><span class="fa fa-camera"></span> Camera : {{Produtoview.camera}}</li>
                            <li class="list-group-item Custom-list-item"><span class="fa fa-mobile"></span> Display : {{Produtoview.display}}</li>
                            <li class="list-group-item Custom-list-item"><span class="fa fa-cogs  "></span> Processor : {{Produtoview.processor}}</li>
                            <li class="list-group-item Custom-list-item"><span class="fa fa-database"></span> Storage : {{Produtoview.storage}}</li>
                            <li class="list-group-item Custom-list-item"><span class="fa fa-tasks"></span> Weight : {{Produtoview.weight}}</li>

                            <li class="list-group-item text-danger Custom-list-item">&#8377; <strong>Price : {{Produtoview.price}}</strong></li>
                            <li class="list-group-item Custom-list-item"><span class="fa fa-calendar-check"></span> Launch Date : {{Produtoview.launchdate}}</li>
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

                            <button type="button" v-on:click="GoTodahboard()" class="card-link btn btn-outline-danger"> <span class="fa fa-arrow-left"></span> Go Back </button>
                            <button type="button" class="card-link btn btn-outline-primary" v-on:click="AddToCart(Produtoview.productId)"><span class="fa fa-cart-plus"></span> Add To Cart</button>
                        </div>

                    </div>
                </div>
                <div class="card-body container">
                    <h4> <span class="fa fa-info-circle"></span> Product Company Information</h4>
                    <hr>
                    {{Produtoview.description}}
                </div>
            </div>

        </div>
    </div>
</div>
<div class="card loader" v-if="loading">
    <i class="fa fa-spinner fa-pulse fa-3x fa-fw loadercenter"></i>
    <span class="sr-only">Loading...</span>
    Loading...
</div>

<div v-if="Showcartitems">

    <div class="row cartrow ">

        <div v-for="cartiem in CartItems" :key="cartiem.productId">
            <div class="col-2 customercard">
                <div class="card overview" style="width: 18rem;">
                    <img class="card-img-top" v-bind:src="cartiem.imageUrl" alt="Card image cap">
                    <div class="card-body ">
                        <h5 class="card-title text-primary">{{cartiem.productName}} ({{cartiem.color}})</h5>

                        <ul class="list-group list-group-flush">
                            <div class="btn-success" v-if="cartiem.isAvailable == 'True'"> In stock </div>
                            <div class="btn-danger" v-else> Out of stock</div>
                        </ul> <br>
                        <p class="card-text text-danger"> &#8377; <strong>{{cartiem.price}}</strong></p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Sale Started on : {{cartiem.launchdate}}</li>
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


                </div>
            </div>
        </div>

    </div>
    <div class="row">
        <div class="col-12">
            <h4 v-if="emptycart" class="alert alert-info text-center">
                <span class="fa fa-cart-plus"></span> Hi There seems your cart is empty.
                please add some product to buy.Thank you.
            </h4>
        </div>
    </div>
    <div class="row cartbutton">

        <div class="card-body">
            <button type="button" v-on:click="greetuser()" class="card-link btn btn-outline-success"><span class="fa fa-check"></span> Procced To Check out</button>
            <button type="button" v-on:click="ClearCart()" class="card-link btn btn-outline-danger"><span class="fa fa-trash"></span> Clear Cart </button>
        </div>
    </div>
</div>
</div>
</template>

<script>
    export default {
        name: 'Products',
        data () {
            return {
                Products: [],
                SearchAllow: false,
                loading: false,
                Isdataloaded: true,
                Produtoview: Object,
                AllowProductview: false,
                Iphones: [],
                MackBooks: [],
                FiltredData: [],
                serachiphones: 'Iphone',
                Showcart: false,
                CartItems: [],
                Itempreadd: [],
                ItemsIncart: 0,
                Showcartitems: false,
                emptycart: false,

            };

        },


        methods: {
            GetProducts() {
                this.$http.get("http://localhost:65009/api/Product")
                    .then(function(data) {
                        this.Products = data.body.slice(0, 100);
                        this.checkApiresponse();
                    });


            },
            FilterIphones() {
                this.Products = [];
                this.$http.get("http://localhost:65009/api/Product")
                    .then(function(data) {
                        this.Products = data.body.slice(0, 100);
                        this.Products =
                            this.Products.filter(item => item.weight.toLowerCase() == "100.G".toLowerCase());
                        this.checkApiresponse();
                    });
            },
            FilterMackBook() {
                this.Products = [];
                this.$http.get("http://localhost:65009/api/Product")
                    .then(function(data) {
                        this.Products = data.body.slice(0, 100);
                        this.Products =
                            this.Products.filter(item => item.weight.toLowerCase() == "250.G".toLowerCase());
                        this.checkApiresponse();
                    });

            },
            FilterByColor(colorType) {
                console.log(colorType);
                this.Products = [];
                this.$http.get("http://localhost:65009/api/Product")
                    .then(function(data) {
                        this.Products = data.body.slice(0, 100);
                        this.Products =
                            this.Products.filter(item => item.color.toLowerCase() == colorType.toLowerCase());
                        this.checkApiresponse();
                    });


            },

            greetuser() {
                this.$toaster.info('Thank you very much for visiting our website have Great day ahead',
                    { timeout: 5000 });

                this.AllowProductview = !this.AllowProductview;

                this.Showcartitems = !this.Showcartitems;
                this.CartItems = [];
                this.ItemsIncart = 0;

            },

            AddToCart(toadd) {
                console.log(toadd);
                this.CartItems.push(this.Products.find(item => item.productId == toadd));
                this.ItemsIncart += 1;
                if (this.CartItems.length >= 1) {
                    this.Showcart = true;
                    console.log(this.CartItems);
                    this.$toaster.success('Item added to cart !', { theme: 'Success', timeout: 1000 });
                    setTimeout(() => {
                            this.$toaster.warning('Total Item(s) in cart  = [ ' + this.ItemsIncart + ' ]',
                                { theme: 'Success', timeout: 3000 });
                        },
                        3000);

                }

            },
            showCartProducts() {
                this.Showcartitems = !this.Showcartitems;
                if (this.CartItems.length <= 0) {
                    this.emptycart = true;
                    this.Showcart = false;
                }
            },
            ClearCart() {

                this.CartItems = [];
                this.ItemsIncart = 0;
                this.Showcartitems = !this.Showcartitems;
                this.$toaster.success('Cart has been cleared !', { theme: 'Success', timeout: 2000 });
                if (this.CartItems.length <= 0) {
                    this.emptycart = true;
                }
            },

            ViewProduct: function(productIdTOview) {
                this.Produtoview = this.Products.find(p => p.productId == productIdTOview);
                this.AllowProductview = !this.AllowProductview;
                console.log(this.Produtoview);


            },


            GoTodahboard() {
                this.AllowProductview = !this.AllowProductview;
            },
            AllowSearch() {
                this.SearchAllow = !this.SearchAllow;

            },

            refresh() {
                this.loading = true;
                setTimeout(() => {
                        this.GetProducts();
                        this.loading = false;
                        this.checkApiresponse();
                        this.Showcart = false;
                        if (this.Products.length >= 1)
                            this.$toaster.info('Refresh completed!', { theme: 'info', timeout: 2000 });
                        if (this.Products.length <= 0)
                            this.$toaster.error('Request Failed Api is down.', { theme: 'Success', timeout: 3000 });
                    },
                    3000);


            },
            checkApiresponse() {
                if (this.Products.length < 1) {
                    this.Isdataloaded = true;

                } else {
                    this.Isdataloaded = false;

                }
            }

        },


        mounted: function() {


// or custom add method


            this.GetProducts();
            this.checkApiresponse();
        },

        computed: {
        },

    };
</script>

<style scoped>



    .imges {
        border-radius: 10px;
        height: 301px;
        margin-left: -13px;
        width: 1138px;
    }

    .card {
        border: none;
        padding: 41px;
        pointer-events: all;
    }

    .title {
        animation-duration: 4s;
        animation-name: example;
        color: #0b0bbb;
        font-size: 20px;
    }

    .card-img-top {
        border-top-left-radius: calc(.25rem - 1px);
        border-top-right-radius: calc(.25rem - 1px);
        ;
        ;
        height: 170px;
        width: 100%;
    }

    .ContentRighAlign { text-align: -webkit-right; }

    .loader {
        -webkit-transition: 0.5s;
        background-color: rgb(0, 0, 0);
        background-color: rgba(63, 65, 68, 0.63);
        color: white;
        font-size: x-large;
        height: 100%;
        left: 0;
        overflow-x: hidden;
        position: fixed;
        text-align: -webkit-center;
        text-align: -webkit-center;
        top: 0;
        transition: 0.5s;
        width: 100%;
        z-index: 1;
    }

    .loadercenter { margin-top: 15pc; }

    .alert-danger {
        background-color: #f8d7da;
        border-color: #f5c6cb;
        color: #721c24;
        margin-top: 5pc;
        width: fit-content;
    }

    .fa-star, .fa-star-half { color: goldenrod; }

    .list-group-item {
        border: none;
        padding: 0px;
    }

    .btn-success, .btn-danger { border-radius: 21px; }



    .disabled { pointer-events: none; }

    .productview {
        border-top-left-radius: calc(.25rem - 1px);
        border-top-right-radius: calc(.25rem - 1px);
        min-height: 300px;
        width: 90%;
    }

    .Custom-list-item {
        border-left: 0;
        border-radius: 0;
        border-right: 0;
        padding: 8px;
        width: max-content;
    }



    .card-view-row { border: 2px solid #cec9c9; }

    .overview { display: block; }

    .overview:hover { box-shadow: 0 0px 5px rgba(0, 0, 0, .65); }

    .col-lg-2 { border: 1px solid #cccccc; }

    .row { margin-top: -18px; }

    .col-lg-10 {
        margin-top: 35px;
        text-align: center;
    }

    .cartitems { font-size: 23px; }

    .cart {
        font-size: 20px;
        height: 34px;
        margin-top: 12px;
        text-align: -webkit-right;
        text-decoration: none;
    }

    .cartright { text-align: -webkit-right; }

    a {
        background-color: transparent;
        color: #1f2b38;
    }

    .cartrow {
        margin-left: 1px;
        margin-top: 12px;
    }

    .cartbutton { margin-top: 30px; }

    .addbutton { margin-top: 30px; }

    .customercard { margin-top: 4px; }
</style>
