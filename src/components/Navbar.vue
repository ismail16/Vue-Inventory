<template>
	<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <div class="container">
            <router-link class="navbar-brand" :to="{ path:'/'}">SuperStore</router-link>
            <form @submit.prevent="search" class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search"
                aria-label="Search" v-model="keyword">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>


<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				keyword: ''
			}
		},

		methods:{
			search(){
				var self = this
				axios.get('http://localhost:3000/search/'+ this.keyword).then(response=>{
					self.$store.commit('setInventory', response.data)
				})
			}
		}
	}
</script>

<style>
	
</style>