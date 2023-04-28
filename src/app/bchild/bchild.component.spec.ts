import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BchildComponent } from "./bchild.component";

describe("BchildComponent", () => {
  let component: BchildComponent;
  let fixture: ComponentFixture<BchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BchildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
