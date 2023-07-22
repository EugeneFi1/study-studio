import { Component } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'ss-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.less'],
})
export class BinarySearchComponent {
  theme = 'vs-dark';

  codeModel: CodeModel = {
    language: 'typescript',
    uri: 'main.json',
    dependencies: ['@types/node', '@ngstack/translate', '@ngstack/code-editor'],
    value: [
      `import { TranslateModule, TranslateService } from '@ngstack/translate';`,
      `import { CodeEditorModule } from '@ngstack/code-editor';`,
      `import * as fs from 'fs';`,
      '',
      `const test = {
         'test': 1 
      }`,
      `export class MyClass {`,
      `  constructor(translate: TranslateService) {`,
      '',
      '  }',
      `}`,
    ].join('\n'),
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  onCodeChanged(value: unknown) {
    console.log('CODE', value);
  }
}
