import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorModule, CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'ss-settings',
  standalone: true,
  imports: [CommonModule, CodeEditorModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent {
  theme = 'vs-dark';

  codeModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{}'
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

  onCodeChanged(value: string) {
    console.log('CODE', value);
  }
}
