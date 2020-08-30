import Vue from 'vue';
import { dbRoles } from '../../boot/firebase';
import { Loading, date } from 'quasar';
import { showErrorMessage } from '../../functions/handle-error-messages';
import { showSuccessMessage } from '../../functions/show-success-messages';

let lastVisible = null;

const state = {
	roles: {},
	
	uploadProgress: 0,
	loading: false,
	rolesearchKey: ''
};

const mutations = {
	loading(state, val) {
		state.loading = val;
	},

	uploadProgress(state, val) {
		state.uploadProgress = val;
	},
	addRole(state, payload) {
		Vue.set(state.roles, payload.id, payload.object);
	},

	editRole(state, payload) {
		Object.assign(state.roles[payload.id], payload.updates);
	},
	deleteRole(state, id) {
		Vue.delete(state.roles, id);
	}
};

const getters = {};

const actions = {
	listenRoleRealTimeChanges({ commit }) {
		commit('resetRole');

		dbRoles
			.orderBy('createdAt', 'desc')
			.onSnapshot(function(snapshot) {
				snapshot.docChanges().forEach(function(change) {
					if (change.type === 'added') {
						commit('addRole', {
							id: change.doc.id,
							object: change.doc.data()
						});
					}
					if (change.type === 'modified') {
						commit('editRole', {
							id: change.doc.id,
							updates: change.doc.data()
						});
					}
					if (change.type === 'removed') {
						commit('deleteRole', change.doc.id);
					}
				});
			});
	},

	addRole({ commit, dispatch, rootGetters }, payload) {
		payload.createdAt = new Date();
		payload.updatedAt = new Date();
		commit('loading', true);

		return dbRoles
			.add(payload)
			.then(docRef => {
				commit('loading', false);

				// 1. Limpar todas solicitações
				commit('resetRole');

				showSuccessMessage('Permissão Adicionada com sucesso!');

				return true;
			})
			.catch(function(error) {
				console.error('Error adding document: ', error);
				commit('loading', false);
				showErrorMessage(error.message);

				return false;
			});
	},

	editRole({ commit, rootGetters }, payload) {
		commit('loading', true);

		payload.updates.updatedAt = new Date();

		let sucessMessage = payload.successMessage
			? payload.successMessage
			: state.defaultUpdateSuccessMessage;

		return dbRoles
			.doc(payload.id)
			.update(payload.updates)
			.then(function(docRef) {
				commit('loading', false);

				showSuccessMessage(' Permissão  Editada!');

				return true;
			})
			.catch(function(error) {
				console.error('Error adding document: ', error);
				commit('loading', false);

				showErrorMessage(error.message);

				return false;
			});
	},

	deleteRole({ commit }, id) {
		return dbRoles
			.doc(id)
			.delete()
			.then(function(docRef) {
				showSuccessMessage(' Eliminada com sucesso...');
				return true;
			})
			.catch(function(error) {
				console.error('Error removing document: ', error);
				commit('loading', false);
				showErrorMessage(error.message);
				return false;
			});
	},

	getRoleByUserId({ commit }, userId) {
		if (!userId) {
			showErrorMessage(
				'Algumas informações das solicitações que deseja visualizar, poderão não ser visualizadas neste momento. Favor favor, tente mais tarde.'
			);
			return;
		}

		commit('loading', true);

		return dbRoles
			.where('userId', '==', userId)
			.orderBy('createdAt', 'desc')
			.limit(50)
			.get()
			.then(resp => {
				commit('loading', false);

				let roles = [];
				resp.docChanges().forEach(item => {
					let roles = item.doc.data();
					roles.id = item.doc.id;

					roles.push(roles);
				});
				commit('loading', false);

				return roles;
			})
			.catch(function(error) {
				console.log('Error ocured: ', error);
				commit('loading', false);
				return null;
			});
	},

	setrolesearchKey({ commit, dispatch }, text) {
		commit('setrolesearchKey', text);

		commit('loading', true);
		commit('resetRole');

		if ((text && text.length > 1) || !text) {
			dispatch('getData', true);
		}
	},

	resetDataToOnly20({ state, commit }) {
		if (Object.keys(state.roles).length > 75) {
			console.log(
				'Reset data to only20 not implemented yet. All roles where reseted for now...'
			);
			commit('resetRole');
		}
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
};
