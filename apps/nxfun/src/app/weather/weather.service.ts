import { Injectable } from '@angular/core';
import { IWeather } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}

  getForMonth(): IWeather[] {
    let weather: IWeather[] = [
      {
        averageTemperature: 45,
        lowTemperature: 22,
        highTemperature: 54,
        humidity: 30,
        windMph: 3,
        description: 'Gray but nice',
        date: new Date(2023, 2, 1),
      },
      {
        averageTemperature: 42,
        lowTemperature: 20,
        highTemperature: 50,
        humidity: 27,
        windMph: 15,
        description: 'Cooler, windy',
        date: new Date(2023, 2, 2),
      },
      {
        averageTemperature: 50,
        lowTemperature: 35,
        highTemperature: 62,
        humidity: 55,
        windMph: 2,
        description: 'Unseasonably warm and sunny',
        date: new Date(2023, 2, 3),
      },
    ];

    return weather;
  }
}
