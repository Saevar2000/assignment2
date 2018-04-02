import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatCardModule, MatDialogModule, MatListModule, MatRippleModule, MatExpansionModule, MatFormFieldModule, MatFormFieldControl, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { MissionService } from './mission.service';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatRippleModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [MissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
