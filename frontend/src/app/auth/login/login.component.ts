import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card'; 
import { NzFormModule } from 'ng-zorro-antd/form'; 
import { NzTableModule } from 'ng-zorro-antd/table'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      localStorage.setItem('access_token', response.access);
      this.router.navigate(['/dashboard']);
    }, error => {
      alert('Invalid credentials');
    });
  }
}
