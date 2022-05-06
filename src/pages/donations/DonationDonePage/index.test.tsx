import { expectTextToBeInTheDocument, renderComponent } from "config/testUtils";
import nonProfitFactory from "config/testUtils/factories/nonProfitFactory";
import DonationDone from ".";

describe("DonationDone", () => {
  it("should render without error", () => {
    renderComponent(<DonationDone />);

    expectTextToBeInTheDocument("Thank you for your donation!");
  });

  it("shows the impact of the donation", () => {
    renderComponent(<DonationDone />, {
      locationState: {
        nonProfit: nonProfitFactory({
          impactByTicket: 2,
          impactDescription: "days of impact",
        }),
      },
    });

    expectTextToBeInTheDocument("2 days of impact");
  });
});
