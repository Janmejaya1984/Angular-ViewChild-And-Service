import { Component, ElementRef, ViewChild } from '@angular/core';
import { ColorDirective } from './color.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewchild-using-directive';
  @ViewChild('empname') empName!: ElementRef;
  @ViewChild('empnumber') empNumber!: ElementRef;
  ngAfterViewInit() {
    this.empName.nativeElement.style.color = 'blue';
    this.empNumber.nativeElement.style.color = 'red';
  }
  @ViewChild(ColorDirective) colorDirective!: ColorDirective;
  modifyColor(color: string) {
    this.colorDirective.modify(color);
  }
}
