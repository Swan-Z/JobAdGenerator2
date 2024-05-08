import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobDescriptionPage } from './job-description.page';

describe('JobDescriptionPage', () => {
  let component: JobDescriptionPage;
  let fixture: ComponentFixture<JobDescriptionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
