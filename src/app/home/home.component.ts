import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataPro: any;
  constructor(private CommonService: CommonService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getLastProduct();
  }

  getLastProduct() {
    this.CommonService.listAllProduct().subscribe((res) => {
      this.dataPro = res;
    })
  }
}
