<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Register</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <div><h3>Register</h3></div>
        <div><p>Už máš účet?</p></div>
        <ion-buttons class="-dir-col"><ion-button class="-btn-sm -btn-tertiary" router-link="/login">Prihlás sa</ion-button></ion-buttons>
        <div class="-void"></div>
        <div>
          <ion-list>
            <ion-item lines="none"><h3>Osobné údaje</h3></ion-item>
            <ion-item><ion-input placeholder="Meno" type="text"></ion-input></ion-item>
            <ion-item><ion-input placeholder="Telefón" type="tel"></ion-input></ion-item>
            <ion-item><ion-input placeholder="Heslo" type="password"></ion-input></ion-item>
            <ion-item lines="none">
              <ion-checkbox></ion-checkbox>
              <h6>Terms and Conditions</h6>            
            </ion-item>
          </ion-list>
        </div>
      </div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-buttons class="-dir-col">
          <ion-button class="-btn -btn-primary" router-link="/start">Register</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonButtons, IonCheckbox, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default {
  name: 'Register',
  components: {
    IonButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonFooter,
    IonHeader,
    IonInput,
    IonItem,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  }
}
</script>

<style scoped>
ion-checkbox{
  margin: 15px 10px 10px 0;
}
/* --- */
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