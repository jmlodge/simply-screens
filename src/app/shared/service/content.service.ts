import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {
  Objs: Object = {
    'home': {
      title: 'simplyScreens',
      subtitle: 'Lets NOT Have A Smashing Time',
      top: 'Top Screen Repairs',
      search: 'Search Results',
      image: 'assets/main-img-home.jpeg',
      icon: 'assets/main-icon-home.png'
    },
    'about': {
      title: 'About',
      subtitle: 'Meet the team!',
      testTitle: 'Testimonials',
      image: {
        me: 'assets/joseph.jpg',
        sarah: 'assets/sarah.jpg',
        testOne: 'assets/test-one.jpg',
        testTwo: 'assets/test-two.jpg',
        testThree: 'assets/test-three.jpg',
      }
    },
    'service': {
      image: '/assets/smashed screen.jpg'
    },
    'nav': {
      logo: '/assets/mobile-phone-logo-icon.png'
    }
  };
}



