import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModal,
  SummaryStepPage,
  SignInStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage,
  AddressStepPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModal = new ProductAddedModal();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.goToProduct();
    await(browser.sleep(3000));
    await productAddedModalPage.addProduct();
    await(browser.sleep(3000));
    await summaryStepPage.goToCheckout();
    await(browser.sleep(3000));

    await signInStepPage.fillForm('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(3000));

    await addressStepPage.selectAddress();
    await(browser.sleep(3000));

    await shippingStepPage.accept();
    await(browser.sleep(3000));

    await paymentStepPage.selectPaymentMethod();
    await(browser.sleep(3000));
    await bankPaymentPage.confirmOrder();
    await(browser.sleep(3000));

    await expect(orderSummaryPage.result())
      .toBe('Your order on My Store is complete.');
  });
});
