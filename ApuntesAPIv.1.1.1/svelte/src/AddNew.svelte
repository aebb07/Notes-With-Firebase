<script>
	import {firestoreDb} from './firebase';
	
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
		//await firestoreDb.collection('notes').add(doc);
		await firestoreDb.collection(user.uid).add(doc);
		cleanInput();
	}
	
    async function cleanInput() {
		content = '',
		title = ''
	}
	
</script>


<footer>
	<span on:click={addNote}><i class="fas fa-plus-square"></i></span>
</footer>


<style>
	footer {
		width: 100%;
		position: fixed;
		background: #ccc;
		left: 0;
  		bottom: 0;
	}
	</style>

