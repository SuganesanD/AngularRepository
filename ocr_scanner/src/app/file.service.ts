import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }
  private fileData: any[] = [];

  // Store the file data temporarily
  storeFile(file: any) {
    this.fileData.push(file);
  }

  // Retrieve the stored file data
  getFiles() {
    return this.fileData;
  }

  // Clear stored file data
  clearFiles() {
    this.fileData = [];
  }
}
