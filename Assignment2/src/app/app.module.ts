import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import AppComponent,RootComponent
import { AppComponent } from './app.component';
import { RootComponent } from './my-app.component';

// include RootComponent in declarations with @NgModule
@NgModule({
  declarations: [
    AppComponent,RootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
