<script>
var lightMode =false;

function toggle() {
    lightMode = !lightMode;
    window.document.body.classList.toggle('light');
}
</script>

<span class="dark-light" on:click={toggle}>
    {#if lightMode}
    <i class="fas fa-moon"></i>
    {:else}
    <i class="fas fa-sun"></i>
    {/if}
</span>

<style>
    .dark-light {
		color: var(--text-color);
        margin-left: 15px;
        font-size: 20px;
        top: 5px;
        position: relative;
    }
    
    :root {
		--bg-color: #242424;
		--text-color: #F5F5F5;
	}
	
	:global(body) {
		background: var(--bg-color);
		color: var(--text-color);
	}
	
	:global(body.light) {
		--bg-color: #F5F5F5;
		--text-color: #3e3c3c;
	}
</style>