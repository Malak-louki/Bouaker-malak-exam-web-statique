import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './tools.component.html'
})
export class ToolsComponent {
  tools = [
    {
      number: '01',
      title: "Agenda Inteligent",
      description: "Planifier vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive"
    },
    {
      number: '02',
      title: "Outils de productivité",
      description: "Connecter facillemnt vos applications préférées pour un flux de travail optimisé et sans interruptions."
    },
    {
      number: '03',
      title: "Communication fluide",
      description: "Discutez avec vos collègues en temps réel via chat, messagerie et apples vidéo haite qualité."
    },
    {
      number: '04',
      title: "Tableaux de bord",
      description: "Visualisez l'évolution des vos projets avec des graphiques et statistiques détaillés."
    },
    {
      number: '05',
      title: "Partage facile",
      description: "Partagez rapidement vos fichiers en toute sécurité et travaillez en équipe sur des documents partagés"
    },
  ];


  introText = "Des Fonctionnalités conçues pour améliorer votre efficacité et simplifier votre quotidien. Profitez d'un espace de travil optimisé pour mieux collaborer sans effort.";
}