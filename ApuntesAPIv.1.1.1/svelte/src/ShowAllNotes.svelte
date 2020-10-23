<script>
import {firestoreDb} from './firebase';
import Notes from './Notes.svelte';

var searching = '';
var allNotes= [];
var someNotes = [];
const colorClass = ['color1','color2','color3','color4','color5'];
export var user;


function normalized(string) {
		var lower = string.toLowerCase();
        var normal = lower.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
		return normal
	}

firestoreDb.collection(user.uid).orderBy('date','desc')
	.onSnapshot(
		querySnapshot => {
			var newNotes = [];
			var idx = 0
			querySnapshot.forEach(
				docSnap => {
					var colorIdx = idx%colorClass.length
					var color = colorClass[colorIdx]
					docSnap.color=color;
					newNotes.push(docSnap);
					idx++;
				}
			)
			allNotes = [...newNotes]
				console.log('Ready! Updated')
		}
    )


async function updateSomeNotes () {
	firestoreDb.collection(user.uid).orderBy('date','desc')
		.onSnapshot(
			querySnapshot => {
				var newNotes = [];
				var idx = 0
				querySnapshot.forEach(
					docSnap=> {
						var colorIdx = idx%colorClass.length
						var color = colorClass[colorIdx]
						docSnap.color=color;
						var searchDoc = normalized(searching);
						var doc = docSnap.data();
						console.log(doc);
						if (doc.titleNormalized.search(searchDoc) != -1) {
							newNotes.push(docSnap);
						}
						idx++;
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
		{#each allNotes as note (note.id)}
			<Notes color = {note.color} noteSnapshot ={note}/>
		{/each}
	{:else}
		{#each someNotes as note (note.id)}
			<Notes color = {note.color} noteSnapshot ={note}/>
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
		flex-wrap: wrap;
	}
 	

</style>