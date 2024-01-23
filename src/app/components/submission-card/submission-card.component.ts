import { Component, Input, OnInit } from '@angular/core';
import { SubmissionStatus, submissionDetails } from '../submissions/submissions.component';

@Component({
  selector: 'app-submission-card',
  templateUrl: './submission-card.component.html',
  styleUrls: ['./submission-card.component.scss']
})
export class SubmissionCardComponent implements OnInit {

  @Input() cardDetail = new submissionDetails();
  SubmissionStatus = SubmissionStatus;
  constructor() { }

  ngOnInit(): void {
  }

}
