<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons>
                <ion-button>
                <ion-icon name="chevron-back-outline"></ion-icon>
                    Spať    
                </ion-button>
            </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
        </ion-toolbar>

        <ion-content style="display: flex; flex-direction: row;">
            <div>Register</div>
            <div>Mas uz ucet?</div>
            <div>
                <ion-buttons>
                    <ion-button>
                        Prihlas sa
                    </ion-button>
                </ion-buttons>
            </div>
            <div>Osobne udaje</div>
            <div>Meno</div>
            <div>
                <input type="text" name="user-name" id="user-name" placeholder="Meno">
            </div>
            <div>Telefon</div>
            <div>
                <input type="text" name="user-cont" id="user-cont">
            </div>
            <div>Heslo</div>
            <div>
                <input type="text" name="user-password" id="user-password">
            </div>
            <div>Terms</div>
            <div>
                <input type="checkbox" name="terms" id="terms">
            </div>


           <!-- <ion-grid>
                <ion-row>
                    <ion-col>
                        Register
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                    Uz mas ucet?
                    </ion-col>
                </ion-row>
                <ion-row>
                   <ion-col>
                       <ion-buttons>
                           <ion-button>
                               Prihlas sa
                           </ion-button>
                       </ion-buttons>
                   </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        Osobne udaje
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <input type="text" name="Meno" id="user-name">
                    </ion-col>
                </ion-row>
            </ion-grid>-->
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>