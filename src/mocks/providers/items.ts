import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Items {
  defaultItem: any = {
    "id": 21737465,
    "node_id": "MDEwOlJlcG9zaXRvcnkyMTczNzQ2NQ==",
    "name": "awesome",
    "full_name": "sindresorhus/awesome",
    "private": false,
    "owner": {
      "login": "sindresorhus",
      "id": 170270,
      "node_id": "MDQ6VXNlcjE3MDI3MA==",
      "avatar_url": "https://avatars1.githubusercontent.com/u/170270?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sindresorhus",
      "html_url": "https://github.com/sindresorhus",
      "followers_url": "https://api.github.com/users/sindresorhus/followers",
      "following_url": "https://api.github.com/users/sindresorhus/following{/other_user}",
      "gists_url": "https://api.github.com/users/sindresorhus/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sindresorhus/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sindresorhus/subscriptions",
      "organizations_url": "https://api.github.com/users/sindresorhus/orgs",
      "repos_url": "https://api.github.com/users/sindresorhus/repos",
      "events_url": "https://api.github.com/users/sindresorhus/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sindresorhus/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/sindresorhus/awesome",
    "description": ":sunglasses: Curated list of awesome lists",
    "fork": false,
    "url": "https://api.github.com/repos/sindresorhus/awesome",
    "forks_url": "https://api.github.com/repos/sindresorhus/awesome/forks",
    "keys_url": "https://api.github.com/repos/sindresorhus/awesome/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/sindresorhus/awesome/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/sindresorhus/awesome/teams",
    "hooks_url": "https://api.github.com/repos/sindresorhus/awesome/hooks",
    "issue_events_url": "https://api.github.com/repos/sindresorhus/awesome/issues/events{/number}",
    "events_url": "https://api.github.com/repos/sindresorhus/awesome/events",
    "assignees_url": "https://api.github.com/repos/sindresorhus/awesome/assignees{/user}",
    "branches_url": "https://api.github.com/repos/sindresorhus/awesome/branches{/branch}",
    "tags_url": "https://api.github.com/repos/sindresorhus/awesome/tags",
    "blobs_url": "https://api.github.com/repos/sindresorhus/awesome/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/sindresorhus/awesome/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/sindresorhus/awesome/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/sindresorhus/awesome/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/sindresorhus/awesome/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/sindresorhus/awesome/languages",
    "stargazers_url": "https://api.github.com/repos/sindresorhus/awesome/stargazers",
    "contributors_url": "https://api.github.com/repos/sindresorhus/awesome/contributors",
    "subscribers_url": "https://api.github.com/repos/sindresorhus/awesome/subscribers",
    "subscription_url": "https://api.github.com/repos/sindresorhus/awesome/subscription",
    "commits_url": "https://api.github.com/repos/sindresorhus/awesome/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/sindresorhus/awesome/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/sindresorhus/awesome/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/sindresorhus/awesome/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/sindresorhus/awesome/contents/{+path}",
    "compare_url": "https://api.github.com/repos/sindresorhus/awesome/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/sindresorhus/awesome/merges",
    "archive_url": "https://api.github.com/repos/sindresorhus/awesome/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/sindresorhus/awesome/downloads",
    "issues_url": "https://api.github.com/repos/sindresorhus/awesome/issues{/number}",
    "pulls_url": "https://api.github.com/repos/sindresorhus/awesome/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/sindresorhus/awesome/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/sindresorhus/awesome/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/sindresorhus/awesome/labels{/name}",
    "releases_url": "https://api.github.com/repos/sindresorhus/awesome/releases{/id}",
    "deployments_url": "https://api.github.com/repos/sindresorhus/awesome/deployments",
    "created_at": "2014-07-11T13:42:37Z",
    "updated_at": "2019-01-26T01:27:08Z",
    "pushed_at": "2019-01-25T20:41:19Z",
    "git_url": "git://github.com/sindresorhus/awesome.git",
    "ssh_url": "git@github.com:sindresorhus/awesome.git",
    "clone_url": "https://github.com/sindresorhus/awesome.git",
    "svn_url": "https://github.com/sindresorhus/awesome",
    "homepage": "",
    "size": 658,
    "stargazers_count": 100598,
    "watchers_count": 100598,
    "language": null,
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": true,
    "forks_count": 13327,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 193,
    "license": null,
    "topics": [
      "awesome",
      "awesome-list",
      "lists",
      "resources",
      "unicorns"
    ],
    "forks": 13327,
    "open_issues": 193,
    "watchers": 100598,
    "default_branch": "master",
    "score": 7.319983
  };

  itemsUrl = 'assets/data/items.json';
  moreItemsUrl = 'assets/data/moreItems.json';

  constructor(private http: HttpClient) { }

  query(params?: any) {
    return this.http.get(this.itemsUrl);
  }

  next(page: number, params?: any) {
    return this.http.get(this.moreItemsUrl);
  }
}
