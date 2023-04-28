import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LinkFirstComponent } from "./link-first/link-first.component";
import { LinkSecondComponent } from "./link-second/link-second.component";
import { NavComponent } from "./nav/nav.component";
import { AchildComponent } from "./achild/achild.component";
import { BchildComponent } from "./bchild/bchild.component";
import { ComposeComponent } from "./compose/compose.component";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LinkFirstComponent,
    LinkSecondComponent,
    NavComponent,
    AchildComponent,
    BchildComponent,
    ComposeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
