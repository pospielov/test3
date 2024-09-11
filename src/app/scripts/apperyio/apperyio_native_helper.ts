import {
    Injectable
} from '@angular/core';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    Keyboard
} from '@ionic-native/keyboard/ngx';
import {
    Network
} from '@ionic-native/network/ngx';
import {
    ThemeDetectorService
} from './native/theme-detector.service';
import {
    DocScannerService
} from './native/doc-scanner.service';
import {
    Platform
} from "@ionic/angular";
import {
    MlEntityExtractionService
} from "./native/ml-entity-extraction.service";
import {
    MlFaceDetectionService
} from "./native/ml-face-detection.service";
import {
    MlImageLabelingService
} from "./native/ml-image-labeling.service";
import {
    MlPoseDetectionService
} from "./native/ml-pose-detection.service";
import {
    MlSelfieSegmentationService
} from "./native/ml-selfie-segmentation.service";
import {
    MlSmartReplyService
} from "./native/ml-smart-reply.service";
import {
    MlTextRecognitionService
} from "./native/ml-text-recognition.service";
import {
    MlTranslatorService
} from "./native/ml-translator.service";
@Injectable()
export class ApperyioNativeHelperService {
    public audioinput;
    public sqlitePlugin;
    SAMPLE_IMAGE_BASE64 = "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAaJJREFUaEPd2ltugzAUhGHTVcD+FwZvsIuUsTiIcDG+zIHj/FKqNJXwfEr7UJTGOfeZH24cR9e2LZ5W0zRNrus6//zPf53DC8MwLN/ZD1sF4ZvfCbwj66Pv+4/1sHG72RvOfmAZc7XVQ1ANmNDGFYIsY+62fUGQRUzMpgMEWcLEbjmFIAuYlA2XEPQmJvXsIAS9gck58xaCnsTknhUFQU9gSs6IhiBNTOm1kyBIA8O4ZjIEMTGsa2VBEGMAC4GyIahkCBOBiiAoZxAbgYohKGWYBgJRIChmoBYC0SAoNFQTgagQtB+M/6efuC9Ah6A9ZvvQQKAGX+YD6G3vOUma987W+1q1pwI53DxbUr0J6H/BiP3EH/sesR0c+hkjGiRmqCaGAkkZqIUphuQM08AUQUoGsTHZEMYQJiYLwhzAulYyhImQGNdMgmggpNJrR0M0EVLJGVGQJxBS7lm3kCcRUs6ZQcgbCCn17EvImwgpZcMpxAJCit1ygFhCSDGbviAWEdLdthViGSGFNnpIDQjpauvvfKhm+0INCGmPaZYnlX/wzLl/gQMOeWDLh1EAAAAASUVORK5CYII=";
    SAMPLE_IMAGE_FILEURI = "assets/images/no-image.jpg";
    SAMPLE_SCANNER_RESULT = {
        text: 'Test data',
        format: 'QR_CODE',
        cancelled: false
    };
    SAMPLE_GEOLOCATION_RESULT = {
        coords: {
            latitude: 40.730610,
            longitude: -73.935242,
            accuracy: 16.759000778198242,
            altitude: 15,
            altitudeAccuracy: null,
            heading: null,
            speed: null
        },
        timestamp: Date.now()
    };
    constructor(
        public webView: WebView, public device: Device, public splashScreen: SplashScreen, public statusBar: StatusBar, public keyboard: Keyboard, public network: Network, public themeDetector: ThemeDetectorService, public docScanner: DocScannerService, private platform: Platform, public mlEntityExtraction: MlEntityExtractionService, public mlFaceDetection: MlFaceDetectionService, public mlImageLabeling: MlImageLabelingService, public mlPoseDetection: MlPoseDetectionService, public mlSelfieSegmentation: MlSelfieSegmentationService, public mlSmartReply: MlSmartReplyService, public mlTextRecognition: MlTextRecognitionService, public mlTranslator: MlTranslatorService
    ) {
        this.audioinput = (window as any).audioinput;
        this.platform.ready().then(() => {
            this.sqlitePlugin = (window as any).sqlitePlugin;
        });
    }
};