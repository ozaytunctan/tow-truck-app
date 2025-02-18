import {Injectable, signal, Type} from '@angular/core';
import {ModernLayout} from "./modern-layout/modern-layout";
import {EmptyLayout} from "./empty-layout/empty-layout";

export type Layout = 'modern' | 'empty' | 'classic';

export const LAYOUT_MAP = {
  'modern': ModernLayout,
  'empty': EmptyLayout,
  'classic': ModernLayout,
}

@Injectable({providedIn: 'root'})
export class LayoutManager {

  readonly layout = signal<Layout>('modern')

  constructor() {
  }

  toggleLayout(layoutType: Layout) {
    layoutType = layoutType || "modern";
    this.layout.set(layoutType);
  }

  getLayout(): Type<any> {
    return LAYOUT_MAP[this.layout()];
  }


}
