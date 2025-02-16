import {Component, Directive, input} from '@angular/core';


@Directive()
export abstract class StatWidgetBase {

}

@Component({
  selector: 'stat-widget,[stat-widget]',
  standalone: true,
  imports: [],
  template: `
    <ng-content select=".title ,stat-widget-title,[stat-widget-title]"></ng-content>
    <ng-content select=".body,stat-widget-body,[stat-widget-body]"></ng-content>
    <ng-content></ng-content>
    <ng-content select=".footer,stat-widget-footer,[stat-widget-footer]"></ng-content>
  `,
  styles: `
    :host {
      background-color: #fff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  `
})
export class StatWidgetComponent extends StatWidgetBase {

}


@Directive()
export class StatWidgetTitleBase {
}


@Component({
  selector: 'stat-widget-title,[stat-widget-title]',
  standalone: true,
  styles: `
    :host {
      font-size: 1em;
      color: #555;
      margin-bottom: 10px;
    }
  `,
  template: `
    <ng-content></ng-content>`,
  host: {class: 'stat-widget-title'},
})
export class StatWidgetTitle extends StatWidgetTitleBase {

}


@Component({
  selector: 'stat-widget-body,[stat-widget-body]',
  standalone: true,
  template: `
    <ng-content></ng-content>`,
  styles: `

    :host {
      display: block;
      padding: 10px 5px;
    }
  `,
  host: {class: 'stat-widget-body'},
})
export class StatWidgetBody {

}


@Component({
  selector: 'stat-widget-footer,[stat-widget-footer]',
  standalone: true,
  template: `
    <ng-content></ng-content>`,
  host: {class: 'stat-widget-footer'},

  styles: `
    :host {
      font-size: 0.8em;
      color: #888;
      margin-top: 5px;
    }
  `
})
export class StatWidgetFooter {

}

