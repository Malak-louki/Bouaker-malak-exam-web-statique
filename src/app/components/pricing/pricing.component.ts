import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  plans = [
    {
      name: "Basic",
      price: "$15/mo",
      category: "Pour les indépendants",
      features: ["Accès aux outils essentiels", "Messagerie instantanée", "Stockage limité", "Support standard", "Accès mobile"],
      featured: false
    },
    {
      name: "Pro", 
      price: "$25/mo",
      category: "Pour les équipes en croissance",
      features: ["Réunions vidéo HD", "Partage de fichiers illimité", "Intégrations avancées", "Sécurité renforcée", "Assistance prioritaire"],
      featured: true 
    },
    {
      name: "Elite",
      price: "$30/mo",
      category: "Expérience ultime",
      features: ["Espaces personnalisables", "ntelligence artificielle", "Collaboration avancée", "Accès VIP", "Support 24/7"],
      featured: false
    }
  ];
}