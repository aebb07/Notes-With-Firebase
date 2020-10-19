<script>
	import AddNew from './AddNew.svelte';
	import ShowAllNotes from './ShowAllNotes.svelte';
	import Login from './Login.svelte';
	import SearchNote from './SearchNote.svelte';

	var user;

</script>

<main>
<head>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
	
</head>


	<h1>Título principal</h1>

	<Login bind:user/>
	{#if user}
		<AddNew/>
		<ShowAllNotes/>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>