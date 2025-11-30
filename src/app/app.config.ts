import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideRouter(routes),
  provideHttpClient()
=======
  providers: [
    provideRouter(routes),
    provideHttpClient()
>>>>>>> 0602adbd42673611ab637e1fd2bdcdd5ef31157c
  ]
};
