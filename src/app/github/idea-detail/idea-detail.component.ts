import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GithubService} from '../shared/github.service';

@Component({
  selector: 'idea-detail',
  styleUrls: ['./idea-detail.component.css'],
  templateUrl: './idea-detail.component.html'
})
export class IdeaDetailComponent implements OnInit {
  private user: string = 'theconnman';
  private repo: string = 'ideas';
  private idea: number;
  public issueDetails:any = {};

  constructor(public github:GithubService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idea = params['idea'] || '';

      if (this.idea) {
        this.github.getRepoIssue(this.user, this.repo, this.idea)
          .subscribe(issueDetails => {
            this.issueDetails = issueDetails;
          });
      }
    });
  }

  issueLink() {
    return `https://github.com/${this.user}/${this.repo}/issues/${this.idea}`;
  }
}
