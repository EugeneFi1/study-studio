import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorComponent, CodeEditorModule, CodeModel } from '@ngstack/code-editor';
import { ConfigService } from 'src/app/services/config.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'ss-settings',
  standalone: true,
  imports: [CommonModule, CodeEditorModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less'],
})
export class SettingsComponent implements OnInit {
  public theme = 'vs-dark';

  @ViewChild(CodeEditorComponent) public codeEditor: CodeEditorComponent | undefined;

  public defaultModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{}',
  };

  public codeModel$: Observable<CodeModel> = this.configService
    .getConfig()
    .pipe(
      map(
        (data) =>
          ({
            language: 'json',
            uri: 'main.json',
            value: JSON.stringify(data),
          } as CodeModel)
      )
    );

  // https://microsoft.github.io/monaco-editor/docs.html#enums/editor.EditorOption.html#contextmenu
  public options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  constructor(private configService: ConfigService) {}

  public ngOnInit(): void {
    // this.codeModel$ = this.configService.getConfig()
    // .pipe(map(data => ({
    //   language: 'json',
    //   uri: 'main.json',
    //   value: JSON.stringify(data)
    // })))
  }

  onCodeChanged(value: string) {
    console.log('CODE', value);
  }
}
