import { Component, HostBinding, OnInit } from '@angular/core';
import { navItems } from '../_nav';
import { faCog, faLaughWink, faTachometerAlt, faWrench, faFolder, faTable, faChartArea, faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-control-sidebar',
  templateUrl: './control-sidebar.component.html',
  styleUrls: ['./control-sidebar.component.css',
                '../core.css'
  ],
})
export class ControlSidebarComponent implements OnInit {
  public navItems = navItems;
  //Iconos 
  faLaughWink = faLaughWink;
  faTachometerAlt = faTachometerAlt;
  faCog = faCog;
  faWrench = faWrench;
  faFolder = faFolder;
  faChartArea = faChartArea;
  faTable = faTable;
  faBars = faBars;  
  constructor() { }
  ngOnInit(): void {
  }
 

}
