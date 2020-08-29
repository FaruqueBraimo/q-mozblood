<template>
	<q-dialog
		v-model="toggleDialog"
		@show="onShowDialog"
		persistent
		position="right"
	>
	
		<q-card style="width: 100vw;">
			<q-card-section class="row items-center">
				<div class="text-h6 text-center">Atribuição</div>
				<q-space />
				<q-btn
					icon="close"
					flat
					round
					dense
					@click="$emit('closeDialog')"
				/>
			</q-card-section>
			<q-card-section>
				<q-form @submit="onSubmit" @reset="onReset">
					<q-input
						outlined
						v-model="saveObject.name"
						label="Nome *"
						lazy-rules
						:rules="[
							val =>
								(val && val.length > 0) ||
								'Por favor introduz o nome'
						]"
					/>
					<div>Acesso a:  </div>
					<div class="row">
						
						<q-checkbox
							v-model="saveObject.sales"
							label="Vendas"
							true-value=true
                           false-value=false
						   color="teal-5"

						/>
					</div>
					<div class="row">
						
						<q-checkbox
							v-model="saveObject.category"
							label="Categorias"
							true-value=true
                           false-value=false

						/>
					</div>
					<div class="row">
						<q-checkbox
							v-model="saveObject.products"
							label="Produtos"
							color="red-5"
							true-value=true
                           false-value=false
						/>
					</div>
					<div class="row">
						<q-checkbox
							v-model="saveObject.clients"
							label="Clientes"
							color="yellow"
							true-value=true
                           false-value=false
						/>
					</div>
					<div class="row">
						<q-checkbox
							v-model="saveObject.providers"
							label="Forncedores"
							color='teal'
							true-value=true
                           false-value=false
						/>
					</div>
					<div class="row">
						<q-checkbox
							v-model="saveObject.reports"
							label="Relatorios"
							color="pink"
							true-value=true
                           false-value=false
						/>
					</div>
					<div class="row">
						<q-checkbox
							v-model="saveObject.stocks"
							label="Stock"
							color ='green-5'
							true-value=true
                           false-value=false
						/>
					</div>
					<div class="row">
						<q-checkbox
							v-model="saveObject.users"
							label="Utlizadores"
							color="deep-orange"
							true-value='true'
                           false-value=false
						/>
					</div>

					<div class="text-center">
						<!--<router-link to="/">LOgin</router-link>-->

						<div class="q-my-md">
							<q-btn
								:label="updateRoleObject.id ? ' Actualizar' : 'Registar'"
								size="md"
								type="submit"
								color="primary"
								unelevated
								class="full-width "
							/>
						</div>
					</div>
				</q-form>
			</q-card-section>
		</q-card>
	</q-dialog>
</template>

<script>
	import { mapActions, mapState } from 'vuex';
	export default {
		name: 'DialogAddEditBlog',
		props: ['dialog', 'updateRoleObject'],
		data() {
			return {
				saveObject: {
					category: '',
				},
				model: [],
				options: [
					'Administrador',
					'Nivel 1 ',
					'Nivel 2',
					'Nivel 3',
					'Nenhum Acesso'
				]
			};
		},
		computed: {
			toggleDialog: {
				get() {
					return this.dialog;
				},
				set(val) {
					this.$emit('closeDialog');
				}
			},
		
		},
		mounted() {},
		methods: {
						...mapActions('role', ['addRole' , 'editRole'] ),

			onSubmit() {
				if(this.updateRoleObject.id)  {


							this.editRole({
								id: this.updateRoleObject.id,
								updates :   this.saveObject

							})
					} 
					else {
							  this.$emit('emitData', this.saveObject);
					}

				this.$emit('closeDialog');
			},

			onShowDialog() {
				if (this.editObjectPost) {
					this.saveObject = this.editObjectPost;
				} else {
				}
			},

			onReset() {}
		},
		watch: {
			
			updateRoleObject(val) {
				if(val) {
				this.saveObject= this.updateRoleObject
			}

			}
			
		}
	};
</script>

<style scoped></style>
