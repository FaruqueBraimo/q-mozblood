<template>
	<div id="q-app" class="text-grey-9">
		<router-view> </router-view>
		
	</div>
</template>

<script>
	import { mapActions,mapState } from 'vuex';
	export default {
		name: 'App',
		created() {
			this.listenUsersRealTimeChanges();
			this.listenRoleRealTimeChanges()
		
		},
				computed: {
			...mapState('auth', ['users']),
			
		},
		mounted() {
			console.log()
			 
		},

		methods: {
			...mapActions('auth', [
				'handleAuthStateChange',
				'listenUsersRealTimeChanges',
				'deleteUser',
			]),

			...mapActions('role', [
				'listenRoleRealTimeChanges',
				
			]),
	

		


		},
		beforeDestroy() {
			this.$q.loading.hide();
		}
	};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@550&display=swap');

#q-app{
font-family: 'Dosis', sans-serif;


}

</style>

