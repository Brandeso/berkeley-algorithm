import { Component } from "@angular/core";
import { BerkeleyAlgorithmService } from "src/services/berkeley.service";
import { CristianAlgorithmService } from "src/services/cristian.service";

@Component({
  selector: 'app-clocks-component',
  templateUrl: './clocks.component.html',
  styleUrls: ['../styles.scss']
})

export class ClocksScreenComponent {
  constructor(
    private cristianSrv: CristianAlgorithmService,
    private berkeleySrv: BerkeleyAlgorithmService
  ) {}
}