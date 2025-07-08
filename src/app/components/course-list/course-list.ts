import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../course-card/course-card';
import { COURSES } from '../../../data/db-courses';
import { Course } from '../../model/course';

@Component({
  selector: 'course-list',
  imports: [CourseCard, CommonModule],
  template: `
    <div class="row">

      <h2>Single courses</h2>
      <course-card [course]="course1" (buyingEvent)="buyCourse($event)"></course-card>
      <course-card [course]="course2"></course-card>
      <course-card [course]="course3"></course-card>

      <hr>

      <h2>List of courses</h2>
      <div class="col-md-4" *ngFor="let course of courses">
        <course-card [course]="course"(buyingEvent)="buyCourse($event)"></course-card>
      </div>
    </div>
  `,
  styles: ``
})
export class CourseList {
  courses: Course[] = COURSES;

  course1 = COURSES[0];
  course2 = COURSES[1];
  course3 = COURSES[2];

  buyCourse(course: string) {
    console.log(`Course bought: ${course}`);
  }
}
