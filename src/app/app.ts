import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCard } from './course-card/course-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular University';
}
