export interface Navigation {
    name: string;
    routerLink: string;
    isOpened?: boolean;
    subNav?: subNav[];
  }
  
  interface subNav {
    name: string;
    routerLink: string;
  }
  