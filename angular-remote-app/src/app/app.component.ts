import { Component, Renderer2, RendererFactory2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-remote-app';

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, private router: Router) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.listenToMessages();
  }

  listenToMessages() {
    this.renderer.listen('window', 'message', (event: MessageEvent) => {
      if (event.origin !== 'http://localhost:3000') {
        // Cambia por la URL del host Vue para mayor seguridad
        return;
      }

      const { action, route } = event.data;
      console.log(action, route)
      if (action === 'navigate') {
        this.router.navigate([route]);
      }
    });
  }
}
