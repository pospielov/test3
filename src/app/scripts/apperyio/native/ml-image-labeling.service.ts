import { Injectable } from '@angular/core';
import {executeCordovaPlugin, getPluginObject, toObservable} from './nativeUtils';
import { UtilsCommon } from '../utils/common';
import { from, Observable, Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MlImageLabelingService {

  public static readonly PLUGIN_NAME = "ApperyioMLCordovaPlugin.ImageLabelRecognizer";
  private $stop = new Subject();
  private realTimeInProgress = false;

  constructor() { }

  recognizeImageLabel(imageUrlOrContent: string, options?: any): Promise<any> {
    return UtilsCommon.toPromise(getPluginObject(MlImageLabelingService.PLUGIN_NAME, true).recognizeImageLabel, {
      beginParameters: [imageUrlOrContent],
      endParameters: [options]
    });
  }

  startRealTimeDetection(options?: any): Observable<any> {
    return from(this.stopRealTimeDetection()).pipe(switchMap(()=>{
      this.realTimeInProgress = true;
      return toObservable(getPluginObject(MlImageLabelingService.PLUGIN_NAME, true).startRealTimeDetection, {
        endParameters: [options]
      }).pipe(filter(res => {
        if(res === "OK"){
          this.stopRealTimeDetection();
          return false;
        }
        return true;
      }), takeUntil(this.$stop));
    }));
  }

  stopRealTimeDetection(): Promise<any> {
    this.$stop.next();
    if(this.realTimeInProgress) {
        return executeCordovaPlugin(MlImageLabelingService.PLUGIN_NAME, "stopRealTimeDetection", true, false);
    }
    return Promise.resolve();
  }

}