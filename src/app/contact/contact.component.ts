import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      console.log('Form Data:', contactForm.value);
      // You can add further logic here, like sending data to a server
      alert('Message sent successfully!');
      contactForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
