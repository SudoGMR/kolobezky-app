<template>
  <IonSplitPane content-id="main-content">
      <ion-content content-id="main-content">
        <!-- musi tu byt ion-content -->
      </ion-content>
    <ion-router-outlet id="main-content"></ion-router-outlet>
  </IonSplitPane>
</template>

<script lang="ts">
import { /*IonApp,*/ IonContent,/* IonIcon, IonItem, IonLabel,*//* IonList, IonListHeader,*/ /*IonMenu,*/ /*IonMenuToggle,/* IonNote,*/ IonRouterOutlet, IonSplitPane } from '@ionic/vue';
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
    //IonList, 
    //IonListHeader, 
    //IonMenu, 
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