<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons class="ion-align-items-start no-padding">
                    <ion-button class="-btn-normal">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                        Spať  
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-flex-direcrion-col" style="display: flex;">
            <div class="" style="display: flex">
                <h2>REGISTER</h2>
            </div>
        </ion-content>

        <ion-footer>
            <ion-buttons>
                <ion-button class="-btn -btn-primary">Register</ion-button>
            </ion-buttons>
        </ion-footer>
    </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
ion-buttons{
    margin: 0;
}
.no-padding{
    padding: 0;
}
</style>