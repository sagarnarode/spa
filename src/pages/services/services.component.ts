import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  isDialogOpen: boolean = false;
  selectedService: string ='';
  constructor() {}

  openCallDialog() {
    window.open('tel:+911234567890','_self');
}
}

