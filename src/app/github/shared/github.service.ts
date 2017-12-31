import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  constructor(private http: Http) { }

  getRepoIssues(user: string, repo: string) {
    return this.makeRequest(`repos/${user}/${repo}/issues`);
  }

  getRepoIssue(user: string, repo: string, issue: number) {
    return this.makeRequest(`repos/${user}/${repo}/issues/${issue}`);
  }

  private makeRequest(path: string) {
    let params = new URLSearchParams();

    let url = `https://api.github.com/${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
}
