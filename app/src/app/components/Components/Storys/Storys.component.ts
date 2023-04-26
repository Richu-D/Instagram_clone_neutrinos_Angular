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
  selector: 'bh-Storys',
  templateUrl: './Storys.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class StorysComponent {
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
      this.sd_o7KuT6i0u2Bkpi9X(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_o7KuT6i0u2Bkpi9X(bh) {
    try {
      bh = this.sd_MlnmqHHvGaAw6Kw3(bh);
      //appendnew_next_sd_o7KuT6i0u2Bkpi9X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o7KuT6i0u2Bkpi9X');
    }
  }

  //appendnew_flow_StorysComponent_start

  sd_MlnmqHHvGaAw6Kw3(bh) {
    try {
      const page = this.page;
      bh.local.storys = [
        {
          content: '/Web/img/person1.jpg',
          name: 'richu',
        },
        {
          content: '/Web/img/person1.jpg',
          name: 'richu',
        },
        {
          content: '/Web/img/person1.jpg',
          name: 'richu',
        },
        {
          content: '/Web/img/person1.jpg',
          name: 'richu',
        },
      ];

      bh = this.sd_AyLj7E5nMQfAmtl7(bh);
      //appendnew_next_sd_MlnmqHHvGaAw6Kw3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MlnmqHHvGaAw6Kw3');
    }
  }

  sd_AyLj7E5nMQfAmtl7(bh) {
    try {
      this.page.storys = bh.local.storys;

      //appendnew_next_sd_AyLj7E5nMQfAmtl7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AyLj7E5nMQfAmtl7');
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
  //appendnew_flow_StorysComponent_Catch
}
