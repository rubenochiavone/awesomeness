import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items, Profile } from '../../providers';

import * as marked from 'marked';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  content: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, profile: Profile, private http: HttpClient) {
    this.item = navParams.get('item') || items.defaultItem;

    // Repository URL
    let repoUrl = this.item.html_url;
    let defaultBranch = this.item.default_branch;
    let repoBlobUrl = `${repoUrl}/blob/${defaultBranch}`;
    let repoRawUrl = `${repoUrl}/raw/${defaultBranch}`;
    let urlPattern = /^https?:\/\//i;

    let awesomeMarked = marked;
    let awesomeRenderer = new awesomeMarked.Renderer();
    awesomeRenderer.html = function(html: string) {
      html = html.replace(/<a(.*?)href="(.*?)"/g, function(match: string, $1: string, $2: string) {
        let href: string = $2;
        let target = '_self';
        let goToDivFunction = '';

        if (href.startsWith('#')) {
          goToDivFunction = ` onclick="document.getElementById('${href.substring(1)}').scrollIntoView();"`;
          href = `${window.location.href}#`;
        } else if (urlPattern.test(href)) {
          target = '_blank';
        } else {
          // Relative link should link to repo
          href = href.startsWith('/') ? `${repoBlobUrl}${href}` : `${repoBlobUrl}/${href}`;
          target = '_blank';
        }

        return `<a${$1}href="${href}" target="${target}"${goToDivFunction}`;
      });

      html = html.replace(/<img(.*?)src="(.*?)"/g, function(match: string, $1: string, $2: string) {
        let url: string = $2;
        
        if (!urlPattern.test(url)) {
          // Relative link should link to repo
          url = url.startsWith('/') ? `${repoRawUrl}${url}?sanitize=true` : `${repoRawUrl}/${url}?sanitize=true`;
        }

        return `<img${$1}src="${url}"`;
      });
      
      return html;
    }
    awesomeRenderer.link = function(href: string, title: string, text: string) {
      let hasTargetBlank : boolean = false;
      let goToDivFunction = '';

      if (href.startsWith('#')) {
        goToDivFunction = ` onclick="document.getElementById('${href.substring(1)}').scrollIntoView();"`;
        href = `${window.location.href}#`;
      } else if (urlPattern.test(href)) {
        hasTargetBlank = true;
      } else {
        // Relative link should link to repo
        href = href.startsWith('/') ? `${repoBlobUrl}${href}` : `${repoBlobUrl}/${href}`;
        hasTargetBlank = true;
      }

      let link = marked.Renderer.prototype.link.call(this, href, title, text);

      if (!hasTargetBlank) {
        return link.replace('<a', `<a ${goToDivFunction}`);
      }

      return link.replace('<a', `<a target="_blank"${goToDivFunction}`);
    }
    awesomeRenderer.image = function(href: string, title: string, text: string) {
      if (!urlPattern.test(href)) {
        // Relative link should link to repo
        href = href.startsWith('/') ? `${repoRawUrl}${href}?sanitize=true` : `${repoRawUrl}/${href}?sanitize=true`;
      }

      return marked.Renderer.prototype.image.call(this, href, title, text);
    }

    profile.find(this.item)
      .subscribe((profile: any) => {
        this.http.get(profile.files.readme.url)
          .subscribe((readme: any) => {
            this.http.get(readme.download_url, {responseType: 'text'})
              .subscribe((data: any) => {
                this.content = awesomeMarked(data, {
                  renderer: awesomeRenderer
                });
              });
          });
      });
  }
}
