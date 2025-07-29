import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

contact_form!: FormGroup;

constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.contact_form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit(){
    if (this.contact_form.invalid) {
      this.contact_form.markAllAsTouched();
    }
  }


}
