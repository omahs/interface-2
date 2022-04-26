import ModalIcon from "components/moleculars/modals/ModalIcon";
import PigIcon from "assets/icons/pig-icon.svg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "lib/localStorage";
import * as S from "./styles";

function ModalOnboarding(): JSX.Element {
  const FUND_MODAL_ONBOARDING_VIEWED_KEY = "FUND_MODAL_ONBOARDING_VIEWED_KEY";
  const [visible, setVisible] = useState(
    getLocalStorageItem(FUND_MODAL_ONBOARDING_VIEWED_KEY) !== "true",
  );

  useEffect(() => {
    setLocalStorageItem(FUND_MODAL_ONBOARDING_VIEWED_KEY, "true");
  }, []);

  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.fundPage.modalOnboarding",
  });

  return (
    <S.Container>
      <ModalIcon
        icon={PigIcon}
        visible={visible}
        title={t("title")}
        body={t("subtitle")}
        primaryButtonText={t("button")}
        primaryButtonCallback={() => setVisible(false)}
        onClose={() => setVisible(false)}
      />
    </S.Container>
  );
}

export default ModalOnboarding;
