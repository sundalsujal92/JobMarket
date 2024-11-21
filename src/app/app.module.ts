import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service'; // Correct import for AuthService

// Firebase imports
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthGuard} from './auth.guard'; // Import the AuthGuard
// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';

import { HireComponent } from './hire/hire.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// Services
import { JobService } from './job.service';

// Environment
import { environment } from 'environment/environment';
import { ForgotPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    JobsComponent,
    HireComponent,
    FreelanceComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // Firebase Modules
    AngularFireModule.initializeApp(environment.firebaseConfig),  // Firebase initialization
    AngularFireDatabaseModule,  // Firebase Database module
    AngularFireAuthModule,  // Firebase Authentication module

    // Angular Material modules
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [JobService, AuthService],  // No need to import Injectable here
  bootstrap: [AppComponent]
})
export class AppModule { }
