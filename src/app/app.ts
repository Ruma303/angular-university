import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseList } from "./components/course-list/course-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular University';
}
