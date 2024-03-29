import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const export_icon = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.15347 14.64L11.995 11.77C12.2822 11.47 12.2822 11 11.9851 10.71C11.698 10.42 11.2327 10.42 10.9455 10.71L9.37129 12.31V7.49C9.37129 7.07 9.04455 6.74 8.63861 6.74C8.23267 6.74 7.89604 7.07 7.89604 7.49V12.31L6.32178 10.71C6.03465 10.42 5.56931 10.42 5.28218 10.71C4.99505 11 4.99505 11.47 5.28218 11.77L8.11386 14.64C8.18317 14.71 8.26238 14.76 8.35148 14.8C8.44059 14.84 8.5396 14.86 8.63861 14.86C8.73762 14.86 8.82673 14.84 8.91584 14.8C9.00495 14.76 9.08416 14.71 9.15347 14.64ZM16.3282 7.02561C16.5609 7.02292 16.8143 7.02 17.0446 7.02C17.302 7.02 17.5 7.22 17.5 7.47V15.51C17.5 17.99 15.5 20 13.0446 20H5.17327C2.58911 20 0.5 17.89 0.5 15.29V4.51C0.5 2.03 2.4901 0 4.96535 0H10.2525C10.5 0 10.7079 0.21 10.7079 0.46V3.68C10.7079 5.51 12.1931 7.01 14.0149 7.02C14.4333 7.02 14.8077 7.02318 15.1346 7.02595C15.3878 7.02809 15.6125 7.03 15.8069 7.03C15.9479 7.03 16.1306 7.02789 16.3282 7.02561ZM16.6045 5.5661C15.7916 5.5691 14.8322 5.5661 14.1421 5.5591C13.047 5.5591 12.145 4.6481 12.145 3.5421V0.9061C12.145 0.4751 12.6629 0.2611 12.9579 0.5721C13.7203 1.37199 14.8873 2.5978 15.8738 3.63395C16.2735 4.05379 16.6436 4.44249 16.945 4.7591C17.2342 5.0621 17.0223 5.5651 16.6045 5.5661Z" fill="#2188D9"/>
</svg>

`;

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {

  submissionList = new Array<submissionDetails>();
  searchTerm: string = '';
  searchForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'export-icon',
      sanitizer.bypassSecurityTrustHtml(export_icon)
    );
   }
  onSearch() {
    const searchTerm = this.searchForm.get('searchTerm')!.value;
    console.log('Search term:', searchTerm);
    // You can perform actions based on the search term, such as filtering data or making API calls
    // console.log('Search term:', this.searchTerm);
  }
  

  ngOnInit(): void {
    this.setSubmissions();
    this.searchForm = this.formBuilder.group({
      searchTerm: [''],
      form: [''],
      status: [''],
      status2: [''],
    });
  }

  onToogleChange(event:any){
    console.log(event, "event");
  }
  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });
  setSubmissions() {
    this.submissionList = [
      {
        title: 'Work Flow: Requires Location',
        fromEmail: 'denisgordiyenya@gmail.com',
        toEmail: 'denisgordiyenya@gmail.com',
        dueDate: '06 December',
        status: SubmissionStatus.Uncompete
      },
      {
        title: 'Work Flow: Requires Location',
        fromEmail: 'denisgordiyenya@gmail.com',
        toEmail: 'denisgordiyenya@gmail.com',
        dueDate: '06 December',
        status: SubmissionStatus.LowRisk
      },
      {
        title: 'Work Flow: Requires Location',
        fromEmail: 'denisgordiyenya@gmail.com',
        toEmail: 'denisgordiyenya@gmail.com',
        dueDate: '06 December',
        status: SubmissionStatus.Uncompete
      },
      {
        title: 'Work Flow: Requires Location',
        fromEmail: 'denisgordiyenya@gmail.com',
        toEmail: 'denisgordiyenya@gmail.com',
        dueDate: '06 December',
        status: SubmissionStatus.NeedsReview
      },
    ];
  }

  download(){
    
  }

}


export class submissionDetails {
  title !: string;
  fromEmail !: string;
  toEmail !: string;
  dueDate !: string;
  status !: SubmissionStatus;
}

export enum SubmissionStatus {
  Uncompete = 'Uncomplete',
  LowRisk = 'Low Risk',
  NeedsReview = 'Needs Review',
}