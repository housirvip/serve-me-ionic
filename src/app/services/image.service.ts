import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {takeUntil} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})




export class ImageService {
  private qualityImg: number;
  constructor(private camera: Camera) {
    this.qualityImg = 50 ;
  }

  async getImageFromCamera() {
    const options: CameraOptions = {
      quality: this.qualityImg,
      sourceType : this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: this.camera.Direction.FRONT,
      targetWidth: 720,
      allowEdit: true,
      correctOrientation: true
    };
    return await this.camera.getPicture(options);
  }

  async getImageFromLibrary() {
    const options: CameraOptions = {
      quality: this.qualityImg,
      sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    return await this.camera.getPicture(options);
  }
}
