import { Component } from "@angular/core";
import {
  FormControl,
  FormRecord,
  FormBuilder,
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "app-link-second",
  templateUrl: "./link-second.component.html",
  styleUrls: ["./link-second.component.css"],
})
export class LinkSecondComponent {
  constructor(private fb: FormBuilder) {}
  formValid: boolean = false;
  myForm = this.fb.nonNullable.group({
    email: "",
    password: "",
  });
  onSubmit() {
    if (this.formValid == true) {
      console.log(this.myForm.value);
    } else {
      console.log("Invalid Operation");
    }
  }

  checkValid() {
    if (this.myForm.value.email != "" && this.myForm.value.password != "") {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }
}
