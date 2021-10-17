import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'EDUCATIONAL BACKGROUND','description':'See my Educational Background','image':'../../assets/pic 1.jpg'},
    {'id':2,'name':'MY FAVORITES','description':'See my Favorites','image':'../../assets/pic 3.jpg'},
    {'id':3,'name':'MUSIC PRODUCING CAREER','description':'See my Music Producing Career','image':'../../assets/pic 4.jpg'},
    {'id':4,'name':'MY ALBUMS','description':'See my Albums','image':'../../assets/pic 5.jpg'},
  ]
}