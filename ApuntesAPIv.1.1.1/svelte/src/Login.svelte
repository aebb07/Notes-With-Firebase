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
    <button id="out" on:click={logout}><i class="fas fa-sign-out-alt"></i></button>
	{:else}
	<div class="loginContent">
		<h1>entrar</h1>
		<button id="loginbutton" on:click={loginWithRedirect}><i class="fas fa-sign-in-alt"></i></button>
	</div>
    {/if}
</div>

<style>
	h1 {
		text-align: center;
		font-size: 80px;
		color: #f5f5f5;
		padding: 50px;
		margin: auto;
		font-weight: bold;
		text-transform: uppercase;
	}

	.loginContent {
		display: flex;
		align-items: center;
	}

	#loginbutton {
		background: none;
		border: none;
		font-size: 30px;
		color: #f5f5f5;
	}

	#out {
		background: none;
		float: right;
		color: #f5f5f5;
		margin-right: 20px;
		border: none;
		padding: 12px;
		font-size: 20px;
		font-weight: 500;
	}
</style>