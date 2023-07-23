import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorModule, CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'ss-signals',
  standalone: true,
  imports: [CommonModule, CodeEditorModule],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.less'],
})
export class SignalsComponent {
}
