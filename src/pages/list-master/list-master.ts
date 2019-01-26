import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

import { load, parse } from 'gh-emoji';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  page: number;
  emojiParserLoaded: boolean;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.emojiParserLoaded = false;
    load().then(() => this.emojiParserLoaded = true);
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    this.items.query()
      .subscribe((data: any) => {
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
    this.items.next(this.page)
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
