import { Component, Inject, InjectionToken } from '@angular/core';
export const LOCAL_STORAGE = new InjectionToken<Storage>('localStorage');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: LOCAL_STORAGE, useValue: localStorage }]

})
export class AppComponent {
  title = 'portafolio-web';
  darkModeEnabled?:boolean;
  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {
    this.darkModeEnabled = JSON.parse(this.localStorage.getItem('darkModeEnabled') ?? 'false') ;
    if(this.darkModeEnabled == true){
      document.body.classList.toggle('dark-mode')
    }
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-mode')
    this.darkModeEnabled = !this.darkModeEnabled;
    this.localStorage.setItem('darkModeEnabled', JSON.stringify(this.darkModeEnabled));
  }
}
