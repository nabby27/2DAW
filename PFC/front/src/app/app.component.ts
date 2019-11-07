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
  pdfSrc = "../assets/example.pdf";

  imgCropped;

  ngOnInit() {
    this.image = document.getElementById('image');
    this.canvasContainer = document.getElementById('canvasContainer');
    this.cropper = new Cropper(this.image, { });

    // const img = new Image();
    // img.onload = () => {
    //   const canvasImage = document.getElementById('canvasImage') as HTMLCanvasElement;
    //   const ctx = canvasImage.getContext('2d');
    //   ctx.drawImage(img, 10, 10);
    // };
    // img.src = '../assets/ayuntamiento-zaragoza-logo-vector.jpg';
    // img.src = '../assets/example.pdf';

    // ctx.drawImage(this.image, 10, 10);
  }

  crop() {
    const boxCropPosition = this.cropper.getData();
    this.imgCropped = this.cropper.getCroppedCanvas();
    console.log(boxCropPosition);
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
