import { Component } from '@angular/core';

@Component({
  selector: 'html-content',
  templateUrl: './app1/templates/app1.html_content.html',
  styles: [
    'textarea {width: 300px; height: 200px; border: 1px solid gray; box-shadow: 3px 3px 3px 0px rgba(163,155,163,1);}'
  ]
})

export class HtmlContent {
  private dynamicHTMLContent: string;
  contentToCompile: string;

  constructor() {
  }

  compileHTMLContent() {
    this.contentToCompile = this.dynamicHTMLContent;
  }

}