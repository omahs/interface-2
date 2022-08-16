import { GrowthBook } from "@growthbook/growthbook-react";
import { logEvent } from "services/analytics";

const installationId = localStorage.getItem("installationId");

// Create a GrowthBook instance
export const growthbook = new GrowthBook({
  // Callback when a user is put into an A/B experiment
  trackingCallback: (experiment, result) => {
    logEvent("viewed_experiment", {
      experimentId: experiment.key,
      variationId: result.variationId,
      anonymousId: installationId ?? "",
    });
  },
});

export const growthbookSetAttributes = async () => {
  growthbook.setAttributes({
    id: installationId,
    company: "ribon",
  });
};

export const growthbookSetFeatures = () => {
  fetch("https://cdn.growthbook.io/api/features/key_prod_a04c5731fa615e46")
    .then((res) => res.json())
    .then((parsed) => {
      growthbook.setFeatures(parsed.features);
    });
};
