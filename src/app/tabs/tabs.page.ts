import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  PortadaAble: boolean = true;
  PersonajesAble: boolean = true;
  MomentosAble: boolean = true;
  AboutAble: boolean = true;
  VidaAble: boolean = true;
  ContratameAble: boolean = true;

  disablePortada()
  {
    this.PortadaAble = false;
    this.PersonajesAble = true;
    this.MomentosAble = true;  
    this.AboutAble = true;
    this.VidaAble = true;
    this.ContratameAble = true;
  }

  disablePersonaje()
  {
    this.PortadaAble = true;
    this.PersonajesAble = false;
    this.MomentosAble = true;  
    this.AboutAble = true;
    this.VidaAble = true;
    this.ContratameAble = true;
  }

  disableMomentos()
  {
    this.PortadaAble = true;
    this.PersonajesAble = true;
    this.MomentosAble = false;  
    this.AboutAble = true;
    this.VidaAble = true;
    this.ContratameAble = true;

  }

  disableAbout(){
    this.PortadaAble = true;
    this.PersonajesAble = true;
    this.MomentosAble = true;
    this.AboutAble = false;
    this.VidaAble = true;
    this.ContratameAble = true;
  }

  disableVida()
  {
    this.PortadaAble = true;
    this.PersonajesAble = true;
    this.MomentosAble = true;  
    this.AboutAble = true;
    this.VidaAble = false;
    this.ContratameAble = true;

  }

  disableContratame()
  {
    this.PortadaAble = true;
    this.PersonajesAble = true;
    this.MomentosAble = true;  
    this.AboutAble = true;
    this.VidaAble = true;
    this.ContratameAble = true;

  }

}
