<template>
	<q-page padding>
		<!-- content -->
				
		<div class="row justify-end q-py-md">
			<q-btn
				color="primary"
				icon="add"
				label="Adicionar"
				unelevated
				@click="dialog = true"
			/>
		</div>
		<q-markup-table
			flat
			bordered
			square
			class="q-pa-md"
			:style="$q.platform.is.mobile ? 'width: 100%' : ''"
		>
			<users-role-header-component class="q-pa-sm" />

			<tbody>
				<users-roles-body-component
					v-for="(role, index) in roles"
					:key="index"
			     	:role="Object.assign({ id: index }, role)"
					@updtateRole='updateRoleObject =$event'
				/>
			</tbody>
		</q-markup-table>

		<AddUserRoleDialog
			:dialog="dialog"
			@closeDialog="dialog = false"
			@emitData="addRole"
			:updateRoleObject='updateRoleObject'
		/>
	</q-page>
</template>

<script>
	import { mapActions, mapState } from 'vuex';

	import UsersRolesBodyComponent from '../components/users/roles/UsersRolesBodyComponent';
	import UsersRoleHeaderComponent from '../components/users/roles/UsersRoleHeaderComponent';
	import AddUserRoleDialog  from '../components/users/roles/AddUserRoleDialog';

	export default {
		 name: 'userRole',
		data() {
			return {
				dialog: false,
				updateRoleObject : {}
			};
		},
		computed: {
			...mapState('role', ['roles'])
		},

		methods: {
			...mapActions('role', ['addRole' , 'updateRole'] ),

			
		},
		components: {
			UsersRoleHeaderComponent,
            UsersRolesBodyComponent,
			AddUserRoleDialog
		},
		watch: {
			updateRoleObject(val) {
				if(val) {
					this.dialog = true
				}
			},
		}
		
	};
</script>
