import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AxieResultsComponent } from './shared/components/axie-results/axie-results.component';
import { AxieComponent } from './shared/components/axie/axie.component';
import { DrawerComponent } from './shared/components/drawer/drawer.component';
import { FarmComputingComponent } from './shared/components/farm-computing/farm-computing.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { Mir4ResultsComponent } from './shared/components/mir4results/mir4results.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { TeamSorterComponent } from './shared/components/team-sorter/team-sorter.component';
import { TeamsResultComponent } from './shared/components/teams-result/teams-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DrawerComponent,
    FooterComponent,
    SidebarComponent,
    FarmComputingComponent,
    Mir4ResultsComponent,
    TabsComponent,
    AxieComponent,
    AxieResultsComponent,
    TeamSorterComponent,
    TeamsResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
