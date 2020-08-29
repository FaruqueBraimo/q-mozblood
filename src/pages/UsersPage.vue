<template>
	<q-page padding>
		<!-- content -->
		
		<div class="row  q-py-md">
		


	<div class="justify-right col"> <q-btn
				color="primary"
				icon="add"
				label="Adicionar"
				unelevated
				@click="openDialog"
			/> </div>

		</div> 
		
			

	
		<q-markup-table
			flat
			bordered
			square
			class="q-pa-md"
			:style="$q.platform.is.mobile ? 'width: 100%' : ''"
		>
			<users-header-component class="q-pa-sm" />

			<tbody>
				<users-body-component
					v-for="(user, index) in users"
					:key="index"
					:user="user"
					@activeOrDesactiveUser="activeUser"
					@updateUser="updateUserObject = $event"
				/>
			</tbody>
		</q-markup-table>
		

		<add-user-dialog
			:dialog="dialog"
			@closeDialog="closeDialog"
			@emitData="saveUser"
			:updateUserObject='updateUserObject'
		/>

			<!-- <my-account-dialog
			:account="account"
			@closeDialog="account = false; "
			@emitData="saveUser"
			:updateUserObject='getUserAuth'
		/> -->



	</q-page>
</template>

<script>
	import { mapActions,mapGetters, mapState } from 'vuex';

	import UsersBodyComponent from '../components/users/UsersBodyComponent';
	import UsersHeaderComponent from '../components/users/UsersHeaderComponent';
	import AddUserDialog from '../components/users/AddUserDialog';
	import myAccountDialog from '../components/users/myAccountDialog';


	export default {
		name: 'UserPage',
		data() {
			return {
				dialog: false,
				account: false,
				updateUserObject : {}
			};
		},
		computed: {
			...mapState('auth', ['users']),
						...mapGetters('auth', ['getUserName', 'getUserAuth'])

		},

		methods: {
			...mapActions('auth', ['registerUser', 'updateUser', 'addUser']),
			
			saveUser(payload) {
				payload.status = true
				this.registerUser(payload)
				 this.addUser(payload)
			},

			closeDialog() {
					this.dialog = false;
				

			},
			openDialog() {
					this.dialog = true;
			},


			activeUser(user) {
				let userUpdate = {};
				userUpdate.status = !user.status;
				let label = user.status ? 'Desactivar' : 'Activar';

				this.$q
					.dialog({
						title: 'Confirme',
						message: `Tem certeza que deseja ${label} o  ${user.name} ?`,
						ok: 'Sim',
						cancel: true,
						cancel: 'Não',
						persistent: true
					})
					.onOk(() => {
						this.updateUser({
							id: user.id,
							updates: userUpdate
						});
					});
			}
		},
		components: {
			UsersHeaderComponent,
			UsersBodyComponent,
			AddUserDialog,
			myAccountDialog
		},

		watch: {
			updateUserObject(val) {
				if(val) {
					this.dialog = true
					this.account = true
				}
			},
			
		}
	};
</script>
