import { Component } from '@angular/core';

import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Services } from './services/services';
import { Faq } from './faq/faq';
import { Contato } from './contato/contato';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    Services,
    Faq,
    Contato,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}