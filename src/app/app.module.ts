import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { IdeaListComponent } from './github/idea-list/idea-list.component';
import { IdeaDetailComponent } from './github/idea-detail/idea-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    IdeaListComponent,
    IdeaDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    MarkdownToHtmlModule.forRoot()
  ],
  providers: [
    GithubService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
