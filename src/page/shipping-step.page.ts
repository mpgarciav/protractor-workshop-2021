
import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private terms: ElementFinder;
  private shipping: ElementFinder;

  constructor() {
    this.terms = $('#cgv');
    this.shipping = $('#form > p > button > span');
  }

  public async accept(): Promise<void> {
    await this.terms.click();
    await this.shipping.click();
  }
}
