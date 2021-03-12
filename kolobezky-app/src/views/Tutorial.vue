<template>
    <ion-page>
        <ion-content>
            <ion-grid>
              <ion-row style="height: 30vh;">
                  <ion-col>
                      empty
                  </ion-col>
              </ion-row>
              <ion-row style="height: 40vh;">
                  <ion-col>
                      back button
                  </ion-col>
                  <ion-col size="8">
                      content
                  </ion-col>
                  <ion-col>
                      next button
                  </ion-col>
              </ion-row>
              <ion-row style="height: 30vh;">
                  <ion-col>
                        <div class="ion-align-items-center">
                            <ion-button>Start</ion-button>
                            <ion-button>Skip tutorial</ion-button>
                        </div>
                   </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
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

/*-------------*/

.button {
    display: flex;
    width: 100%;
    margin: 30px 0 30px 0;
}
</style>