import { Component, Input } from '@angular/core';
import { IWeather } from '../weather';
import spacetime from 'spacetime';

@Component({
  selector: 'weather-day-bar',
  templateUrl: './weather-day-bar.component.html',
  styleUrls: ['./weather-day-bar.component.scss'],
})
export class WeatherDayBarComponent {
  @Input('weather')
  weather: IWeather | null = null;

  public get formattedDate(): string {
    return this.weather !== null
      ? spacetime(this.weather.date).format('nice-day')
      : 'n/a';
  }

  public get summary(): string {
    return `avg: ${this.weather?.averageTemperature}, high: ${this.weather?.highTemperature}, low: ${this.weather?.lowTemperature}`;
  }

  public get description(): string {
    return '';
  }
}
