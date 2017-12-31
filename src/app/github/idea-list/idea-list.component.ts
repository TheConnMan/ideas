import {Component, OnInit} from '@angular/core';
import {GithubService} from '../shared/github.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'idea-list',
  styleUrls: ['./idea-list.component.css'],
  templateUrl: './idea-list.component.html',
})
export class IdeaListComponent implements OnInit {
  user: string = 'theconnman';
  repo: string = 'ideas';
  ideas: Observable<any>;

  constructor(public github: GithubService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ideas = this.github.getRepoIssues(this.user, this.repo);
    });
  }
}
