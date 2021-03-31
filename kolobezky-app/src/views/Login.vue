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
                        Login
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        Este nemas ucet?
                    </ion-col>
                </ion-row>
                <ion-buttons>
                    <ion-button>
                        Registruj sa
                    </ion-button>
                </ion-buttons>
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
                        Heslo
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-input type="text" name="user-password" id="user-password"></ion-input>
                    </ion-col>
                </ion-row>
                <ion-buttons>
                    <ion-button>Prihlas sa</ion-button>
                </ion-buttons>
                <ion-buttons>
                     <ion-button>Zabudol som heslo</ion-button>
                </ion-buttons>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>