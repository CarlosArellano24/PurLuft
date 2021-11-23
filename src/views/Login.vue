<template>
  <ion-page>
    <!--
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Inicia sesión!</ion-title>
      </ion-toolbar>
    </ion-header>
    -->

    <ion-content>  
      <div id="loginMessage">
        <h1>PurLuft</h1>
        <p>Inicia sesión para comenzar</p>
      </div>

      <div id="options" vertical="bottom">
        <ion-button @click="loginWithProvider(facebookAuthProvider)"
        expand="block" color="dark" size="large">
          <ion-icon :icon="logoApple" slot="start"></ion-icon>  
          <strong>Apple</strong>
        </ion-button>
        <ion-button @click="loginWithProvider(googleAuthProvider)"
        expand="block" color="danger" size="large">
          <ion-icon :icon="logoGoogle" slot="start"></ion-icon>
          <strong>Google</strong>
        </ion-button>
        <ion-button @click="loginWithProvider(facebookAuthProvider)"
        expand="block" color="primary" size="large">
          <ion-icon :icon="logoFacebook" slot="start"></ion-icon>  
          <strong>Facebook</strong>
        </ion-button>
        <ion-button 
        expand="block" color="light" size="large">
          <ion-icon :icon="mail" slot="start"></ion-icon>  
          <strong>Email</strong>
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage
} from '@ionic/vue';
import { defineComponent } from 'vue';

import {
  logoGoogle,
  logoFacebook,
  logoApple,
  mail
} from 'ionicons/icons';

import {
  signInWithRedirect,
  auth,
  googleAuthProvider,
  facebookAuthProvider
} from '../firebase.js'

export default defineComponent({
  name: 'Login',
  components: {
    IonContent,
    IonPage,
  },
  setup () {
    return {
      logoGoogle,
      logoFacebook,
      logoApple,
      mail,
      googleAuthProvider,
      facebookAuthProvider
    }
  },
  methods: {
    async loginWithProvider(provider) {
      //In the future it will be necessary to add a signInWithPopup to support browsers
      return await signInWithRedirect(auth, provider);
      
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // const user = result.user;
    }
  }
});
</script>

<style scoped>
  #loginMessage {
    position: absolute;
    right:20%;
    left:20%;
    top: 50%;
    transform: translateY(-100%);

    overflow-wrap: break-word;
  }
  #loginMessage h1{
    text-align:center;
    font-weight: bold;
    font-size: 50px;
  }
  #loginMessage p{
    text-align:center;
    font-size:18px;
  }

  #options {
    position: absolute;
    right:0;
    left:0;
    top: 92.5%;
    transform: translateY(-100%);

    margin-left: 15%;
    margin-right: 15%;
  }
</style>