<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <div><h3>LOGIN</h3></div>
        <div>
          <p>Ešte nemáš účet?</p>
          <ion-buttons class="-dir-col"><ion-button class="-btn-sm -btn-tertiary" router-link="/register">Registruj sa</ion-button></ion-buttons>
        </div>
        <div class="-void"></div>
        <ion-list>
          <ion-item><ion-input placeholder="Meno" type="text"></ion-input></ion-item>
          <ion-item><ion-input placeholder="Heslo" type="password"></ion-input></ion-item>
        </ion-list>
        <ion-buttons class="-dir-col -center-all">
          <ion-button class="-btn -btn-secondary" router-link="/forgot_password">Zabudol som heslo</ion-button>
        </ion-buttons>
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-buttons class="-dir-col">
          <ion-button class="-btn -btn-primary" router-link="/tutorial">Prihlásiť sa</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default {
  name: 'Login',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  }
}
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