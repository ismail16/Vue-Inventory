<template>
	<div v-if="!loading" class="row">
        <div v-for="item in items" class="card mb-2 ml-4" style="width: 13rem;">
            <router-link tag="div" :to="{ path: '/item/'+ item.id }">
                <img :src="item.photo" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                </div>
            </router-link>
            <div class="card-footer">
                <p class="card-text">$ {{ item.price }}</p>
                <a @click="addToCart(item)" class="btn btn-sm btn-primary">+ Add</a>
            </div>
        </div>
    </div>
    <h1 v-else> Loading... </h1>
</template>


<script>

import axios from 'axios'

export default{

    data(){
        return {
            loading:true
        }
    },

    computed: {
        items(){
            return this.$store.getters.getInventory
        }
    },

    mounted(){
        this.fetchInventory()
    },

	methods:{
		addToCart(item){
			this.$store.dispatch('addToCart',item)
		},

        fetchInventory(){
            var self = this
            axios.get('http://localhost:3000/items').then(response => {
                // setTimeout(function() {
                    self.$store.commit('setInventory',response.data)
                    self.loading = false
                // }, 1000)
            })
        }
	}

}

</script>

<style>
	
</style>