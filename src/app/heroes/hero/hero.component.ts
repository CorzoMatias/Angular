import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iron Man';
  public age: number = 45;

  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHeroe(): void {
    this.name = 'SpiderMan';
  }

  public changeAge(): void {
    this.age = 60;
  }

  public resetForm(): void {
    this.name = 'iron Man';
    this.age = 45;
  }
}
