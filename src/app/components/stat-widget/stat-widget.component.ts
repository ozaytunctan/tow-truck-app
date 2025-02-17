import {ChangeDetectionStrategy, Component, Directive, ViewEncapsulation} from '@angular/core';


@Directive()
export abstract class StatWidgetBase {

}

@Component({
  selector: 'stat-widget,[stat-widget]',
  template: `
    <ng-content select=".title ,stat-widget-title,[stat-widget-title]"></ng-content>
    <ng-content select=".body,stat-widget-body,[stat-widget-body]"></ng-content>
    <ng-content></ng-content>
    <ng-content select=".footer,stat-widget-footer,[stat-widget-footer]"></ng-content>
  `,
  styleUrl: 'card.scss',
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatWidgetComponent extends StatWidgetBase {

}


@Directive()
export class StatWidgetTitleBase {
}


@Component({
  selector: 'stat-widget-title,[stat-widget-title]',
  exportAs: 'statWidgetTitle',
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


@Directive({
  selector: 'stat-widget-body,[stat-widget-body]',
  host: {class: 'stat-widget-content'},
})
export class StatWidgetBody {

}


@Component({
  selector: 'stat-widget-footer,[stat-widget-footer]',
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

