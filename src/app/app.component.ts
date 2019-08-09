import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

//source: https://appdividend.com/2019/06/07/angular-8-file-upload-tutorial-with-example-angular-image-upload/
const URL = 'http://localhost:4000/api/upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  ngOnInit() {

  }

  uploadAllFiles() {    
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');      
    }
  }
}