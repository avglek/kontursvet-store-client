import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CategoryListPageComponent } from './pages/category-list-page/category-list-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AdminPageComponent } from './admin/pages/admin-page/admin-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'catalog',
        component: CatalogPageComponent,
        children: [
          { path: '', redirectTo: 'categories', pathMatch: 'full' },
          { path: 'categories', component: CategoryListPageComponent },
          { path: 'category/:id', component: CategoryPageComponent },
          { path: 'product/:id', component: ProductPageComponent },
        ],
      },
      { path: 'services', component: ServicesPageComponent },
      { path: 'portfolio', component: PortfolioPageComponent },
      { path: 'payment', component: PaymentPageComponent },
      { path: 'contact', component: ContactPageComponent },
    ],
  },
  { path: 'admin', component: AdminPageComponent },
];
