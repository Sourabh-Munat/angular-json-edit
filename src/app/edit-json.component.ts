import { Component, Input, ViewChild } from "@angular/core";
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";
import { schema } from "./schema";

@Component({
  selector: "hello",
  template: "./edit-json.component.html",
  styleUrls: ["./app.component.css"]
})
export class EditJsonComponent {
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  options = new JsonEditorOptions();
  data = [
    {
      comment:
        "case 1 -  LIVE_AGENT when student loan is present in hypothesis",
      matchIntent: {
        session_variables: null,
        event_names: ["LIVE_AGENT"],
        task_names: null
      },
      phrasePatterns: ["student loan"],
      missingIntent: {
        session_variables: null,
        event_names: null,
        task_names: "STUDENT_LOAN_AGENT"
      }
    },
    {
      comment:
        "case 2 - simple rejection of any result when sv FORCE_FAIL:true",
      matchIntent: {
        session_variables: ["FORCE_FAIL:true"],
        event_names: null,
        task_names: null
      },
      phrasePatterns: [],
      missingIntent: {}
    }
  ];

  constructor() {
    this.options.mode = "code";
    this.options.modes = ["code", "text", "tree", "view"];
    this.options.schema = schema;
    this.options.statusBar = false;
    this.options.onChange = () => console.log(this.editor.get());
  }
}
