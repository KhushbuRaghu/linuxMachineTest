import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form?: FormGroup | any;
  public userList: any = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  public add(): void {
    const control = <FormArray>this.form.controls['user_detail'];
    control.push(this.getControls());
  }

  public getForm(): any {
    return (this.form.get('user_detail') as FormArray).controls;
  }

  public remove(i: number) {
    const contrls = <FormArray>this.form.controls['user_detail'];
    contrls.removeAt(i);
  }

  public submit(): void {
    this.userList = this.form.value.user_detail;
    this.form.reset();
    this.createForm();

  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      user_detail: this.formBuilder.array([this.getControls()]),
    });
  }

  private getControls(): any {
    return this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
    });
  }
}
