import { Component } from '@angular/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {Router} from '@angular/router-deprecated';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'my-heroes',
  directives:[HeroDetailComponent],
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {

  addingHero = false;
  error: any;

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  constructor(private heroService: HeroService, private router: Router) {
  }
  title = 'Tour of Heroes';
  selectedHero: Hero;

  heroes: Hero[];

  onSelect(hero) {
    this.selectedHero = hero;
  }
  gotoDetail() {
    this.router.navigate(['HeroDetail',{id:this.selectedHero.id}]);
  }
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  delete(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService
        .delete(hero)
        .then(res => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

}
