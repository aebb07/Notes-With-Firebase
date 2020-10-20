<script>
import {firestoreDb} from './firebase';
import Notes from './Notes.svelte';
var searching = '';
searching.toLowerCase();

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
<nav>
<div class="search-bar">
<i id="icon" class="fas fa-search"></i>
<input class="search" type="search" placeholder="Buscar en tus notas" bind:value={searching} on:input={updateSomeNotes}>
</div>
</nav>
<h2>TUS NOTAS</h2>
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

   
<style>
	nav {
		padding-bottom: 20px;
	}

	h2 {
		color: #666;
		font-size: 10px;
		padding-bottom: 15px;
		padding-left: 15px;
		font-weight: 500;
	}

	.search-bar {
		background: #4a4949;
		padding-left: 20px;
	}

	input[type="search"] {
		background: none;
		border: none;
		padding-top: 12px;
    	color: #ccc;
	}

	#icon {
		color: #f5f5f5;
	}

	.notes {
		display: flex;
	}
 	

</style>