<template>
    <ion-page>
        <ion-content>
            <ion-grid>
                <ion-row class="mid">
                    <ion-col>
                      <ion-buttons>
                            <ion-button class="-btn-normal -dir-col">
                                &lt;
                            </ion-button>
                        </ion-buttons>
                    </ion-col>
                    <ion-col size="8" class="mid-tutorial">
                        <h3>Tutorial</h3>
                        <img src="../resources/scooter.png">
                        <p>Praesent tempus accumsan sodales. Quisque quis vestibulum neque, nec aliquet ante. Ut varius finibus urna sit amet condimentum. Ut mattis libero sed ex faucibus, in. </p>
                    </ion-col>
                    <ion-col>
                        <ion-buttons>
                                <ion-button class="-btn-normal -dir-col">
                                  &gt;
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
ion-item{
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    width: 50%;
}
.mid-tutorial{
    padding: 10px;
}
</style>