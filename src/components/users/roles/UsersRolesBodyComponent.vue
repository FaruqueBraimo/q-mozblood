<template>
	<tr>
		<td class="text-left">
			{{ role.name }}
		</td>
		<td class="text-left" v-if="role.category == 'true'">
			<q-icon color="green" size="sm" name="check_circle" />
		</td>
		<td class="text-left" v-else>
			<q-icon color="red" size="sm" name="cancel" />
		</td>
		<td class="text-left" v-if="role.products == 'true'">
			<q-icon color="green" size="sm" name="check_circle" />
		</td>
		<td class="text-left" v-else>
			<q-icon color="red" size="sm" name="cancel" />
		</td>
		<td class="text-left" v-if="role.clients == 'true'">
			<q-icon color="green" size="sm" name="check_circle" />
		</td>
		<td class="text-left" v-else>
			<q-icon color="red" size="sm" name="cancel" />
		</td>
		<td class="text-left" v-if="role.providers == 'true'">
			<q-icon color="green" size="sm" name="check_circle" />
		</td>
		<td class="text-left" v-else>
			<q-icon color="red" size="sm" name="cancel" />
		</td>
		<td class="text-left" v-if="role.stocks == 'true'">
			<q-icon color="green" size="sm" name="check_circle" />
		</td>
		<td class="text-left" v-else>
			<q-icon color="red" size="sm" name="cancel" />
		</td>
		<td class="text-left" v-if="role.reports == 'true'">
			<q-icon color="green" size="sm" name="check_circle" />
		</td>
		<td class="text-left" v-else>
			<q-icon color="red" size="sm" name="cancel" />
		</td>
		<td class="text-left" v-if="role.sales == 'true'">
			<q-icon color="green" size="sm" name="check_circle" />
		</td>
		<td class="text-left" v-else>
			<q-icon color="red" size="sm" name="cancel" />
		</td>

		<td class="text-left" v-if="role.users == 'true'">
			<q-icon color="green" size="sm" name="check_circle" />
		</td>
		<td class="text-left" v-else>
			<q-icon color="red" size="sm" name="cancel" />
		</td>
		<td class="text-center ">
      
      <q-btn  flat  size="sm" rounded text-color="primary" icon="edit" @click="$emit('updtateRole' ,role)"/>
      <q-btn  flat  rounded  size="sm" text-color="red" disable icon="delete" @click="$emit('deleteUser')" />
		</td>
	</tr>
</template>

<script>
	import { mapActions, mapState } from 'vuex';
	export default {
		name: 'roleBodyComponent',
		props: ['role'],
		data() {
			return {
				role: null,
				options: [
					'Administrador',
					'Acesso somente aos Produtos e Categorias',
					'Acesso aos Clientes e Fornecedores',
					'Acesso a gestão de Stock',
					'Nenhum Acesso'
				]
			};
		},
		computed: {
			roleRoleName() {
				return this.role.role ? this.role.role : 'Outro';
			}
		},
		mounted() {
			// console.log(this.role)
		},
		methods: {
			...mapActions('settings', ['setGlobalConfirm']),
			...mapActions('auth', ['updaterole'])
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
