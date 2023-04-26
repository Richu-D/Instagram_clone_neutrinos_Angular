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
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-navbar',
  templateUrl: './navbar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class navbarComponent {
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
      this.sd_Kf6suvMqYzeNtHoH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Kf6suvMqYzeNtHoH(bh) {
    try {
      bh = this.sd_vUQkRKSeGyoPkqw2(bh);
      //appendnew_next_sd_Kf6suvMqYzeNtHoH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Kf6suvMqYzeNtHoH');
    }
  }

  goto(path: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { path: path };
      bh.local = {};

      bh = this.sd_Dyu5Gh2ukt1z1vMO(bh);
      //appendnew_next_goto
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BnQsTZHCOc8emsIr');
    }
  }

  //appendnew_flow_navbarComponent_start

  sd_vUQkRKSeGyoPkqw2(bh) {
    try {
      const page = this.page;
      bh.local.navItems = [
        {
          name: 'Home',
          class: 'fa-solid fa-house',
          redirect: '/home',
        },
        {
          name: 'Search',
          class: 'fa-solid fa-magnifying-glass hide',
          redirect: '/search',
        },
        {
          name: 'Explore',
          class: 'fa-solid fa-compass',
          redirect: '/explore',
        },
        {
          name: 'Reels',
          class: 'fa-solid fa-video',
          redirect: '/reels',
        },
        {
          name: 'Messages',
          class: 'fa-brands fa-facebook-messenger',
          redirect: '/messages',
        },
        {
          name: 'Notification',
          class: 'fa-heart fa-regular hide',
          redirect: '/notification',
        },
        {
          name: 'Create',
          class: 'fa-regular fa-square-plus',
          redirect: '/create',
        },
      ];

      bh = this.sd_ECslsIdgBu5LtNMc(bh);
      //appendnew_next_sd_vUQkRKSeGyoPkqw2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vUQkRKSeGyoPkqw2');
    }
  }

  sd_ECslsIdgBu5LtNMc(bh) {
    try {
      this.page.navItems = bh.local.navItems;

      //appendnew_next_sd_ECslsIdgBu5LtNMc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ECslsIdgBu5LtNMc');
    }
  }

  async sd_Dyu5Gh2ukt1z1vMO(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(bh.input.path);
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_Dyu5Gh2ukt1z1vMO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Dyu5Gh2ukt1z1vMO');
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
  //appendnew_flow_navbarComponent_Catch
}
