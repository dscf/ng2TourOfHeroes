import {Component} from '@angular/core';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService, ROUTER_PROVIDERS],
  styleUrls: ['app/app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['Dashboard']">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }
])

export class AppComponent {
  title = 'Tour of Heroes';
}
