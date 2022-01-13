import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  private readonly minRotate = 240;
  private readonly maxSpeedCount = 180;
  private readonly proportion = this.minRotate / this.maxSpeedCount;
  rotate = this.minRotate;
  num = 0;
  backgroundColor!: string;

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.rotatePointer();
    }, 2000);
  }

  rotatePointer() {
    this.num = Math.ceil(Math.random() * this.maxSpeedCount);
    if (0 < this.num && this.num <= this.minRotate) {
      this.rotate = this.minRotate + this.num * this.proportion;

      if (60 < this.num && this.num <= 120) {
        this.backgroundColor = 'orange';
      } else if (120 < this.num && this.num <= 180) {
        this.backgroundColor = 'red';
      } else {
        this.backgroundColor = 'green';
      }
    } else {
      this.rotate = this.minRotate;
    }
  }
}
