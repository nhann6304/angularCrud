import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isActive: boolean = false;
  constructor(private _http: HttpClient, private router: Router, private CommonService: CommonService) {

  }
  objLogin: any = {
    "Email": "",
    "Password": ""
  };

  onRegister(body: any) {
    console.log(1232);
    // Kiểm tra trước giá trị
    this._http.get("http://localhost:3000/user").subscribe((res: any) => {
      const isUserFound = res.some((user: any) => user.email === body.Email && user.password === body.Password);
      if (isUserFound) {
        alert("Email và mật khẩu đã tồn tại. Vui lòng chọn một email và mật khẩu khác.");
      } else {
        // Nếu không trùng, thực hiện post dữ liệu
        this._http.post('http://localhost:3000/user', body).subscribe((res: any) => {
          // Xử lý phản hồi từ server
        });
      }
    });
  }


  onLogin(body: any) {
    console.log(body);

    this._http.get("http://localhost:3000/user").subscribe((res: any) => {
      // Kiểm tra xem có người dùng nào trong mảng res có email và password giống với body không
      const isUserFound = res.some((user: any) => user.email === body.Email && user.password === body.Password);
      console.log(isUserFound);

      if (isUserFound) {
        alert("Đăng nhập thành công");
        this.CommonService.isLog = true
        this.router.navigate([""]);
      } else {
        alert("Đăng nhập thất bại");
        this.CommonService.isLog = false

      }
    });
  }



}
