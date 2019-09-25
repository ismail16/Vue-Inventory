<template>
	<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <div class="container">
            <a class="navbar-brand">SuperStore</a>
            <form @submit.prevent="search" class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search"
                aria-label="Search" v-model="keyword">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>


<script>
	export default{
		data(){
			return {
				keyword: ''
			}
		},

		methods:{
			search(){
				this.$emit('search', this.keyword)
			}
		}
	}
</script>

<style>
	
</style>