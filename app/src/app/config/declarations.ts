import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-FooterComponent
import { FooterComponent } from '../components/Components/Footer/Footer.component';
//CORE_REFERENCE_IMPORT-ProfileComponent
import { ProfileComponent } from '../components/Layout/Profile/Profile.component';
//CORE_REFERENCE_IMPORT-StorysComponent
import { StorysComponent } from '../components/Components/Storys/Storys.component';
//CORE_REFERENCE_IMPORT-PostComponent
import { PostComponent } from '../components/Components/Post/Post.component';
//CORE_REFERENCE_IMPORT-navbarComponent
import { navbarComponent } from '../components/Components/Navbar/navbar.component';
//CORE_REFERENCE_IMPORT-HomeComponent
import { HomeComponent } from '../components/Layout/Home/Home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-FooterComponent
  FooterComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ProfileComponent
  ProfileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-StorysComponent
  StorysComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-PostComponent
  PostComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-navbarComponent
  navbarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-HomeComponent
  HomeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
