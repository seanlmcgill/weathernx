import { Component, OnInit } from '@angular/core';
import { IWeather } from './weather/weather';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'nxfun-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nxfun';

  weatherList: IWeather[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherList = this.weatherService.getForMonth();
  }
}
