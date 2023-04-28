import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LinkFirstComponent } from "./link-first.component";

describe("LinkFirstComponent", () => {
  let component: LinkFirstComponent;
  let fixture: ComponentFixture<LinkFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkFirstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
