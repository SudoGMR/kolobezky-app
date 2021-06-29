<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Terms</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Terms</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <div><h3>Terms and Conditions</h3></div>
        <div class="terms">
        <div><p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet commodo nulla facilisi. Magna fringilla urna porttitor rhoncus dolor. Arcu ac tortor dignissim convallis. Volutpat sed cras ornare arcu dui vivamus arcu. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Nulla at volutpat diam ut venenatis tellus in metus. Penatibus et magnis dis parturient montes nascetur ridiculus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Quis viverra nibh cras pulvinar mattis. Tempus egestas sed sed risus pretium quam vulputate dignissim. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Congue eu consequat ac felis donec et. Condimentum lacinia quis vel eros donec ac odio tempor. Iaculis eu non diam phasellus vestibulum lorem. Semper quis lectus nulla at volutpat diam ut venenatis. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Pellentesque nec nam aliquam sem et tortor consequat.

Adipiscing tristique risus nec feugiat in fermentum posuere urna. Proin nibh nisl condimentum id venenatis a condimentum vitae. Tortor posuere ac ut consequat. Id cursus metus aliquam eleifend mi. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Id leo in vitae turpis massa sed elementum tempus. Eget mi proin sed libero. Faucibus purus in massa tempor nec feugiat. Ac felis donec et odio pellentesque diam. Aliquam vestibulum morbi blandit cursus risus at ultrices. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Neque viverra justo nec ultrices dui sapien eget mi proin. Diam sollicitudin tempor id eu. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Dignissim diam quis enim lobortis scelerisque.

Sem et tortor consequat id porta nibh venenatis. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. At elementum eu facilisis sed odio morbi quis commodo. Diam quis enim lobortis scelerisque fermentum dui. Lorem ipsum dolor sit amet consectetur. Lectus vestibulum mattis ullamcorper velit. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Duis ut diam quam nulla porttitor massa. Donec enim diam vulputate ut pharetra sit amet aliquam. Et pharetra pharetra massa massa ultricies. Non diam phasellus vestibulum lorem sed. Elit pellentesque habitant morbi tristique. Cursus euismod quis viverra nibh. Suspendisse interdum consectetur libero id. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.

Risus commodo viverra maecenas accumsan lacus. Sed nisi lacus sed viverra tellus. Velit egestas dui id ornare arcu odio ut sem nulla. Risus quis varius quam quisque id. Dignissim enim sit amet venenatis. Volutpat consequat mauris nunc congue. Ligula ullamcorper malesuada proin libero nunc consequat. Commodo ullamcorper a lacus vestibulum sed arcu. Mauris in aliquam sem fringilla. Fames ac turpis egestas integer eget aliquet. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Vestibulum rhoncus est pellentesque elit ullamcorper.

Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Venenatis urna cursus eget nunc scelerisque viverra. Placerat orci nulla pellentesque dignissim. Sollicitudin tempor id eu nisl nunc mi. Senectus et netus et malesuada fames ac turpis. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Morbi tristique senectus et netus et malesuada fames. Sed libero enim sed faucibus turpis in eu mi bibendum. Risus pretium quam vulputate dignissim suspendisse in est ante in. Turpis egestas sed tempus urna et pharetra.

        </p></div>
        </div>
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-buttons class="-dir-col">
          <ion-button class="-btn -btn-primary" router-link="/start">Accept</ion-button>
          <ion-button class="-btn -btn-secondary" router-link="/start">Reject</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>

  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
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

.terms{
  max-height: 100% !important;
  overflow: scroll;
  margin-bottom: 118 px;
}
/* 118 */
</style>