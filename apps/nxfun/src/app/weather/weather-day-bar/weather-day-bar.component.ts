import { Component, Input } from '@angular/core';
import { IWeather } from '../weather';

@Component({
  selector: 'weather-day-bar',
  templateUrl: './weather-day-bar.component.html',
  styleUrls: ['./weather-day-bar.component.scss'],
})
export class WeatherDayBarComponent {
  @Input('weather')
  weather: IWeather | null = null;
}
