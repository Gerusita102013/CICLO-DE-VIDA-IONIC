import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})

export class AboutPage implements OnInit {

  constructor() {
    console.log("About", "Constructor");
  }

  ngOnInit() {
    console.log("About", "ngOnInit", "---Comenzar la navegación---");
  }

  ionViewWillEnter() {
    console.log("About", "ionViewWillEnter", "---Comenzar la transición de página---");
  }

  ionViewDidEnter() {
    console.log("About", "ionViewDidEnter", "---Página completamente en transición---");
  }

  ionViewWillLeave() {
    console.log("About", "ionViewWillLeave", "---comenzar la navegación a la nueva página---");
  }

  ionViewDidLeave() {
    console.log("About", "ionViewDidLeave", "---nueva transición de página terminada---");
  }

  ngOnDestroy() {
    console.log("About", "ngOnDestroy", "---si la página anterior fue destruida---");
  }

}
