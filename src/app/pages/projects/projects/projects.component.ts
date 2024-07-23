import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MyProjectsService } from '../../../services/myProjects/my-projects.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule], 
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor
  (
    public myProjects: MyProjectsService
  ) {}

  navigateTo(url : string){
    window.location.href= url;
  }

}
