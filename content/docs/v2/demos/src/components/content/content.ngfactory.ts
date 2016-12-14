/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './content';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../config/config';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '../app/app';
import * as import11 from '../../util/keyboard';
import * as import12 from '@angular/core/src/zone/ng_zone';
import * as import13 from '../../navigation/view-controller';
import * as import14 from '../tabs/tabs';
import * as import15 from '../../util/dom-controller';
export class Wrapper_Content {
  /*private*/ _eventHandler:Function;
  context:import0.Content;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  subscription4:any;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any,p5:any,p6:any,p7:any,p8:any) {
    this._changed = false;
    this.context = new import0.Content(p0,p1,p2,p3,p4,p5,p6,p7,p8);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
    (this.subscription3 && this.subscription3.unsubscribe());
    (this.subscription4 && this.subscription4.unsubscribe());
  }
  check_fullscreen(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.fullscreen = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_1:any = this.context.statusbarPadding;
    if (import3.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      view.renderer.setElementClass(el,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean,emit4:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.ionScrollStart.subscribe(_eventHandler.bind(view,'ionScrollStart'))); }
    if (emit1) { (this.subscription1 = this.context.ionScroll.subscribe(_eventHandler.bind(view,'ionScroll'))); }
    if (emit2) { (this.subscription2 = this.context.ionScrollEnd.subscribe(_eventHandler.bind(view,'ionScrollEnd'))); }
    if (emit3) { (this.subscription3 = this.context.readReady.subscribe(_eventHandler.bind(view,'readReady'))); }
    if (emit4) { (this.subscription4 = this.context.writeReady.subscribe(_eventHandler.bind(view,'writeReady'))); }
  }
}
var renderType_Content_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_Content_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.Content>;
  _Content_0_3:Wrapper_Content;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Content_Host0,renderType_Content_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ion-content',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Content0(this.viewUtils,this,0,this._el_0);
    this._Content_0_3 = new Wrapper_Content(this.injectorGet(import8.Config,this.parentIndex),new import9.ElementRef(this._el_0),this.renderer,this.injectorGet(import10.App,this.parentIndex),this.injectorGet(import11.Keyboard,this.parentIndex),this.injectorGet(import12.NgZone,this.parentIndex),this.injectorGet(import13.ViewController,this.parentIndex,(null as any)),this.injectorGet(import14.Tabs,this.parentIndex,(null as any)),this.injectorGet(import15.DomController,this.parentIndex));
    this.compView_0.create(this._Content_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._Content_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Content) && (0 === requestNodeIndex))) { return this._Content_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Content_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._Content_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._Content_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
    if (((nodeIndex == 0) && (ngContentIndex == 1))) {  }
    if (((nodeIndex == 0) && (ngContentIndex == 2))) {  }
  }
}
export const ContentNgFactory:import7.ComponentFactory<import0.Content> = new import7.ComponentFactory<import0.Content>('ion-content',View_Content_Host0,import0.Content);
const styles_Content:any[] = ([] as any[]);
var renderType_Content:import4.RenderComponentType = import3.createRenderComponentType('',3,import5.ViewEncapsulation.None,styles_Content,{});
export class View_Content0 extends import2.AppView<import0.Content> {
  _el_0:any;
  _el_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Content0,renderType_Content,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','fixed-content'),(null as any));
    this.projectNodes(this._el_0,0);
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','scroll-content'),(null as any));
    this.projectNodes(this._el_1,1);
    this.projectNodes(parentRenderNode,2);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1
    ]
    ),(null as any));
    return (null as any);
  }
}