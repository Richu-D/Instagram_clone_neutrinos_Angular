/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Footer',
  templateUrl: './Footer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class FooterComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_x87IRJ1J5ZIPQ6y0(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, { languagesList: undefined });

    //append_listeners
  }

  sd_x87IRJ1J5ZIPQ6y0(bh) {
    try {
      bh = this.sd_ex3q217TKJb9er56(bh);
      //appendnew_next_sd_x87IRJ1J5ZIPQ6y0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x87IRJ1J5ZIPQ6y0');
    }
  }

  changeLanguage(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.sd_5IPZNn3WWIQWQem8(bh);
      //appendnew_next_changeLanguage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0ZAsSauvZvxt4W3v');
    }
  }

  //appendnew_flow_FooterComponent_start

  sd_ex3q217TKJb9er56(bh) {
    try {
      const page = this.page;
      bh.local.footerItems = [
        {
          name: 'About',
        },
        {
          name: 'Help',
        },
        {
          name: 'Press',
        },
        {
          name: 'API',
        },
        {
          name: 'Jobs',
        },
        {
          name: 'Privacy',
        },
        {
          name: 'Terms',
        },
        {
          name: 'Locations',
        },
      ];

      bh = this.sd_Au80SmALOgVjT4w2(bh);
      //appendnew_next_sd_ex3q217TKJb9er56
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ex3q217TKJb9er56');
    }
  }

  sd_Au80SmALOgVjT4w2(bh) {
    try {
      this.page.footerItems = bh.local.footerItems;

      bh = this.sd_qp2Df3RuhmcXi3Wi(bh);
      //appendnew_next_sd_Au80SmALOgVjT4w2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Au80SmALOgVjT4w2');
    }
  }

  sd_qp2Df3RuhmcXi3Wi(bh) {
    try {
      bh.local.preferedLanguage = JSON.parse(
        localStorage.getItem('preferedLanguage')
      );

      bh = this.sd_2ubq3ILpR5NZqpuN(bh);
      //appendnew_next_sd_qp2Df3RuhmcXi3Wi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qp2Df3RuhmcXi3Wi');
    }
  }

  sd_2ubq3ILpR5NZqpuN(bh) {
    try {
      const page = this.page;
      page.languagesList = Object.entries(page.locales.languages).map(
        ([key, value]) => {
          return { value: key, viewValue: value };
        }
      );

      page.locales.language = bh.local.preferedLanguage || 'en';

      //appendnew_next_sd_2ubq3ILpR5NZqpuN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2ubq3ILpR5NZqpuN');
    }
  }

  sd_5IPZNn3WWIQWQem8(bh) {
    try {
      const page = this.page;
      page.locales.language = bh.input.event.value;

      bh = this.sd_E8xnmzcuN1vWXBt4(bh);
      //appendnew_next_sd_5IPZNn3WWIQWQem8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5IPZNn3WWIQWQem8');
    }
  }

  sd_E8xnmzcuN1vWXBt4(bh) {
    try {
      localStorage.setItem(
        'preferedLanguage',
        JSON.stringify(bh.input.event.value)
      );

      //appendnew_next_sd_E8xnmzcuN1vWXBt4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E8xnmzcuN1vWXBt4');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_FooterComponent_Catch
}
