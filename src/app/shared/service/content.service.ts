import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {
  Objs: Object = {
    'home': {
      title: 'simplyScreens',
      subtitle: 'Lets NOT Have A Smashing Time',
      image: 'assets/main-img-home.jpeg',
      icon: 'assets/main-icon-home.png'
    },
    'about': {},
    'service': {},
    'content': {}
  };
}



