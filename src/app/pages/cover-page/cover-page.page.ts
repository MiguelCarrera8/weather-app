import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.page.html',
  styleUrls: ['./cover-page.page.scss'],
})
export class CoverPagePage implements OnInit {

  constructor(
    private apiService: ApiService,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.apiService.getUserLocation().subscribe((response) => {
      console.log(response);
      this.storage.set('city', response.city);
    })
  }

}
