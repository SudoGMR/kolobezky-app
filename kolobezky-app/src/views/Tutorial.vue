<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Tutorial</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tutorial</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">

        <ion-grid>
          <ion-row>
            <ion-col size="2" class="empty">
              <ion-button>&lt;</ion-button>
            </ion-col>
            <ion-col>
              <img src="../assets/img/scooter.png">
              <p>Lorem ipsum</p>
            </ion-col>
            <ion-col size="2" class="empty">
              <ion-button>&gt;</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>

      </div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-buttons class="-dir-col">
          <ion-button class="-btn -btn-primary" router-link="/login">Start</ion-button>
          <ion-button class="-btn -btn-secondary" router-link="register">Skip tutorial</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/vue';

export default {
  name: 'Tutorial',
  components: {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
  }
}
</script>

<style scoped>
ion-button{
  align-self: center;
}
img{
  width: 50%;
}
/* ------------------- */
.empty{
  display: flex;
}
/* ------------------- */
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