import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*===== Confiable para hacer llamadas a Apis (cliet interno para hacer peticiones)====*/
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormClickComponent } from './click/form-click/form-click.component';
import { ModalFormComponent } from './click/modal-form/modal-form.component';
import { EndFormComponent } from './click/end-form/end-form.component';
import { ModalFormEndComponent } from './click/modal-form-end/modal-form-end.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormClickComponent,
    ModalFormComponent,
    EndFormComponent,
    ModalFormEndComponent
    
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  entryComponents: [ModalFormComponent, ModalFormEndComponent] 
})
export class AppModule { }
