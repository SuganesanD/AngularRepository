import { Component } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html', 
  styleUrl: './home.component.css'
})
export class HomeComponent {
  uploadedFiles: any[] = [];

  constructor(private fileService: FileService) {}

  // Handle file selection and store the file in memory
  onFileSelected(event: any): void {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = () => {
        // Store file data in the component's memory
        const fileData = {
          name: file.name,
          type: file.type,
          data: reader.result
        };

        // Add to the array of uploaded files (temporary storage)
        this.uploadedFiles.push(fileData);

        // Optionally store the file in a service for cross-component access
        this.fileService.storeFile(fileData);
      };

      // Read the file based on its type
      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);  // For images
      } else if (file.type === 'application/pdf') {
        reader.readAsDataURL(file);  // For PDFs
      } else if (file.type === 'text/plain') {
        reader.readAsText(file);  // For plain text files
      }
    }
  }

  // Optionally retrieve stored files from the service
  get uploadedFileDetails() {
    return this.uploadedFiles.map(file => ({
      name: file.name,
      type: file.type
    }));
  }

}
