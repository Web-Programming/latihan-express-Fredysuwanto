import { Component, importProvidersFrom, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Register } from '../register';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  template: `
    <p>Nama</p>
    <input type="text" name="nama" id="nama">
    <p>Email</p>
    <input type="email" name="email" id="email">
    <p>Password</p>
    <input type="text" name="pesan" id="pesan">
    <br>
    <button type="submit">Kirim</button>
    <a href="/">Back to Home</a>
  `,
  styleUrl: './register.component.css'
})
export class RegisterComponent {
}
