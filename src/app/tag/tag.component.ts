import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { combineLatest, map, Observable, of, startWith } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-tag",
  imports: [],
  styleUrl: "./tag.component.scss",
  templateUrl: "./tag.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  tags = input.required<{ name: string; color: string }[]>();
}
