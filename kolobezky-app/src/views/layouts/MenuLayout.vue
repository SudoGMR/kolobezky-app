<template>
  <IonSplitPane content-id="main-content">
    <ion-menu content-id="main-content" type="overlay">
      <ion-content>
        <ion-list id="inbox-list">
          <ion-list-header>Hello John</ion-list-header>
          <ion-buttons class="menu-buttons">
            <ion-button>
              Profile
            </ion-button>
            <span class="hor-splitter-bar"></span>
            <ion-button>
              Find a scooter
            </ion-button>
            <ion-button>
              <ion-icon name="wallet-outline"></ion-icon>
              Wallet
            </ion-button>
            <ion-button>
              Ride hsitory
            </ion-button>
            <ion-button>
              <ion-icon name="help-circle-outline"></ion-icon>
              Help
            </ion-button>
          </ion-buttons>
          
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="main-content"></ion-router-outlet>
  </IonSplitPane>
</template>

<script lang="ts">
import { /*IonApp,*/ IonContent,/* IonIcon, IonItem, IonLabel,*/ IonList, IonListHeader, IonMenu, /*IonMenuToggle,/* IonNote,*/ IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent} from 'vue';
//import { useRoute } from 'vue-router';
//import { archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';

export default defineComponent({
  name: 'App',
  components: {
    //IonApp, 
    IonContent, 
    //IonIcon, 
    //IonItem, 
    //IonLabel, 
    IonList, 
    IonListHeader, 
    IonMenu, 
    //IonMenuToggle, 
    //IonNote,
    IonRouterOutlet, 
    IonSplitPane,
  },

  methods:{
    nav(url: string){
      this.$router.push({path:url})
    }
  }
});
</script>

<style scoped>
.menu-buttons{
  display: flex;
  flex-direction: column;
  align-items: start;
}
.hor-splitter-bar{
  margin: 0 20px 0 20px;
  width: 80%;
  border: 1px solid #7f7f7f;
}
ion-icon{
  color: #d32421;
}

</style>