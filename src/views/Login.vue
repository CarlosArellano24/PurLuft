<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Inicia sesión!</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="loginOptions">
        <ion-button @click="googleLogin"
        expand="block" color="danger" size="large">
          <ion-icon :icon="logoGoogle" slot="start"></ion-icon>
          Google
        </ion-button>
        <ion-button 
        expand="block" color="primary" size="large">
          <ion-icon :icon="logoFacebook" slot="start"></ion-icon>  
          Facebook
        </ion-button>
        <ion-button 
        expand="block" color="light" size="large">
          <ion-icon :icon="mail" slot="start"></ion-icon>  
          Correo Electrónico
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

import {
  logoGoogle,
  logoFacebook,
  mail
} from 'ionicons/icons';

export default defineComponent({
  name: 'Login',
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup () {
    return {
      logoGoogle,
      logoFacebook,
      mail
    }
  },
  methods: {
    googleLogin() {
      
    }
  }
});
</script>

<style scoped>
  #loginOptions {
    margin:20px;
  }

  #loginOptions ion-button {
    font-weight: bold;
  }
</style>