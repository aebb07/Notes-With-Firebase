<script>
    import Modal from './Modal.svelte';
    export var noteSnapshot;
    export var color;


    var note = noteSnapshot.data();
    var showModal = false;


    noteSnapshot.ref.onSnapshot(
        documentSnapshot => {
            note = documentSnapshot.data();
        }
    )

    async function deleteNote() {
        noteSnapshot.ref.delete();
        console.log('Note deleted')
    }

    async function show() {
        console.log('showing')
        showModal = true;
    }
</script>

<div class ={'notes-container ' + color }>
        <input class ="title" type= "text" placeholder ='Titulo' readonly bind:value={note.title} on:click={show}>
        <textarea class ="content" placeholder ='Contenido' readonly bind:value={note.content} on:click={show}></textarea>
            <span id ="delete" on:click={deleteNote}><i class="fas fa-trash-alt"></i></span>

    {#if showModal}	
        <Modal bind:noteSnapshot bind:showModal bind:color/>
    {/if}
</div>



<style>

    input[type="text"], textarea {
        display: flex;
        flex-direction: column;
        width: 230px;
        background: none;
        resize: none;
        border: none;
        color: #f5f5f5;
    }

    .notes-container {
        width: 230px;
        margin-bottom: 10px;
        margin-left: 10px;
        border-radius: 7px;
    }

    .title {
        font-size: 20px;
    }

    #delete {
        padding: 10px;
        float: right;
        color: #242424;
    }

    .content {
        overflow:hidden;
    }

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