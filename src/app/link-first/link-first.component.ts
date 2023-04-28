import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-link-first",
  templateUrl: "./link-first.component.html",
  styleUrls: ["./link-first.component.css"],
})
export class LinkFirstComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  username$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get("username"))
  );

  ngOnInit(): void {
    console.log(this.route.parent);
  }
}
