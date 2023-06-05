import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ss-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent {
  @HostBinding("class.ss-page") private css = true;
  @Input() public header: string | undefined;
}
