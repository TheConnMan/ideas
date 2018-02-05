import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GithubService} from '../shared/github.service';

@Component({
  selector: 'idea-detail',
  styleUrls: ['./idea-detail.component.css'],
  templateUrl: './idea-detail.component.html',
  encapsulation: ViewEncapsulation.None
})
export class IdeaDetailComponent implements OnInit {
  private idea: number;
  public issueDetails: any = {};
  public issueComments: any[] = [];

  constructor(public github:GithubService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idea = params['idea'] || '';

      if (this.idea) {
        this.github.getRepoIssue(this.idea)
          .subscribe(issueDetails => {
            this.issueDetails = issueDetails;
          });
        this.github.getIssueComments(this.idea)
          .subscribe(issueComments => {
            this.issueComments = issueComments;
          });
      }
    });
  }

  issueLink() {
    return `https://github.com/${this.github.user}/${this.github.repo}/issues/${this.idea}`;
  }
}
