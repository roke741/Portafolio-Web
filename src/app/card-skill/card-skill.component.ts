import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-skill',
  templateUrl: './card-skill.component.html',
  styleUrls: ['./card-skill.component.css', '../skills/skills.component.css']
})
export class CardSkillComponent {
  @Input() title:string = 'Languajes';
  @Input() content:string =  'Python JavaScript NodeJs Java PHP HTML CSS'
  
  skillCards = [
    [
      { title: 'Languajes', content: 'Python JavaScript NodeJs Java PHP HTML CSS' },
      { title: 'Databases', content: 'MySQL PostgreSQL MongoDB' },
      { title: 'DevOps', content: 'Linux Docker Kubernetes Jenkins' },
    ],
    [
      { title: 'Tools', content: 'VSCode IntelliJ PyCharm NetBeans Git GitHub Figma Adobe XD Adobe Photoshop Adobe Illustrator Postman' },
      { title: 'Frameworks', content: 'Bootstrap 5 JQuery Angular 15 React Spring Boot 3 Scrapy' }
    
    ]
  ];
}
