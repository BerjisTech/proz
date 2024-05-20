import { Component, Input } from '@angular/core';
import { NavItem } from '../../../../interfaces/navigation/nav-item';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  @Input() path: NavItem = { url: '', displayName: '', iconName: '', mode: '' };
}
