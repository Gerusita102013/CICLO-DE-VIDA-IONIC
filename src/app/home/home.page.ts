import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor() {
    console.log("Home", "Constructor");
  }

  ngOnInit() {
    console.log("Home", "ngOnInit", "---Comenzar la navegación---");
  }

  ionViewWillEnter() {
    console.log("Home", "ionViewWillEnter", "---Comenzar la transición de página---");
  }

  ionViewDidEnter() {
    console.log("Home", "ionViewDidEnter", "---Página completamente en transición---");
  }

  ionViewWillLeave() {
    console.log("Home", "ionViewWillLeave", "---comenzar la navegación a la nueva página---");
  }

  ionViewDidLeave() {
    console.log("Home", "ionViewDidLeave", "---nueva transición de página terminada---");
  }

  ngOnDestroy() {
    console.log("Home", "ngOnDestroy"), "---si la página anterior fue destruida---";
  }
}
