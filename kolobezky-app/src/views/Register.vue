<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons>
                <!--
                <ion-back-button>
                    
                </ion-back-button>
                -->
                <ion-button>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    Spať  
                </ion-button>
            </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
        </ion-toolbar>

        <ion-content>
           <ion-grid>
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
                        Meno
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                            <ion-input type="text" name="user-name" id="user-name"></ion-input>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        [space]
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        Telefon
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-input type="text" name="user-contact" id="user-contact"></ion-input>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        Heslo
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-input type="text" name="user-password" id="user-password"></ion-input>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-input type="checkbox" name="user-terms" id="user-user-terms"></ion-input>
                        Terms
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        [space]
                    </ion-col>
                </ion-row>
                <ion-buttons>
                    <ion-button>
                        Register
                    </ion-button>
                </ion-buttons>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>