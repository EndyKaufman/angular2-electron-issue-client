import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'app',
  templateUrl: 'app/tpl.html'
})
export class App {
  title = 'Tasks';
}