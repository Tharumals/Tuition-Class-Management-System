import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import{ FileService} from '../../../../services/file.service'
@Component({
  selector: 'app-teacher-pdf-view',
  templateUrl: './teacher-pdf-view.component.html',
  styleUrls: ['./teacher-pdf-view.component.css']
})
export class TeacherPdfViewComponent implements OnInit {
  doc: any;
  pdfSrc: string;
  pageUrl: any;

  constructor(
    private fileUpload:FileUploader,
   private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private fileService: FileService

  ) { }


  ngOnInit() {

    /*let title = this.route.snapshot.paramMap.get('title');
    console.log("dsaggyg", title);
    this.fileService.getDoc(title).subscribe((data: any) => {
      if (data.file != undefined) {
        this.doc = data;
        //  this.router.navigate(['/viewdoc',title]);
        this.pdfSrc = 'http://localhost:3000/' + data.file;
        this.pageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
        console.log("djsakj", this.pageUrl.changingThisBreaksApplicationSecurity);
        this.pageUrl = this.pageUrl.changingThisBreaksApplicationSecurity;
        console.log("doc details", this.doc);
      }

    });

*/

  }

}
