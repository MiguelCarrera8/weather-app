import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public pages = [
    { tab: 'chats', name: 'Chats', icon: 'chatbubbles' },
    { tab: 'home', name: 'Inicio', icon: 'home' },
    { tab: 'profile', name: 'Perfil', icon: 'person' }
  ];
  constructor() {}

}
