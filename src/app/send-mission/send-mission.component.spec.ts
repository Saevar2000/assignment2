import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMissionComponent } from './send-mission.component';

describe('SendMissionComponent', () => {
  let component: SendMissionComponent;
  let fixture: ComponentFixture<SendMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
