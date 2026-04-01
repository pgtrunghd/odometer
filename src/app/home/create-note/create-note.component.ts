import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendar, speedometer } from 'ionicons/icons';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonItem,
    IonList,
    IonInput,
    IonLabel,
    IonDatetimeButton,
    IonModal,
    IonDatetime,
    IonIcon,
    ReactiveFormsModule,
  ],
})
export class CreateNoteComponent {
  constructor(private modalCtrl: ModalController) {
    addIcons({ speedometer, calendar });
  }

  noteForm = new FormGroup({
    totalKm: new FormControl<number | null>(null),
    date: new FormControl(new Date().toISOString()),
  });

  cancel() {
    return this.modalCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.noteForm.value);
  }
}
