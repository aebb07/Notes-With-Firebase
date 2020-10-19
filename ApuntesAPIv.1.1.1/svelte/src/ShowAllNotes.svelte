<script>
import AddNew from './AddNew.svelte';
import {firestoreDb} from './firebase';
import Login from './Login.svelte';
import Notes from './Notes.svelte';
import SearchNote from './SearchNote.svelte';
var searching = '';

var allNotes= [];
var someNotes = [];

firestoreDb.collection('notes').orderBy('date','desc')
	.onSnapshot(
		querySnapshot => {
			var newNotes = [];
			querySnapshot.forEach(
				docSnap => {
					newNotes.push(docSnap);
				}
			)
			allNotes = [...newNotes]
				console.log('Ready! Updated')
		}
    )


async function updateSomeNotes () {
	firestoreDb.collection('notes').orderBy('date','desc')
		.onSnapshot(
			querySnapshot => {
				var newNotes = [];
				querySnapshot.forEach(
					docSnap => {
						var doc = docSnap.data();
						if (doc.title.search(searching) != -1) {
							newNotes.push(docSnap);
						}
					}
				)
				someNotes = [...newNotes]
					console.log('Ready! Updated')
			}
		)
}



</script>

<div class ="notes">
	{#if ! searching}
		{#each allNotes as note, idx (note.id)}
			<Notes idx = {idx} noteSnapshot ={note}/>
		{/each}
	{:else}
		{#each someNotes as note, idx (note.id)}
			<Notes idx = {idx} noteSnapshot ={note}/>
		{/each}
	{/if}
</div>

   
	<i id="icon" class="fas fa-search"></i>
	<input class="search" type="search" placeholder="Buscar en tus notas" bind:value={searching} on:input={updateSomeNotes}>

<style>

</style>