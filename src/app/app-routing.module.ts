import { NgModule } from "@angular/core";
import {
  RouterModule,
  Routes,
  RouterStateSnapshot,
  TitleStrategy,
  UrlSegment,
} from "@angular/router";
import { AppComponent } from "./app.component";
import { LinkFirstComponent } from "./link-first/link-first.component";
import { LinkSecondComponent } from "./link-second/link-second.component";
import { AchildComponent } from "./achild/achild.component";
import { BchildComponent } from "./bchild/bchild.component";
import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { myGuad } from "./myGuard";
import { ComposeComponent } from "./compose/compose.component";

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Angular | ${title}`);
    } else {
      this.title.setTitle(`Angular`);
    }
  }
}

const routes: Routes = [
  {
    path: "first-link",
    component: LinkFirstComponent,
    title: "First Child",
    children: [
      { path: "child-a", component: AchildComponent, title: "Child A" },
      { path: "child-b", component: BchildComponent, title: "Child B" },
    ],
    canActivate: [myGuad],
  },
  {
    path: "second-link",
    component: LinkSecondComponent,
    title: "second child",
  },
  {
    path: "compose",
    component: ComposeComponent,
    outlet: "popup",
  },
  {
    matcher: (url) => {
      if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
        return {
          consumed: url,
          posParams: {
            username: new UrlSegment(url[0].path.slice(1), {}),
          },
        };
      }

      return null;
    },
    component: LinkFirstComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: CustomTitleStrategy }],
})
export class AppRoutingModule {}
