import { Currencies } from "types/enums/Currencies";
import promoterCardGivingsApi from ".";
import api from "..";

describe("promoterCardGivingsApi", () => {
  describe("GetPromoterCardGivings", () => {
    beforeEach(() => {
      // If it's a different method just change it to: post, put, delete, etc.
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      promoterCardGivingsApi.getPromoterCardGivings(
        "test@gmail.com",
        Currencies.USD,
      );

      expect(api.get).toHaveBeenCalledWith(
        "/api/v1/givings/user_givings?email=test@gmail.com&currency=USD",
      );
    });
  });
});
