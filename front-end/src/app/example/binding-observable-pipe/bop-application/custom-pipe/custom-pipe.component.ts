import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {
  temp = 0;
  toCelsius = false;
  targetFormat = 'Fahrenheit';
  format = 'CtoF';

  constructor() { }

  ngOnInit(): void {
  }

  toggleFormat() {
    this.toCelsius = !this.toCelsius;
    this.format = this.format ? 'FtoC' : 'CtoF';
    this.targetFormat = this.toCelsius ? 'Celsius' : 'Fahrenheit';
  }
}
