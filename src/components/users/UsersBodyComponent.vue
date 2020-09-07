<template>
	<tr v-if="!user.online">
		<td class="text-left">
			<q-avatar  text-color="white">
				<q-img
         src="https://img.icons8.com/dotty/80/000000/businessman.png"				/>
			</q-avatar>
			
			{{ user.name }}
		</td>
		<td class="text-left">{{ user.email }}</td>
		<td class="text-left ">
		{{user.role ?  user.role.label : 'Não Definido' || 'Não Definido'}}
    </div>
		</td>

		<td class="text-center ">
			{{ user.createdAt | dateFormat }}
		</td>
		
								

    	<td class="text-center ">
      <q-btn outline size="sm" unelevated  text-color="secondary" label="Activar" v-if="user.status == false"  icon="toggle_on"  @click="$emit('activeOrDesactiveUser',user)" />
	        <q-btn outline size="sm" unelevated  text-color="red-5" label="Desactivar" v-else  icon="toggle_off"  @click="$emit('activeOrDesactiveUser',user)" />
	      <q-btn  flat  rounded  size="sm" text-color="primary" icon="edit" @click="$emit('updateUser', user)" />

		</td>
	</tr>
</template>

<script>
	import { mapActions, mapState } from 'vuex';
	export default {
		name: 'UserBodyComponent',
		props: ['user'],
		data() {
			return {
				role: null,
				options: [
				
				]
			};
		},
		computed: {
			userRoleName() {
				return this.user.role ? this.user.role : 'Outro';
			}
		},
		mounted() {
			// console.log(this.user)
		},
		methods: {
			...mapActions('settings', ['setGlobalConfirm']),
			...mapActions('auth', ['updateUser'])
		},
		filters: {
			dateFormat(val) {
				var months = [
					'Janeiro',
					'Fevereiro',
					'Março',
					'Abril',
					'Maio',
					'Junho',
					'Julho',
					'Agosto',
					'Setembro',
					'Outubro',
					'Novembro',
					'Dezembro'
				];
				let dateCreated = new Date(val.seconds * 1000);
				return (
					dateCreated.getDate() +
					' de ' +
					months[dateCreated.getMonth()] +
					' de ' +
					dateCreated.getFullYear()
				);
			}
		}
	};
</script>

<style scoped>
	.active-class {
		background: rgb(240, 240, 240);
	}
</style>
