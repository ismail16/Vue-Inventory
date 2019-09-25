<template>
	 <div class="row">
        <div v-for="item in items" class="card mb-2 ml-4" style="width: 13rem;">
            <img :src="item.photo" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">$ {{ item.price }}</p>
                <a @click="addToCart(item)" class="btn btn-sm btn-primary">+ Add</a>
            </div>
        </div>
        
    </div>
</template>


<script>

export default{
	props:['items'],
	methods:{
		addToCart(item){
			this.$emit('newItemAdded', item)
		}
	}

}

</script>

<style>
	
</style>