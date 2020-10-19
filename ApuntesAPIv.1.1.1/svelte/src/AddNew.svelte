<script>
    import {firestoreDb} from './firebase';
	var title = '';
	var content = '';


	async function addNote() {
		var doc = {
			title: title,
			content: content,
			date: Date.now(),
		}
		await firestoreDb.collection('notes').add(doc);
		cleanInput();
    }
    async function cleanInput() {
		content = '',
		title = ''
	}
</script>


<div>
    <input bind:value={title} placeholder="Titulo">
    <input bind:value={content} placeholder="Contenido">
    <button on:click={addNote}><i class="fas fa-plus-square"></i></button>
</div>