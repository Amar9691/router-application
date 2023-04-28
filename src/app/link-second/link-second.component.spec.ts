import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LinkSecondComponent } from "./link-second.component";

describe("LinkSecondComponent", () => {
  let component: LinkSecondComponent;
  let fixture: ComponentFixture<LinkSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkSecondComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
