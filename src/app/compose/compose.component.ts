import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgModel } from "@angular/forms";

@Component({
  selector: "app-compose",
  templateUrl: "./compose.component.html",
  styleUrls: ["./compose.component.css"],
})
export class ComposeComponent {
  details = "";
  message = "";
  sending = false;

  constructor(private router: Router) {}

  send() {
    this.sending = true;
    this.details = "Sending Message...";

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
