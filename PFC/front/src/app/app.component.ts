import { Component, OnInit } from '@angular/core';
import Cropper from 'cropperjs';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Front';
  image;
  cropper;
  canvasContainer;

  imgCropped;

  ngOnInit() {
    this.image = document.getElementById('image');
    this.canvasContainer = document.getElementById('canvasContainer');
    this.cropper = new Cropper(this.image, { });
  }

  crop() {
    const boxCropPosition = this.cropper.getData();
    this.imgCropped = this.cropper.getCroppedCanvas();
    this.canvasContainer.innerHTML = '';
    this.canvasContainer.appendChild(this.imgCropped);
    this.transform();
  }

  transform() {
    (async () => {
      const worker = Tesseract.createWorker();
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(this.imgCropped);
      this.setValueToinput(text.trim());
    })();
  }

  setValueToinput(value) {
    const input = document.getElementById('test');
    input.setAttribute('value', value);
  }

}
