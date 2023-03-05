import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDayBarComponent } from './weather-day-bar.component';

describe('WeatherDayBarComponent', () => {
  let component: WeatherDayBarComponent;
  let fixture: ComponentFixture<WeatherDayBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDayBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherDayBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
