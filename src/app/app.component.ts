import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturesComponent } from './components/features/features.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { ToolsComponent } from "./tools/tools.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, HeroComponent, PricingComponent, NavbarComponent, FeaturesComponent, ToolsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bouaker-malak-exam';
}
