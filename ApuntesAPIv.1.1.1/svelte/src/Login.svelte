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
    <button id="out" on:click={logout}>Log Out</button>
	{:else}
    <button id="loginbutton" on:click={loginWithRedirect}>Log In</button>
    {/if}
</div>