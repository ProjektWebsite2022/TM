import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/_models/cartItem';
import { Navigation } from 'src/app/_models/navigation';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  logoUrl: string = '../../';
  isMobileOpened: boolean = false;


  navigation: Navigation[] = [
    {
      name: 'Veranstaltungen',
      routerLink: '/events',
      isOpened: false,
      subNav: [],
      //[
        // {
        //   name: 'Alternavest FX I',
        //   routerLink: `/${this.localeService.currentLocale}/products/av-fx-I`,
        // },
        // {
        //   name: 'Alternavest FX II',
        //   routerLink: `/${this.localeService.currentLocale}/products/av-fx-II`,
        // },
        // {
        //   name: 'Alternavest Crypto',
        //   routerLink: `/${this.localeService.currentLocale}/products/av-crypto`,
        // },
        // {
        //   name: 'Alternavest Diversified',
        //   routerLink: `/${this.localeService.currentLocale}/products/av-diversified`,
        // },
        // {
        //   name: 'Alternavest Energy',
        //   routerLink: `/${this.localeService.currentLocale}/products/av-energy`,
        // },
        // {
        //   name: 'Alternavest EU',
        //   routerLink: `/${this.localeService.currentLocale}/products/av-eu`,
        // },
      //],
    },
    // {
    //   name: 'Alternavest',
    //   routerLink: '',
    //   isOpened: false,
    //   subNav: [
    //     {
    //       name: data['about-us'],
    //       routerLink: `/${this.localeService.currentLocale}/about-us`,
    //     },
    //     {
    //       name: data.career,
    //       routerLink: `/${this.localeService.currentLocale}/careers`,
    //     },
    //     {
    //       name: data.faq,
    //       routerLink: `/${this.localeService.currentLocale}/frequently-asked-questions`,
    //     },
    //     {
    //       name: data.downloads,
    //       routerLink: `/${this.localeService.currentLocale}/downloads`,
    //     },
    //   ],
    // },
    {
      name: 'Über uns',
      routerLink: `/ueber-uns`,
    },
  ];


  cart: CartItem[];





  constructor(

    private router: Router,
    private cartService: CartService

  ) {
    this.router.events.subscribe((data: any) => {
      this.isMobileOpened = false;
    })
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }



  @HostListener('document:click', ['$event.target']) openSubNav(
    element: HTMLElement
  ) {
    for (let nav of this.navigation) {
      if (element.id != nav.name) nav.isOpened = false;
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  scrollFunction(event: any) {
    let navigation = document.getElementById('navigation');
    let logo = document.getElementById('logo');
    let navigationHeight = document.getElementById('navigation-height');

    if (
      document.body.scrollTop > 99 ||
      document.documentElement.scrollTop > 99
    ) {
      navigation!.style.top = '0';
      navigation!.style.borderBottom = '1px solid #f4f4f4';
      navigationHeight!.style.height = '5rem';

      logo!.style.height = '1.8rem';
    } else {
      navigation!.style.top = ' 3rem';
      navigation!.style.borderBottom = '1px solid #ffffff';
      logo!.style.height = '2.15rem';
      navigationHeight!.style.height = '5rem';
    }
  }
}
