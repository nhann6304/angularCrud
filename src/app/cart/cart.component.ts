import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataCart: any; // Mảng chứa thông tin sản phẩm đã thêm vào giỏ hàng
  totalAmount: number = 0; // Tổng số tiền trong giỏ hàng

  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLasCart();
  }

  deleteItemCart(dataPro: any) {
    this.commonService.deleteCart(dataPro).subscribe((res) => {
      this.getLasCart();
    });
  }

  getLasCart() {
    this.commonService.listAllCart().subscribe((res) => {
      this.dataCart = res;
      console.log(this.dataCart);
      this.calculateTotalAmount();
    });
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.dataCart.reduce((total: number, item: any) => total + item.price, 0);
  }
}
