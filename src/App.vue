<template>
    <div id="app">

       <!--  <router-link :to="{path:'/'}">Home</router-link>
        <router-link :to="{path:'/test/1'}">Test 1</router-link>
        <router-link :to="{path:'/test/2'}">Test 2</router-link>
        <router-link :to="{path:'/test/3'}">Test 3</router-link> -->

        
        <navbar @search="search" ></navbar>
        <div class="container mt-2">
            <div class="row">
                <div class="col-md-9">
                    <router-view></router-view>
                   <!-- <inventory @newItemAdded="addCartItem" :items="items"></inventory> -->
                </div>
                <div class="col-md-3">
                    <cart @itemRemoved="removeItem" :items="cart"></cart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'
    import Cart from './components/Cart'
    // import Inventory from './components/Inventory'

    import data from './data.js'

    export default {
        components:{
            Navbar,
            Cart
            // Inventory

        },

        data(){
            return {
                items:[],
                cart: []
            }
        },

        mounted(){
            this.items = data
        },

        methods:{
            search(keyword){
                this.items = data.filter(item=> {
                    return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
                })
            },

            addCartItem(item){
                this.cart.push(item)
            },
            removeItem(index){
                this.cart.splice(index, 1)
            }
        }
    }
</script>

<style>

</style>
