import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  styleUrl: './tag.component.scss',
  templateUrl: './tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  tags = input.required<{ name: string; color: string }[]>();
}
