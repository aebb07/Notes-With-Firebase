<script>
    import Modal from './Modal.svelte';


    export var noteSnapshot;
    export var idx;


    var note = noteSnapshot.data();
    var date = (new Date(note.date)).toLocaleString();
    var timer;
    var showModal = false;

    var colorClass = ['color1','color2','color3','color4','color5'];
    var colorIdx = idx%colorClass.length
    var color = colorClass[colorIdx]

    noteSnapshot.ref.onSnapshot(
        documentSnapshot => {
            note = documentSnapshot.data();
        }
    )

    async function startTimer() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(editDocument, 1000);
    }

    async function deleteNote() {
        noteSnapshot.ref.delete();
        console.log('Note deleted')
    }

    async function show() {
        showModal = true;
    }
</script>

<div class ={'notes-container ' + color } on:click={show}>
        <input class ="title" placeholder ='Titulo' readonly bind:value={note.title} on:input={startTimer}>
    
        <textarea class ="content" placeholder ='Contenido' readonly bind:value={note.content} on:input={startTimer}></textarea>
        <p class ="date">{date}</p>
        
        <button id ="delete" on:click={deleteNote}><i class="fas fa-trash-alt"></i></button>

    {#if showModal}	
    <Modal bind:noteSnapshot bind:showModal bind:color/>
    {/if}


</div>



<style>
	.color1 {
	background-color:#264653;
}

    .color2 {
	background-color:#2a9d8f;
}

    .color3 {
	background-color: #e9c46a;
}

    .color4 {
	background-color: #f4a261;
}

    .color5 {
	background-color: #e76f51;
}
</style>