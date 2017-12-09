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
      subtitle: {
        team: 'Meet the team!',
        serviceTitle: 'Service',
        historyTitle: 'History'
      },
      service: 'Our company is all about convenience for you.. the customer. We strive to quickly and efficiently repair your\n' +
      '        broken phone screen at work at home or even using our special recorded delivery. To give you peace of mind\n' +
      '        that you are getting the best service possible. We only ever use grade A screens sourced from the manufacturers.\n' +
      '        We are also happy to send you the screen for you to repair yourself.',
      history: 'Our company is a fictional online smart phone repair service foundered December 2017 as a stream 1 project for\n' +
      '        code institute diploma in software development. This site is purely aesthetic and does not offer any real services.',
      testTitle: 'Testimonials',
      image: {
        me: 'assets/joseph.jpg',
        sarah: 'assets/sarah.jpg',
        testOne: 'assets/test-one.jpg',
        testTwo: 'assets/test-two.jpg',
        testThree: 'assets/test-three.jpg',
        background: 'assets/dust_scratches.png',
      }
    },
    'service': {
      image: '/assets/smashed screen.jpg',
      background: '/assets/circles-dark.png'
    },
    'nav': {
      logo: '/assets/mobile-phone-logo-icon.png'
    },
    'contact': {
      background: '/assets/circles-light.png'
    },
  };
}



