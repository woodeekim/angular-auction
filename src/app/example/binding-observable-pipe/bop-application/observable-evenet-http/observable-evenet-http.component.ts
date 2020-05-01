import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable-evenet-http',
  templateUrl: './observable-evenet-http.component.html',
  styleUrls: ['./observable-evenet-http.component.scss']
})
export class ObservableEvenetHttpComponent implements OnInit {
  private baseWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix = '&units=metric&appid=ca3f6d6ca3973a518834983d0b318f73';

  searchSecondInput: FormControl = new FormControl();
  temperature: string;

  constructor() {
    /*
    this.searchSecondInput.valueChanges
      .pipe(debounceTime(200))
      .pipe(switchMap(city => this.getWeather(city)))
      .subscribe(
        res => {
          this.temperature =
            `Current temperature is ${res.main.temp}, humidity: ${res.main.humidity}`;
        },
        err => console.log('에러 발생'), () => console.log('retrieved');
      )*/
  }

 /* getWeather(city: string): Observable<Array<string>> {
    return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
  }*/

  ngOnInit(): void {
  }

}
