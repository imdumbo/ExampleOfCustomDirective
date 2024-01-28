import {
  Directive,
  Input,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[CdIF]',
})
export class CdIFDirective {
  @Input() CdIF: boolean = true;

  constructor(
    private tempRef: TemplateRef<any>,
    private contRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.main();
  }

  private main() {
    if (this.CdIF) {
      // console.log(this.CdIF);
      this.contRef.createEmbeddedView(this.tempRef);
    } else {
      this.contRef.clear();
    }
  }
}
