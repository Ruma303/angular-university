import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  template: `
  <div class="course-card" *ngIf="course" #container>
    <div class="course-details">
      <h2 class="course-title">{{ course.title }}</h2>
      <p class="course-description">{{ course.description }}</p>
      <span class="new-badge" *ngIf="course.isNew">New</span>
    </div>
    <button class="enroll-button">Enroll Now</button>
  </div>
  `,
  styleUrl: './course-card.css'
})
export class CourseCard {
  course = {
    title: 'Angular University',
    description: 'Learn Angular from the ground up with our comprehensive course.',
    isNew: true
  };
}
