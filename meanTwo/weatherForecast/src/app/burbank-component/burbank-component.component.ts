import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";


@Component({
  selector: 'app-burbank-component',
  templateUrl: './burbank-component.component.html',
  styleUrls: ['./burbank-component.component.css']
})
export class BurbankComponentComponent implements OnInit {
  weather;
  humidity;
  temperatureAvg;
  temperatureHigh;
  temperatureLow;
  status;

  constructor(private _weatherService: WeatherService) { }

  

  ngOnInit() {
    this.weather = this._weatherService.retrieveWeather('burbankca')
    .then(weather => {
      this.weather = weather
      this.humidity = weather.main.humidity
      this.temperatureAvg = Math.floor(weather.main.temp * (9 / 5) - 459.67)
      this.temperatureHigh = Math.floor(weather.main.temp_max * (9 / 5) - 459.67)
      this.temperatureLow = Math.floor(weather.main.temp_min * (9 / 5) - 459.67)
      this.status = weather.weather[0].description
    })
    .catch(err => {console.log(err);})
  
  }

}
