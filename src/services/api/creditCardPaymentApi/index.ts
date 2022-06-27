import { AxiosResponse } from "axios";
import CreditCardPayment from "types/entities/CreditCardPayment";
import { apiPost } from "..";

const creditCardPaymentApi = {
  postCreditCardPayment: (
    paymentInformations: CreditCardPayment,
  ): Promise<AxiosResponse<CreditCardPayment>> =>
    apiPost("payments/credit_cards/subscribe", { paymentInformations }),
};

export default creditCardPaymentApi;
