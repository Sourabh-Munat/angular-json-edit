import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { NgJsonEditorModule } from "ang-jsoneditor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatProgressBarModule,
  MatCardModule,
  MatButtonModule,
  MatTooltipModule,
  MatChipsModule,
  MatIconModule,
  MatAutocompleteModule
} from "@angular/material";
import { AppComponent } from "./app.component";
import { EditJsonComponent } from "./edit-json.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgJsonEditorModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  declarations: [AppComponent, EditJsonComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}