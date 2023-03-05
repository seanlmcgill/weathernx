import { Component, Input } from '@angular/core';
import { IWeather } from '../weather';

@Component({
  selector: 'weather-list',
  templateUrl: './weather-list-component.component.html',
  styleUrls: ['./weather-list-component.component.scss'],
})
export class WeatherListComponentComponent {
  @Input('weatherList')
  weatherList: IWeather[] = [];
}
