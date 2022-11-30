import { Component } from '@angular/core';

@Component({
  selector: 'uu-root',
  template: `
  <uu-nav-menu></uu-nav-menu>
    <router-outlet></router-outlet>
<footer style="  position: fixed;
bottom: 0;
width: 100%;" class="text-center text-lg-start bg-light text-muted">

  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2022 N52-05
  </div>
</footer>
  `,
  styles: []
})
export class AppComponent {

}
