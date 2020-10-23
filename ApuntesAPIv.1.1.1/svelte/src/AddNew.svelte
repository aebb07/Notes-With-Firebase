<script>
	import {firestoreDb} from './firebase';
	import DarkMode from './DarkMode.svelte';
	
	var title = '';
	var content = '';
	export var user;
	
	async function addNote() {
		var doc = {
			title: title,
			titleNormalized: '',
			content: content,
			date: Date.now(),
		}
		
		await firestoreDb.collection(user.uid).add(doc);
		cleanInput();
		show()
	}
	
    async function cleanInput() {
		content = '',
		title = ''
	}
	
</script>


<footer>
	<button class="add" on:click={addNote}><i class="fas fa-plus"></i></button>
	<DarkMode/>
</footer>


<style>
	footer {
		width: 100%;
		position: fixed;
		background: #424242e6;
		left: 0;
  		bottom: 0;
		height: 40px;
	}

	.add {
		color: #f5f5f5;
		font-size: 30px;
		margin-right: 25px;
		bottom: 40px;
		position: relative;
		background: #3e3c3c;
		border-radius: 30px;
		border: none;
		padding-bottom: 3px;
		padding-top: 3px;
		box-shadow: 5px 10px 5px 0px rgba(0, 0, 0, 0.3);
		float: right;
	}

</style>


