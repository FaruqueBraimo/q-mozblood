<template>
	<thead>
		<tr>
			<th colspan="10">
				<div class="row no-wrap items-center">
					<q-img
						style="width: 70px"
						:ratio="1"
						class="rounded-borders"
						src="https://img.icons8.com/bubbles/100/000000/user.png"
					/>

					<div class="text-h6 q-ml-md text-secondary">Níveis de Acesso</div>
				</div>
			</th>
		</tr>

		<tr>
			<th class="text-left">Acesso</th>

			<th class="text-left">Grupo Sanguineo</th>
			<th class="text-left">Doadores</th>
			<th class="text-left">Agendamentos</th>
			<th class="text-left">Triagem</th>
			<th class="text-left">Doacoes</th>
			<th class="text-left">Stock</th>
			<th class="text-left">Utilizadores</th>
			<th class="text-center">Ação</th>
		</tr>
	</thead>
</template>

<script>
	export default {
		name: 'UserHeaderComponent'
	};
</script>

<style scoped></style>
