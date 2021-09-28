import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
  Swiper,
} from 'swiper/core';
SwiperCore.use([Autoplay, Pagination]);
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { LeadGenerationComponent } from '../lead-generation/lead-generation.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-current-account',
  templateUrl: './current-account.component.html',
  styleUrls: ['./current-account.component.scss'],
})
export class CurrentAccountComponent implements OnInit {
  public categorySwiperConfig: SwiperConfigInterface = {
    // direction: 'horizontal',
    slidesPerView: 1,
    allowTouchMove: true,
    // mousewheel: true,
    // scrollbar: false,
    // watchSlidesProgress: true,
    keyboard: true,
    // centeredSlides: false,
    loop: false,
    // roundLengths: true,
    // slidesOffsetAfter: 0,
    spaceBetween: 10,
    speed: 1000,
    // navigation: true,
    pagination: true,
  };
  imageUrl: any = [];
  categories: any = ['sadsda', 'rrr', 'hhh'];

  constructor() {}

  ngOnInit(): void {}
}
