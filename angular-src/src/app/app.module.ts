import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../app/directives/auth-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FileUploadModule} from 'ng2-file-upload';
import{ PdfViewerModule} from 'ng2-pdf-viewer'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{JwtModule} from '@auth0/angular-jwt'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatProgressSpinnerModule, MatSortModule, MatIconModule,MatIcon, MatButtonModule, MatInputModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatNativeDateModule,MatNavList, MatListModule } from '@angular/material';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import {ErrorStateMatcher} from '@angular/material'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { FlxUiDatatableModule, FlxUiDataTable} from 'flx-ui-datatable'
import {ValidateService} from './services/validate.service';
import {AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { UserService } from './services/user.service';
import { FileService} from './services/file.service';


import { StudentIntroComponent } from './component/student/student-intro/student-intro.component';
import { StudentMessagesComponent } from './component/student/student-messages/student-messages.component';
import { StudentEventsComponent } from './component/student/student-events/student-events.component';
import { StudentDownloadsComponent } from './component/student/student-downloads/student-downloads.component';
import { StudentPaymentsComponent } from './component/student/student-payments/student-payments.component';
import { StudentContactComponent } from './component/student/student-contact/student-contact.component';
import { StudentNavbarComponent } from './component/student/student-navbar/student-navbar.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { AppRoutingModule } from './/app-routing.module';


import { AuthGuard } from './guards/auth.guard';
import { AlertComponent } from './alert/alert.component';
import {ErrorInterceptor } from './helpers/error.interceptor';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/home/about/about.component';
import { ContactComponent } from './component/home/contact/contact.component';
import { GalleryComponent } from './component/home/gallery/gallery.component';
import { IntroComponent } from './component/home/intro/intro.component';
import { TeachersComponent } from './component/home/teachers/teachers.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/home/footer/footer.component';
import { NavComponent } from './component/home/nav/nav.component';
import { LoginComponent } from './component/login/login.component';
import { StudentComponent } from './component/student/student.component';
import { PaymentService } from './services/payment.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EventRegisterService } from './services/eventRegister/event-register.service';
import { MessageService } from './services/message/message.service';
import { AdminComponent } from './component/admin/admin.component';
import { SidebarComponent } from './component/admin/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { StudentRegisterComponent } from './component/admin/student-register/student-register.component';
import { TeacherRegisterComponent } from './component/admin/teacher-register/teacher-register.component';
import { StudentTableComponent } from './component/admin/student-table/student-table.component';
import { TeacherTableComponent } from './component/admin/teacher-table/teacher-table.component';
import { InboxComponent } from './component/admin/inbox/inbox.component';
import { InboxDetailComponent } from './component/admin/inbox-detail/inbox-detail.component';
import { InboxService } from './services/inbox/inbox.service';
import { AdminOutboxComponent } from './component/admin/admin-outbox/admin-outbox.component';
import { AdminOutboxService } from './services/adminOutbox/admin-outbox.service';
import { PaymentPayComponent } from './component/admin/payment/payment-pay/payment-pay.component';
import { PaymentTableComponent } from './component/admin/payment/payment-table/payment-table.component';
import { StudentDetailsComponent } from './component/admin/student/student-details/student-details.component';
import { TeacherDetailsComponent } from './component/admin/teacher/teacher-details/teacher-details.component';
import { StudentService } from './services/student/student.service';
import { TeacherService } from './services/teacher/teacher.service';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { TeacherInboxComponent } from './component/teacher/teacher-inbox/teacher-inbox.component';
import { TeacherOutboxComponent } from './component/teacher/teacher-outbox/teacher-outbox.component';
import { TeacherUploadComponent } from './component/teacher/teacher-upload/teacher-upload.component';
import { TeacherRequestComponent } from './component/teacher/teacher-request/teacher-request.component';
import { TeacherNavComponent } from './component/teacher/teacher-nav/teacher-nav.component';
import { TeacherRequestTableComponent } from './component/teacher/tables/teacher-request-table/teacher-request-table.component';
import { TeacherSendStudentTableComponent } from './component/teacher/tables/teacher-send-student-table/teacher-send-student-table.component';
import { TeacherSendAdminTableComponent } from './component/teacher/tables/teacher-send-admin-table/teacher-send-admin-table.component';
import { TeacherRequestDetailsComponent } from './component/teacher/table-details/teacher-request-details/teacher-request-details.component';
import { TeacherSendStudentDetailsComponent } from './component/teacher/table-details/teacher-send-student-details/teacher-send-student-details.component';
import { AdminRequestComponent } from './component/admin/admin-request/admin-request.component';
import { AdminRequestDetailsComponent } from './component/admin/admin-request/admin-request-details/admin-request-details.component';
import { StudentMesssageDetailsComponent } from './component/student/student-messages/student-messsage-details/student-messsage-details.component';
import { AdminNewEventComponent } from './component/admin/event/admin-new-event/admin-new-event.component';
import { AdminEventTableComponent } from './component/admin/event/admin-event-table/admin-event-table.component';
import { AdminEventDetailsComponent } from './component/admin/event/admin-event-details/admin-event-details.component';
import { AdminEventRegisterComponent } from './component/admin/event/admin-event-register/admin-event-register.component';
import { AdminEventRegisterDetailsComponent } from './component/admin/event/admin-event-register-details/admin-event-register-details.component';
import { StudentPaymentsDetailsComponent } from './component/student/student-payments/student-payments-details/student-payments-details.component';
import { TeacherIntroComponent } from './component/teacher/teacher-intro/teacher-intro.component';
import { TeacherResponseComponent } from './component/teacher/teacher-response/teacher-response.component';
import { TeacherResponseDetailsComponent } from './component/teacher/teacher-response/teacher-response-details/teacher-response-details.component';
import { RequestService } from './services/request/request.service';
import { PaymentDetailsComponent } from './component/admin/payment/payment-details/payment-details.component';
import { TeacherLoginComponent } from './component/login/teacher-login/teacher-login.component';
import { AccountComponent } from './component/admin/account/account.component';
import { CreateStudentComponent } from './component/admin/account/create-student/create-student.component';
import { CreateTeacherComponent } from './component/admin/account/create-teacher/create-teacher.component';
import { TeacherPdfViewComponent } from './component/teacher/teacher-upload/teacher-pdf-view/teacher-pdf-view.component';
import { UploadListComponent } from './component/teacher/teacher-upload/upload-list/upload-list.component';
import { AccountIssuesComponent } from './component/admin/account-issues/account-issues.component';





const appRoutes: Routes = [
  
  {
    path: '', component: IntroComponent,
  },  
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'intro', component: IntroComponent},
      { path: 'teachers', component: TeachersComponent },
  
      
      { path: 'gallery', component: GalleryComponent },

      

  { path: 'login', component: LoginComponent },
  { path: 'login2', component: TeacherLoginComponent },

  { path: 'admin', component: AdminComponent ,canActivate: [AuthGuard]},
  { path: 'inform', component: RegisterComponent },
  { path: 'student', component: StudentIntroComponent},

  { path: 'student-intro', component: StudentIntroComponent },
  { path: 'student-downloads', component: StudentDownloadsComponent },
  { path: 'student-events', component: StudentEventsComponent },
  { path: 'student-messages', component: StudentMessagesComponent },
  { path: 'student-messages-detail/:id', component: StudentMesssageDetailsComponent },
  { path: 'student-payments', component: StudentPaymentsComponent },
  { path: 'student-intro', component: StudentIntroComponent },
  { path: 'student-contact', component: StudentContactComponent },
  { path: 'student-payments-details/:id', component: StudentPaymentsDetailsComponent },

  { path: 'sidebar', component:SidebarComponent },
  { path: 'student-register', component:StudentRegisterComponent },
  { path: 'teacher-register', component: TeacherRegisterComponent },
  { path: 'student-table', component: StudentTableComponent },
  { path: 'teacher-table', component: TeacherTableComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'inbox-detail/:id', component: InboxDetailComponent },
  { path: 'admin-outbox', component: AdminOutboxComponent },
  { path: 'payment-table', component: PaymentTableComponent },
  { path: 'student-details/:id', component: StudentDetailsComponent },
  { path: 'teacher-details/:id', component: TeacherDetailsComponent },
  { path: 'request', component: AdminRequestComponent },
  { path: 'payment-pay', component: PaymentPayComponent },
  { path: 'payment-details/:id', component: PaymentDetailsComponent },
  { path: 'request-details/:id', component: AdminRequestDetailsComponent },
  { path: 'admin-new-event', component: AdminNewEventComponent },
  { path: 'admin-event-table', component: AdminEventTableComponent },
  { path: 'admin-event-register', component: AdminEventRegisterComponent },
  { path: 'admin-event-register-details/:id', component: AdminEventRegisterDetailsComponent },
  { path: 'admin-event-details/:id', component: AdminEventDetailsComponent },
  { path: 'admin-account', component: AccountComponent},
  { path: 'account-issue', component: AccountIssuesComponent },
  {
    path: 'userprofile', component: UserProfileComponent, 
  },


  { path: 'teacher', component: TeacherIntroComponent, canActivate: [AuthGuard] },
  { path: 'teacher-inbox', component: TeacherInboxComponent },
  { path: 'teacher-outbox', component: TeacherOutboxComponent },
  { path: 'teacher-request', component: TeacherRequestComponent },
  { path: 'teacher-upload', component: TeacherUploadComponent },
  { path: 'teacher-request-details/:id', component: TeacherRequestDetailsComponent },
  { path: 'teacher-send-student-details/:id', component: TeacherSendStudentDetailsComponent },
  { path: 'teacher-request-table', component: TeacherRequestTableComponent },
  { path: 'teacher-send-admin-table', component: TeacherSendAdminTableComponent },
  { path: 'teacher-send-student-table', component: TeacherSendStudentTableComponent },
  { path: 'teacher-intro', component: TeacherIntroComponent },
  { path: 'teacher-response', component: TeacherResponseComponent },
  { path: 'teacher-response-details/:id', component: TeacherResponseDetailsComponent },


]

@NgModule({
  declarations: [
    AppComponent,
    StudentIntroComponent,
    StudentMessagesComponent,
    StudentEventsComponent,
    StudentDownloadsComponent,
    StudentPaymentsComponent,
    StudentContactComponent,
    StudentNavbarComponent,
    TeacherComponent,
    AlertComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    IntroComponent,
    TeachersComponent,
    NavbarComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    AdminComponent,
    StudentComponent,
    SidebarComponent,
    StudentRegisterComponent,
    TeacherRegisterComponent,
    StudentTableComponent,
    TeacherTableComponent,
    InboxComponent,
    InboxDetailComponent,
    AdminOutboxComponent,
    PaymentPayComponent,
    PaymentTableComponent,
    StudentDetailsComponent,
    TeacherDetailsComponent,
    UserProfileComponent,
    TeacherInboxComponent,
    TeacherOutboxComponent,
    TeacherUploadComponent,
    TeacherRequestComponent,
    TeacherNavComponent,
    TeacherRequestTableComponent,
    TeacherSendStudentTableComponent,
    TeacherSendAdminTableComponent,
    TeacherRequestDetailsComponent,
    TeacherSendStudentDetailsComponent,
    AdminRequestComponent,
    AdminRequestDetailsComponent,
    StudentMesssageDetailsComponent,
    AdminNewEventComponent,
    AdminEventTableComponent,
    AdminEventDetailsComponent,
    AdminEventRegisterComponent,
    AdminEventRegisterDetailsComponent,
    StudentPaymentsDetailsComponent,
    TeacherIntroComponent,
    TeacherResponseComponent,
    TeacherResponseDetailsComponent,
    PaymentDetailsComponent,
    TeacherLoginComponent,
    AccountComponent,
    CreateStudentComponent,
    CreateTeacherComponent,
    TeacherPdfViewComponent,
    FileSelectDirective,
    UploadListComponent,
    AccountIssuesComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgbModule,
    AppRoutingModule,
    JwtModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    LayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    FlxUiDatatableModule,
    PdfViewerModule,
  

  ],

  
  providers: [
    ValidateService,
    AuthService,
    AlertService,
    UserService,
    PaymentService,
    EventRegisterService,
    MessageService,
    FileService,
    AuthGuard,
    InboxService,
    FlxUiDataTable,
    AdminOutboxService,
    StudentService,
    TeacherService,
    RequestService,
    AuthInterceptor,
    
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents={
  TeachersComponent 
}