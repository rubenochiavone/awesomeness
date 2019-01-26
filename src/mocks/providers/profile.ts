import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Profile {

  profileUrl = 'assets/data/profile.json';

  constructor(private http: HttpClient) { }

  find(item: any) {
    return this.http.get(this.profileUrl);
  }
}
