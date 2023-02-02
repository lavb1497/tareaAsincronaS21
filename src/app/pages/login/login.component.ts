import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  user!:string;
  password!:string;

  usuario = "AD";
  contraseña = "123456";

  constructor(private globalDataService:LoginService, private router:Router) { }

    login(){
      if (this.user == this.usuario && this.password == this.contraseña){
        this.guardarDatos();

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario y contraseña válidos',
            showConfirmButton: false,
            timer: 1500
        })
      }else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El usuario o contraseña es incorrecto',
            showConfirmButton: false,
            timer: 1500
      })
    }
  }
  guardarDatos(){
    localStorage.setItem('usuario', this.usuario);
    localStorage.setItem('password', this.password)
    localStorage.setItem('login',"true")
    this.globalDataService.globalVariable = true;
  }
}
