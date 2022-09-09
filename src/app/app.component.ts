import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private WeatherService: WeatherService) {}
  WeatherData?: WeatherData;
  ngOnInit(): void {
    this.WeatherService.getWeatherData('London').subscribe({
      next: (response) => {
        this.WeatherData = response;
        console.log(response);
      },
    });
  }
}
