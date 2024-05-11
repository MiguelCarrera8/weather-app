import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isLoading = true;
  weather: any;

  constructor(
    private apiService: ApiService,
    private storage: Storage,

  ) { }

  weatherArray = [
    { name: "sun", code: [113] },
    { name: "parcial_nublado", code: [116, 176, 179, 182, 200, 293, 299, 305, 323, 329, 335, 353, 356, 359, 362, 368, 371, 374, 377, 386, 392] },
    { name: "nublado", code: [119, 122, 143, 185, 227, 230, 248, 260, 326, 332, 338, 350] },
    { name: "tormenta_electrica", code: [389, 395] },
    { name: "chispea", code: [185, 281, 284, 311, 314] },
    { name: "lluvia", code: [263, 266, 296, 302, 308, 317, 320] }
  ];


  ngOnInit() {
    this.storage.get('city').then((city) => {
      // console.log(city);

      this.apiService.getWeatherCity(city).subscribe(async (weather) => {
        // console.log(weather);

        let parts = weather.current.condition.icon.split("/");
        let extractedPart = parts.slice(-2)[1];



        console.log(extractedPart.split('.')[0]);


        let img = this.findArrayByCodeId(parseInt(extractedPart.split('.')[0]));
        // console.log(img);


        switch (img) {
          case 'sun':
            if (weather.current.is_day == 0) {
              weather.current.condition.icon = 'assets/icons/moon.svg'
            } else {
              weather.current.condition.icon = 'assets/icons/sun.svg'
            }
            break;
          case 'parcial_nublado':
            if (weather.current.is_day == 0) {
              weather.current.condition.icon = 'assets/icons/parcial_nublado.svg'
            } else {
              weather.current.condition.icon = 'assets/icons/parcial_nublado_noche.svg'
            }
            break;
          case 'nublado':
            weather.current.condition.icon = 'assets/icons/nublado'

            break;
          case 'tormenta_electrica':
            weather.current.condition.icon = 'assets/icons/tormenta_electrica.svg'

            break;
          case 'chispea':

            weather.current.condition.icon = 'assets/icons/chispea.svg'
            break;
          case 'lluvia':

            weather.current.condition.icon = 'assets/icons/lluvia.svg'

            break;
        }


        await this.apiService.getFilteredData(weather.current.condition.code, weather.current.isday).subscribe((response) => {
          // console.log(response);
          weather.current.condition.language = response;

          this.weather = weather;

          // console.log(weather);
          this.isLoading = false;

        });



      });
    })
  }

  findArrayByCodeId(id: number): string | null {
    for (let weather of this.weatherArray) {
      if (weather.code.includes(id)) {
        return weather.name;
      }
    }
    return null; // Devuelve null si el ID no se encuentra en ningún array
  }

}
