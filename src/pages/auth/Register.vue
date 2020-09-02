<template>
	<div class="row">
		<div class="col-xs-12 col-sm-6 col-md-4 offset-sm-3 offset-sm-4">
			<q-card class="q-mt-lg shadow-0">
				<div class="text-center ">
					<q-icon name="person_pin" color="red-5" size="100px" />

					<p style="font-weight: bold;font-size: 14pt">Registo</p>
				</div>

				<div class="q-px-md q-pb-md">
					<form-component name="Register" @emitData="registerNewUser" />
				</div>
			</q-card>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import FormComponent from '../../components/auth/FormComponent';
	export default {
		name: 'Register',
		components: { FormComponent },
		methods: {
			...mapActions('auth', ['registerUser', 'addUser' ]),

			registerNewUser(user) {
				user.role = {labeL : 'Admin' , value : 'YAGdTfwriEp4WcU8Nw56'}	
				this.registerUser(user)
				 this.addUser(user)

			}

		}
	};
</script>

<style scoped></style>
