<template>
	<q-dialog
		v-model="toggleDialog"
		@show="onShowDialog"
		persistent
		position="right"
	>
		<q-card style="width: 100vw;">
			<q-card-section class="row items-center">
				<div class="text-h6 text-center" v-if="!updateUserObject.id">  Registo de Utilizador </div>
				<div class="text-h6 text-center" v-else> Mudança de privilêgios </div>

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
						v-if="!updateUserObject.name"
					
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
					v-if="!updateUserObject.email"
					
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
					<q-select
						label="Privilêgios"
						transition-show="jump-up"
						transition-hide="jump-up"
						filled
						v-model="saveObject.role"
						:options="options"
						class="q-pb-md"
						:rules="[
							val =>
								(val !== null && val !== '') ||
								'Por favor, insira os privelegios'
						]"
					/>

					<q-input
					v-if="!updateUserObject.password"
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
						v-if="!updateUserObject.confirmPassword"

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
								:label="updateUserObject.id  ? 'Actualizar' : 'Registar'"
								size="md"
								type="submit"
								color="red-5"
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
		props: ['dialog', 'updateUserObject'],
		data() {
			return {
				saveObject: {},
				model: [],
				options: [
					
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
		mounted() {
			
		},
		methods: {
			...mapActions('auth', ['updateUser',]),

			
			onSubmit() {
					if(this.updateUserObject.id)  {


							this.updateUser({
								id: this.updateUserObject.id,
								updates : {role : this.saveObject.role}

							})
					} 
					else {
							  this.$emit('emitData', this.saveObject);
					}
				

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
			
		},
		destroyed(){
			this.updateUserObject = {}
		}
	};
</script>

<style scoped></style>
