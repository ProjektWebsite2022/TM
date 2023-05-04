import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public message: {
    message: string;
    color: string;
  } = null;

  translationData: any;

  

  loading: boolean = false;

  contactFormGroup: FormGroup;

  constructor(
    //private translateService: TranslateService
  ) { 

  }

  ngOnInit(): void {
    this.createFormGroup();
  }

  public createFormGroup() {
    this.contactFormGroup = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    })
  }

  public async submitContactForm() {
    console.log('submitting');
    console.log(this.contactFormGroup.value);
    this.message = null;
    if (this.contactFormGroup.invalid) {
      this.message = {
        color: 'bg-red-500',
        message: 'Bitte füllen Sie alle Felder aus.'
      }
      console.log('alle felder ausfüllen');
      return
    }

    this.loading = true;
    console.log('loading');

      this.message = {
        color: 'bg-green-500',
        message: 'Vielen Dank für Ihre Anfrage. Wir werden uns schnellstmöglichst mit Ihnen in Verbindung setzen.'
      };
      this.createFormGroup();


    this.loading = false;
    
  }
}
