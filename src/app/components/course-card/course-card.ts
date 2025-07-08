import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  template: `
    <h3>{{ course.description }}</h3>
    <p>{{ course.longDescription }}</p>
    <button (click)="onCourseBought()">Buy course</button>
  `,
  styles: ``
})
export class CourseCard {
  @Input() course!: Course;

  @Output() buyingEvent = new EventEmitter<string>();
  onCourseBought() {
    console.log(`Event emitted: Buying course`, this.course.description);
    this.buyingEvent.emit(this.course.description);
  }
}
