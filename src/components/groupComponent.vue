<template>
	<span>
		<q-card
			clickable
			v-ripple
			class="my-card q-pa-md bg-white"
			flat
			bordered
			square
			
		>
		
			<div class="text-left q-pa-sm	">
				<!-- <q-chip square size="sm">
					<q-avatar color="red-4" text-color="white">50</q-avatar>
					Productos
				</q-chip> -->
			</div>
			<q-btn
				flat
				icon="more_horiz"
a				class="absolute-top-right "
				text-color="grey-8"
			>
				<q-menu>
					<q-list style="min-width: 100px">
						<q-item clickable v-close-popup square class="text-primary">
							<q-item-section
							@click="productFiltergroup({ value: group.id })"
								>Doadores
							</q-item-section>
						</q-item>
						<q-item clickable v-close-popup>
							
							<q-item-section
								@click="$emit('updategroup', group)"
								>Editar</q-item-section
							>
						</q-item>
						<q-item clickable v-close-popup class="text-red">
							<q-item-section
								@click="$emit('remover', group.codigo)"
								>Remover
							</q-item-section>
						</q-item>

						
					</q-list>
				</q-menu>
			</q-btn>
			<q-card-section class="text-center q-pa-md">
				<q-avatar class="" :color="getColor" text-color="white">{{
					group.nome 
				}}</q-avatar>
			</q-card-section>
			<q-tooltip
				content-class="bg-secondary text-white shadow-4 text-caption"
				:offset="[10, 10]"
			>
				{{ group.descricao || 'Sem  Descrição' }}
			</q-tooltip>
	
		</q-card>
	</span>
</template>

<script>
	import { mapActions, mapState } from 'vuex';
	

	export default {
		props: ['group', 'idgroup'],
		data() {
			return {
				dialog: false,
				colors: [
					'red-5',
					'deep-orange',
					'primary',
					'secondary',
					'pink',
					'teal',
					'light-green',
					'brown',
					'light-green-10',
					'blue-grey'
				]
			};
		},
		computed: {
			getColor() {
				return this.colors[
					Math.floor(Math.random() * this.colors.length)
				];
			},
		},
		methods: {

			
		},

		filters: {
			getNames(str) {
				var values = str.split(' ');
				var f_name = values.shift();
				var l_name = values.join(' ');

				let lastName = f_name + l_name;
				var values_ = lastName.split(' ');
				var f_name_ = values_.shift();
				var l_name_ = values_.join(' ');

				return (
					f_name.charAt(0).toUpperCase() +
					l_name.charAt(0).toUpperCase() +
					l_name_.charAt(0).toUpperCase()
				);
			}
		},
		components: {
			
		}
	};
</script>

<style>
	#btn :hover {
		transition: 0.5s;
		background: #4d91d0;
		color: white;
	}
</style>
