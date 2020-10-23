<script>
    export var showModal;
    export var noteSnapshot;
    export var color;

    var note = noteSnapshot.data();
    var date = (new Date(note.date)).toLocaleString();
    var timer;

    $: note.titleNormalized = normalized(note.title);

    showModal = true;
 
    function normalized(string) {
		var lower = string.toLowerCase();
        var normal = lower.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
		return normal
    }
    
    async function hide() {
        console.log('hiding')
        showModal = false;
    };

    async function editDocument() {
        noteSnapshot.ref.update(note);
        console.log('Note updated')
    };

    async function startTimer() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(editDocument, 1000);
    };

</script>

    <div class={"modal " + color}>
        <span class="back" on:click={hide}><i class="fas fa-arrow-left"></i></span>
        <div class="inputs-modal">
            <input class="input-modal" type="text" placeholder= "Titulo" bind:value={note.title} on:keyup={startTimer}>

            <textarea class="content-modal" cols="20" rows="4" placeholder= "Contenido" bind:value={note.content} on:keyup={startTimer}></textarea>
        </div>
        <p class ="date">Editado: {date}</p>
    </div>


<style>
    .modal {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1; 
}

    .back {
        font-size: 25px;
        display: flex;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 20px;
        color: #242424;
    }

    input[type="text"], textarea {
        background: none;
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        padding-right: 15px;
        border: none;
        color: #f5f5f5;
        outline: none;
        resize: none;
        overflow: auto;
    }

    .input-modal {
        font-size: 20px;
    }

    .date {
        color: #f5f5f5;
        font-size: 11px;
        margin-left: 15px;
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