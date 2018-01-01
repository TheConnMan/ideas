import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  constructor(private http: Http) { }

  getRepoIssues(user: string, repo: string) {
    return this.makeRequest(`repos/${user}/${repo}/issues`, { labels: 'idea', state: 'all' });
  }

  getRepoIssue(user: string, repo: string, issue: number) {
    return this.makeRequest(`repos/${user}/${repo}/issues/${issue}`);
  }

  getIssueComments(user: string, repo: string, issue: number) {
    return this.makeRequest(`repos/${user}/${repo}/issues/${issue}/comments`);
  }

  private makeRequest(path: string, rawParams: { [key:string]:string } = {}) {
    let params = new URLSearchParams();
    Object.keys(rawParams).forEach(param => params.append(param, rawParams[param]));

    let headers = new Headers();

    headers.append('Accept', 'application/vnd.github.squirrel-girl-preview+json');

    let url = `https://api.github.com/${ path }`;
    return this.http.get(url, { search: params, headers: headers })
      .map((res) => res.json())
      .catch((error) => Promise.resolve());
  }
}
