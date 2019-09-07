import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

import { load, parse } from 'gh-emoji';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  query: string;
  currentItems: any = [];
  page: number;
  emojiParserLoaded: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) {
    this.emojiParserLoaded = false;
    load().then(() => this.emojiParserLoaded = true);
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }

    this.query = val;
    this.items.query({
      name: this.query
    }).subscribe((data: any) => {
      this.currentItems = data["items"];
      this.page = 1;
    });
  }

  parseItemDescription(item: Item) {
    if (!item || !item.description) {
      return null;
    }
    
    if (!this.emojiParserLoaded) {
      return item.description;
    }

    return parse(item.description);
  }

  loadData(event) {
    this.page++;
    this.items.next(this.page, {
        name: this.query
      })
      .subscribe((data: any) => {
        event.complete();

        if (!data["items"] || data["items"].length == 0) {
          event.enabled = false;
        } else {
          this.currentItems = this.currentItems.concat(data["items"]);
        }
      });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
