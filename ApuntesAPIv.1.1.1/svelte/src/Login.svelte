<script>
import {firebaseAuth, googleAuthProvider} from './firebase';
export var user;

firebaseAuth.onAuthStateChanged(

function(usr) {
	if (usr) {
		user = usr;
	} else {
		user = null;
	}
});

function loginWithRedirect () {
	firebaseAuth.signInWithRedirect(googleAuthProvider).then(
			result=>{
				var token = result.credential.accessToken;
				user = result.user;
				console.log('User arrives:', user)
			}
		)
		.catch(
			err=>console.error(err)
		);
}

function logout () {
	firebaseAuth.signOut()
		.then(
			console.log('User leave.')
		)
		.catch(
			err=>console.error(err)
		);
}
</script>

<div>
    {#if user}
    <span id="out" on:click={logout}><i class="fas fa-sign-out-alt"></i></span>
	{:else}
		<div class="loginContent">
			<i class="far fa-sticky-note"></i>
			<p class="nameApp">MEMOTHIS</p>
		</div>
		<div id="loginarea">
			<span id="loginbutton" on:click={loginWithRedirect}><i class="fas fa-sign-in-alt"></i></span>
		</div>
    {/if}
</div>

<style>
	.fa-sticky-note {
		text-align: center;
		font-size: 100px;
		color: #f5f5f5;
		padding-top: 100px;
		margin: auto;
		font-weight: bold;
	}

	.nameApp {
		font-weight: bold;
		font-size: 17px;
		letter-spacing: 1px;
	}

	.loginContent {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 100px;
		padding-bottom: 15px;
	}

	#loginbutton {
		background: none;
		border: none;
		font-size: 30px;
		color: #f5f5f5;
	}

	#loginarea {
		text-align: center;
		margin: auto;
	}

	#out {
		background: none;
		float: right;
		color: #f5f5f5;
		margin-right: 20px;
		border: none;
		padding-top: 7px;
		font-size: 24px;
	}
</style>