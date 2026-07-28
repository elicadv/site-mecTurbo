import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {

  items = [
    {
      question: 'Pergunta exemplo?',
      answer: 'Resposta exemplo.'
    }
  ];

  openedIndex = -1;

  toggleItem(index: number) {
    this.openedIndex = this.openedIndex === index ? -1 : index;
  }
}