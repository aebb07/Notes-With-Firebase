<script>
    export var showModal;
    export var noteSnapshot;
    export var color;

    var note = noteSnapshot.data()

    showModal = true;
 
    async function hide() {
        showModal = false;
    }

    async function editDocument() {
        noteSnapshot.ref.update(note);
        console.log('Note updated')
    }
</script>

<div class={"modal " + color}>

    <span class="close" on:click={hide}>x</span>
    <input type="text" placeholder= 'Titulo' bind:value={note.title} on:keyup={editDocument()}>

    <textarea class="content" placeholder= 'Contenido' cols="20" rows="4"  bind:value={note.content} on:keyup={editDocument()}></textarea>
</div>

<style>
    .modal {
        background-color: rgba(0,0,0,0.2);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0; 
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