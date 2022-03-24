<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title><h1>PurLuft Network</h1></ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">PurLuft Network</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
        <ion-title>Dispositivos</ion-title>
        <ion-buttons @click="signOut(auth)"
        slot="primary">
          <ion-button auto-hide="false">
            <ion-icon :icon="logOutOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

      <ion-list>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Mi PurLuft</h1>
            <ion-note>dirección:</ion-note>
          </ion-label>
          <ion-badge color="succes" slot="end">
            conectado
          </ion-badge>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="megaphone"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <div v-if="auth.currentUser" id="container">
        <strong>Bienvenido {{auth.currentUser.displayName}}</strong>
        <p>Recibirás <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">notificaciones de seguridad</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { megaphone, logOutOutline } from 'ionicons/icons';
import { auth, signOut } from '../firebase.js';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup () {
    return {
      router: useRouter(),
      megaphone,
      logOutOutline,
      auth,
      signOut 
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>