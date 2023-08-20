import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css', '../projects/projects.component.css']
})
export class CardProjectComponent {
  @Input() imageProject: string = "";
  @Input() titleProject: string = "";
  @Input() descriptionProject: string = "";
  @Input() githubLinkProject: string = "https://github.com/roke741"
}
