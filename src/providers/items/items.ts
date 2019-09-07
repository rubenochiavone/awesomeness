import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class Items {
  constructor(public api: Api) { }

  defaultItem: any = {
    "name": "notfound",
    "full_name": "project/notfound",
    "owner": {
      "login": "project"
    },
    "html_url": "https://github.com/"
  };

  query(params?: any) {
    let query = '+topic:awesome+topic:awesome-list';

    if (params && params.name) {
      query = params.name + query;
    }
    
    return this.api.get('search/repositories', {
        q: query,
        sort: 'stars',
        order: 'desc'
      }, {
        'Accept': 'application/vnd.github.mercy-preview+json'
      });
  }

  next(page: number, params?: any) {
    let query = '+topic:awesome+topic:awesome-list';

    if (params && params.name) {
      query = params.name + query;
    }
    
    return this.api.get('search/repositories', {
        q: query,
        page: page,
        sort: 'stars',
        order: 'desc'
      }, {
        'Accept': 'application/vnd.github.mercy-preview+json'
      });
  }
}
