import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class Profile {
  constructor(public api: Api) { }

  find(item: any) {
    return this.api.get('repos/' + item.full_name + '/community/profile', {
    }, {
      'Accept': 'application/vnd.github.black-panther-preview+json'
    });
  }
}
