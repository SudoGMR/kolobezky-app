<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons class="ion-align-items-start no-padding">
                    <ion-button class="-btn-normal">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                        &lt; Spať  
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <div>
                <h3><b>LOGIN</b></h3>
            </div>
            <div>
                <p>Ešte nemáš účet?</p>
                <ion-button class="-btn-tertiary">Registruj sa</ion-button>
            </div>
            <span></span>
            <div>
                <ion-list>
                    <ion-item lines="none"><h3 style="align-self: start;">Osobné údaje</h3></ion-item>
                    <ion-item><ion-input placeholder="Meno" type="text"></ion-input></ion-item>
                    <ion-item><ion-input placeholder="Heslo" type="password"></ion-input></ion-item>
                </ion-list>
                <ion-buttons>
                    <ion-button class="-btn-normal forgotten-password">Zabudol som heslo</ion-button>
                </ion-buttons>
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
ion-content div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.forgotten-password{
    color: var(--ion-color-primary);
}
ion-buttons{
    margin: 0;
}

.-btn-tertiary{
    margin: 10px 0 20px 0;
}

ion-item{
    align-self: start;
}
ion-list{
    width:95%;
}
.-input{
    border-bottom: 1px solid #000000;
}
ion-checkbox{
    margin: 5px 5px 0 0;
}
.no-padding{
    padding: 0;
}
</style>