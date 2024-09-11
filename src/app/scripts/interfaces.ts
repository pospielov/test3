import _ from "lodash";
declare global {
    interface Window {
        [key: string]: any;
    }
    interface Navigator {
        camera: any
        notification: any
        device: any
        splashscreen: any
    }
    var device, cordova, Media, StatusBar, Camera, CameraPopoverOptions, CameraPopoverHandle;
    var _: _;
}
// Appery.io models
export interface $aio_empty_object {};
//
interface __test_test_read_serviceResponse_sub_001 {}
export interface test_test_read_serviceResponse {
    "_createdAt": string,
    "_updatedAt": string,
    "test3": string,
    "acl": __test_test_read_serviceResponse_sub_001,
    "test2": string,
    "test": string,
    "_id": string
}