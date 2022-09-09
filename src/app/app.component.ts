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
  isLoading: boolean = false;
  cityName: string = 'Uppsala';
  WeatherData?: WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.isLoading = true;
    this.getWeatherData(this.cityName);
    this.cityName = '';
    this.isLoading = false;
  }

  private getWeatherData(cityName: string) {
    this.WeatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.WeatherData = response;
        console.log(response);
      },
    });
  }
}
