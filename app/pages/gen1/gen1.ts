import {Component} from '@angular/core';
import * as yaml from 'js-yaml';
import {File} from 'ionic-native';
import {NavController} from 'ionic-angular';
import {Service} from '../../service'

@Component({
  templateUrl: 'build/pages/gen1/gen1.html'
})
export class Gen1Page {  
  
  private appRootFolder:string;
  
  constructor(private navCtrl: NavController, private service:Service) {
  
	service.getData();
	
	/* TODO: testar quando for com apk
	File.readAsText('./pokemon.yaml')
	.then(data => console.log('yay'))
	.catch(err => console.log('boooh'));
	*/
  }
  
    /*
  * General purpose, even if for now only Android and Iphone are supported.
  	this.appRootFolder = this.getRootFolder(device.platform);
	File.listDir(this.appRootFolder, "");
  private getRootFolder(deviceType:string):string {
      let returnValue:string;
      let deviceTypeStr:string = deviceType;

      if (deviceTypeStr.startsWith("BlackBerry")) deviceTypeStr = "BlackBerry";

     switch (deviceTypeStr){
           case "iOS":
               returnValue = cordova.file.documentsDirectory;
               break;
           case "Mac OS X":
               returnValue = cordova.file.applicationStorageDirectory;
               break;
          default:
               returnValue = cordova.file.dataDirectory;
      }

      return returnValue;
  }
  */
}
