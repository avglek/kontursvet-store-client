import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'catalog', component: CatalogPageComponent },
      { path: 'services', component: ServicesPageComponent },
      { path: 'portfolio', component: PortfolioPageComponent },
      { path: 'payment', component: PaymentPageComponent },
      { path: 'contact', component: ContactPageComponent },
    ],
  },
];
