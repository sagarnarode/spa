import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  currentSlide = 0;
  testimonials = [
    {
      text: "The Spa Villa provided me with an incredible experience. I left feeling rejuvenated and relaxed!",
      author: "- Sarah J."
    },
    {
      text: "Absolutely the best massage I've ever had. The staff is professional and attentive.",
      author: "- Mark T."
    },
    {
      text: "A fantastic place to unwind. The ambiance is perfect, and the treatments are top-notch.",
      author: "- Emily R."
    },
    {
      text: "I highly recommend The Spa Villa! They truly care about your well-being.",
      author: "- John D."
    },
  ];
  
  autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  changeSlide(direction: number) {
    this.currentSlide = (this.currentSlide + direction + this.testimonials.length) % this.testimonials.length;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.changeSlide(1);
    }, 3000); // Adjusted to 3 seconds for quicker transitions
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval); // Clear interval on component destroy
    }
  }
}
