import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { HeroComponent } from './components/hero/hero.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponentComponent } from './components/card-component/card-component.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeroComponent,PricingComponent, FeaturesComponent, NavbarComponent, CardComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bouaker-malak-exam';
}
