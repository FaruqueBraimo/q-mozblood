<template>
	<q-dialog
		v-model="toggleDialog"
		@show="onShowDialog"
		persistent
		position="right"
	>
		<q-card style="width: 100vw;">
			<q-card-section class="row items-center">
				<div class="text-h6 text-center">  Minha Conta {{fetchRoles}}</div>
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

					<q-input
					
						outlined
						type="email"
						v-model="saveObject.email"
						label="Email *"
						lazy-rules
						:rules="[
							val =>
								(val !== null && val !== '') ||
								'Por favor insira o seu email'
						]"
					/>
				

					<q-input
						outlined
						v-model="saveObject.password"
						label="Senha *"
						type="password"
						lazy-rules
						:rules="[
							val =>
								(val !== null && val !== '') ||
								'Por favor, insira uma senha válida.'
						]"
					/>

					<q-input
						outlined

						v-model="saveObject.confirmPassword"
						label="Confirme senha *"
						type="password"
						lazy-rules
						:rules="[
							val =>
								(val !== null && val !== '') ||
								'Insira a seha de confirmação',
							val =>
								val === saveObject.password ||
								'A senha de confirmação inválida.'
						]"
					/>

					<div class="text-center">
						<!--<router-link to="/">LOgin</router-link>-->

						<div class="q-my-md">
							<q-btn
								:label="updateUserObject  ? 'Actualizar' : 'Registar'"
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
		props: ['account', 'updateUserObject'],
		data() {
			return {
				saveObject: {},
				model: [],
				options: [
					
				]
			};
		},
		computed: {
										...mapState('role', ['roles']),

			toggleDialog: {

				get() {
					return this.account;
				},
				set(val) {
					this.$emit('closeDialog');
				}
			},
			fetchRoles() {
				Object.keys(this.roles).forEach((element, key) => {
					this.options.push({
						value: element,
						label: this.roles[element].name
					});
				});

				return '';
			}
		},
		mounted() {
				this.saveObject= this.updateUserObject

		},
		methods: {
			...mapActions('auth', ['updateUser','changeUser']),

			
			onSubmit() {
					
							// this.updateUser({
							// 	id: this.updateUserObject.id,
							// 	updates : {updates :  this.saveObject  }

							// })
							this.changeUser({ payload : this.saveObject })
							
				

				this.$emit('closeDialog');
			},

			onShowDialog() {
				
			},

			onReset() {
			}
		},
		watch: {
			
			updateUserObject(val) {
				if(val) {
				this.saveObject= this.updateUserObject
				console.log(this.updateUserObject)
			}

			}
			
		}
	};
</script>

<style scoped></style>
