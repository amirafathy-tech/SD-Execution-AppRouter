
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgHttpLoaderModule } from 'ng-http-loader';


import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { StepsModule } from 'primeng/steps';
import { ChipModule } from 'primeng/chip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { AnimateModule } from 'primeng/animate';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { TreeTableModule } from 'primeng/treetable';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { DragDropModule } from 'primeng/dragdrop';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ExecutionOrderComponent } from './execution-order/execution-order.component';
import { SearchPipe } from './pipes/search.pipe';
import { TruncateWordsPipe } from './pipes/truncate-words.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { CloudDataComponent } from './cloud-data/cloud-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    ExecutionOrderComponent,
    SearchPipe,
    TruncateWordsPipe,
    HomePageComponent,
    CloudDataComponent,

  ],
  imports: [
    FundamentalNgxCoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AuthModule,

    ButtonModule,
    TableModule,
    DropdownModule,
    DialogModule,
    ToolbarModule,
    InputTextareaModule,
    MessagesModule,
    ToastModule,
    StepsModule,
    AnimateModule,
    CardModule,
    ChipModule,
    ConfirmDialogModule,
    PaginatorModule,
    MultiSelectModule,
    CheckboxModule,
    FieldsetModule,
    TreeTableModule,
    TooltipModule,
    FileUploadModule,
    DragDropModule,

  
    NgHttpLoaderModule.forRoot(),
  ],
 providers: [
  provideClientHydration(),
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
