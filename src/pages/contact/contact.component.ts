import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // formData = {
  //   name: '',
  //   mobile: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // };

  // sendQuery() {
  //   const whatsappNumber = '9665159489'; // Replace with your WhatsApp number
  //   const message = `Name: ${this.formData.name}\nMobile: ${this.formData.mobile}\nEmail: ${this.formData.email}\nSubject: ${this.formData.subject}\nMessage: ${this.formData.message}`;
  //   const encodedMessage = encodeURIComponent(message);
  //   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  //   window.open(whatsappUrl, '_blank');
  // }

}
