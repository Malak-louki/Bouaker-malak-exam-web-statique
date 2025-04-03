import { Component } from '@angular/core';
import { CardComponentComponent } from '../card-component/card-component.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule , CardComponentComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  cards = [
    {
      title: "Productivité maximale",
      description: "Un espace de travail optimisé sans distractions.",
      imageUrl: "images/image-1.png" 
    },
    {
      title: "Environnement inspirant",
      description: "Des espaces conçus pour stimuler la créativité.",
      imageUrl: "images/image-2.png"
    },
    {
      title: "Flexibilité totale",
      description: "Accès 24/7 selon vos besoins.",
      imageUrl: "images/image-3.png"
    },
    {
      title: "Réseau professionnel",
      description: "Communauté d'experts et de talents.",
      imageUrl: "images/image-4.png"
    }
  ];
}