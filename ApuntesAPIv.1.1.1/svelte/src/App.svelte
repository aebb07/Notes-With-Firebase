<script>
	import AddNew from './AddNew.svelte';
	import ShowAllNotes from './ShowAllNotes.svelte';
	import Login from './Login.svelte';


	var user;

</script>

<main>

<head>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">

	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap" rel="stylesheet"> 
	
</head>

	<Login bind:user/>
	{#if user}
		<ShowAllNotes bind:user/>
		<AddNew bind:user/>
	{/if}
</main>

<style>
	main {
		font-family: 'Poppins',sans-serif;
	}



	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>