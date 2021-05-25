<template>
    <ion-page>
        <ion-content>
            <ion-grid>
                <ion-row class="mid">
                  <ion-col>
                      <ion-buttons>
                          <ion-button class="-btn -btn-normal -dir-col">
                              back
                            </ion-button>
                      </ion-buttons>
                  </ion-col>
                  <ion-col size="8">
                      content
                  </ion-col>
                  <ion-col>
                      <ion-buttons>
                          <ion-button class="-btn -btn-normal -dir-col">
                              next
                            </ion-button>
                      </ion-buttons>
                  </ion-col>
              </ion-row>
            </ion-grid>
            <ion-footer>
                <ion-buttons>
                    <ion-button class="-btn -btn-primary">Start</ion-button>
                    <ion-button class="-btn -btn-secondary">Skip tutorial</ion-button>
                </ion-buttons>
            </ion-footer>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonButton/*, IonFooter, IonTitle, IonToolbar*/ } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonButton/*, IonFooter, IonTitle, IonToolbar */}
});
</script>

<style scoped>
.mid{
    height: calc(100vh - 135px);
}
.mid ion-col{
    justify-content: center;
}
ion-col ion-buttons{
    padding: 0;
}
</style>