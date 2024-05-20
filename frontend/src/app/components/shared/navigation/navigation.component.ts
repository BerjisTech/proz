import { Component, Input } from '@angular/core';
import { NavItem } from '../../../interfaces/navigation/nav-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  @Input() showMain: boolean = true;
  @Input() showMainBackground: boolean = false;

  navItems: NavItem[] = [
    { url: '', displayName: 'Home', iconName: 'home', mode: 'home' },
    { url: 'about', displayName: 'About', iconName: 'info', mode: 'about' },
    { url: 'contact', displayName: 'Contact', iconName: 'mail', mode: 'contact' }
  ];
}
