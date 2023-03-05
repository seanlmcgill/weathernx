import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { WeatherDayBarComponent } from './weather/weather-day-bar/weather-day-bar.component';
import { WeatherListComponentComponent } from './weather/weather-list-component/weather-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDayBarComponent,
    WeatherListComponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
