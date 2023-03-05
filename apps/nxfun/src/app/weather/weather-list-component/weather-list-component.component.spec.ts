import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListComponentComponent } from './weather-list-component.component';

describe('WeatherListComponentComponent', () => {
  let component: WeatherListComponentComponent;
  let fixture: ComponentFixture<WeatherListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherListComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
