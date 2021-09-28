import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrentAccountComponent } from './current-account/current-account.component';
import { SwiperModule } from 'swiper/angular';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import Swiper, { Navigation, Pagination } from 'swiper';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LeadGenerationComponent } from './lead-generation/lead-generation.component';
import { PageHeaderComponent } from './page-header/page-header.component';
Swiper.use([Navigation, Pagination]);
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};
@NgModule({
  declarations: [
    AppComponent,
    CurrentAccountComponent,
    NavbarComponent,
    FooterComponent,
    LeadGenerationComponent,
    PageHeaderComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, SwiperModule],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
