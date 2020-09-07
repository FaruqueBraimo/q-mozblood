<template>
	<q-form @submit="onSubmit" @reset="onReset">
		<q-input
			v-if="name === 'Register'"
			outlined
			v-model="saveObject.name"
			label="Seu nome *"
			
			dense
			lazy-rules
			:rules="[
				val => (val && val.length > 0) || 'Por favor introduz o nome'
			]"
		/>

		<q-input
			outlined
			type="email"
			v-model="saveObject.email"
			
			dense
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
			
			dense
			type="password"
			lazy-rules
			:rules="[
				val =>
					(val !== null && val !== '') ||
					'Por favor, insira uma senha válida.'
			]"
		/>

		<q-input
			v-if="name === 'Register'"
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
					:label="name"
					size="md"
					type="submit"
					color="red-5"
					unelevated
					class="full-width "
				/>
				<!--<q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />-->
			</div>
			<div > 
				<span v-if="name === 'Entrar'"> Não tem conta? </span>
				<span v-else> Tem conta? </span>

			<q-btn
				v-if="name === 'Login'"
				to="/register"
				color="primary"
				no-caps
				flat
				label=" Cria aqui conta"
			/>
			<q-btn
				v-else
				to="/"
				no-caps
				flat
				label="Faça login"
				color="primary"
			/>
			</div>
				
		</div>
	</q-form>
</template>

<script>
	import { mapGetters, mapState, mapActions } from 'vuex';

	export default {
		name: 'FormComponent',
		props: ['name'],
		data() {
			return {
				saveObject: {
					name: '',
					email: '',
					password: '',
					confirmPassword: '',
					online : true

				}
			};

},

	computed : {
			...mapState('auth', ['users', 'userAuth']),

	},
		methods: {
			onSubmit() {
				// alert('Submited')
				// this.$q.notify({
				//     color: 'green-4',
				//     textColor: 'white',
				//     icon: 'cloud_done',
				//     message: 'Dados validados...'
				// })

				this.$emit('emitData', this.saveObject);
			},
			onReset() {
				this.saveObject = {};
			}
		}
	};
</script>

<style scoped></style>
