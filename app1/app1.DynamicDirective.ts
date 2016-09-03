import { OnChanges, SimpleChanges, ReflectiveInjector, ComponentFactory, Component, Directive, Input, 
  ComponentResolver, ComponentMetadata, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'dynamic-directive'
})


/**
 * DEPRECATED
 * Seems like Angular 2 will require all components to be declared statically in module.
 * But a new module can be created dynamically...
 */
export class DynamicDirective implements OnChanges {
  @Input() public htmlContent: string;

  constructor(private vcRef: ViewContainerRef, private cr: ComponentResolver) {
  }

  protected createComponentFactory(metadata: ComponentMetadata) : Promise<ComponentFactory<any>> {
    const cmpClass = class DynamicComponent {};
    const decoratedCmp = Component(metadata)(cmpClass);
    return this.cr.resolveComponent(decoratedCmp);
  }

  ngOnChanges(changes: SimpleChanges) {
    //clear current ViewContainerRef to remove previous <dynamic-html-content>
    this.vcRef.clear();

    if (!changes["htmlContent"].currentValue) return;
    
    //metadata holds the template
    const metadata = new ComponentMetadata({
        selector: 'dynamic-html-content',
        template: this.htmlContent,
    });

    const self = this;

    this.createComponentFactory(metadata)
      .then(factory => {
        const injector = ReflectiveInjector.fromResolvedProviders([], self.vcRef.parentInjector);
        self.vcRef.createComponent(factory, 0, injector, []);
      })
      .catch(err => {
          console.error("Promise from DynamicDirective:createComponentFactory() thrown error.\n " + err.stack);
      });
  }

}