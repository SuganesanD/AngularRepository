import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  value1: string = "Add To Cart"
  value2: string = "Add To Cart"
  value3: string = "Add To Cart"
  value4: string = "Add To Cart"
  value5: string = "Add To Cart"
  value6: string = "Add To Cart"

  initialval1: number = 0
  initialval2: number = 0
  initialval3: number = 0
  initialval4: number = 0
  initialval5: number = 0
  initialval6: number = 0

  totalvalue: number = 0

  btnval1: boolean = true
  btnval2: boolean = true
  btnval3: boolean = true
  btnval4: boolean = true
  btnval5: boolean = true
  btnval6: boolean = true

  courses: string[] = ["Introduction to Data Structures and Algorithms", "Web Development Bootcamp: HTML, CSS, and JavaScript", "Full Stack Development with Node.js and React", "Machine Learning: A Comprehensive Guide", "Mobile App Development with Flutter", "Cybersecurity Fundamentals: Protecting Your Digital World",]
  values: string[] = ["Add To Cart", "Remove"]
  clickedbtn1() {
    if (this.initialval1 == 0) {
      this.initialval1++
      this.totalvalue += this.initialval1
      this.value1 = this.values[1]
      this.btnval1 = !this.btnval1
    }
    else {
      this.initialval1--
      this.value1 = this.values[0]
      this.totalvalue -= 1
      this.btnval1 = !this.btnval1

    }
  }

  clickedbtn2() {
    if (this.initialval2 == 0) {
      this.initialval2++
      this.value2 = "Remove"
      this.totalvalue += this.initialval2
      this.btnval2 = !this.btnval2
    }
    else {
      this.initialval2--
      this.value2 = "Add To Cart"
      this.totalvalue -= 1
      this.btnval2 = !this.btnval2
    }
  }

  clickedbtn3() {
    if (this.initialval3 == 0) {
      this.initialval3++
      this.value3 = "Remove"
      this.totalvalue += this.initialval3
      this.btnval3 = !this.btnval3
    }
    else {
      this.initialval3--
      this.value3 = "Add To Cart"
      this.totalvalue -= 1
      this.btnval3 = !this.btnval3
    }
  }

  clickedbtn4() {
    if (this.initialval4 == 0) {
      this.initialval4++
      this.value4 = "Remove"
      this.totalvalue += this.initialval4
      this.btnval4 = !this.btnval4
    }
    else {
      this.initialval4--
      this.value4 = "Add To Cart"
      this.totalvalue -= 1
      this.btnval4 = !this.btnval4
    }
  }

  clickedbtn5() {
    if (this.initialval5 == 0) {
      this.initialval5++
      this.value5 = "Remove"
      this.totalvalue += this.initialval5
      this.btnval5 = !this.btnval5
    }
    else {
      this.initialval5--
      this.value5 = "Add To Cart"
      this.totalvalue -= 1
      this.btnval5 = !this.btnval5
    }
  }

  clickedbtn6() {
    if (this.initialval6 == 0) {
      this.initialval6++
      this.value6 = "Remove"
      this.totalvalue += this.initialval6
      this.btnval6 = !this.btnval6
    }
    else {
      this.initialval6--
      this.value6 = "Add To Cart"
      this.totalvalue -= 1
      this.btnval6 = !this.btnval6
    }
  }
}
