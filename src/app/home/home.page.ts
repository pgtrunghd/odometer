import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonButtons,
  IonButton,
  IonCheckbox,
  CheckboxCustomEvent,
  ModalController,
  IonListHeader,
  IonText,
} from '@ionic/angular/standalone';
import { add, bicycle } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CreateNoteComponent } from './create-note/create-note.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    DecimalPipe,
    IonFab,
    IonFabButton,
    IonIcon,
    IonModal,
    IonButtons,
    IonButton,
    IonCheckbox,
    IonListHeader,
    IonText,
  ],
})
export class HomePage implements OnInit {
  constructor(private modalCtrl: ModalController) {
    addIcons({ add, bicycle });
  }

  presentingElement!: HTMLElement | null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CreateNoteComponent,
      presentingElement: this.presentingElement!,
    });
    modal.present();
  }
}
