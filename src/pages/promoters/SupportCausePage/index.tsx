import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import useBreakpoint from "hooks/useBreakpoint";
import Carousel from "components/moleculars/sliders/Carousel";
import { logEvent } from "services/analytics";
import useCauses from "hooks/apiHooks/useCauses";
import Cause from "types/entities/Cause";
import IntersectBackground from "assets/images/intersect-background.svg";
import useNavigation from "hooks/useNavigation";
import Offer from "types/entities/Offer";
import offerFactory from "config/testUtils/factories/offerFactory";
import { formatPrice } from "lib/formatters/currencyFormatter";
import * as S from "./styles";
import UserSupportSection from "../SupportTreasurePage/CardSection/UserSupportSection";
import SupportImage from "./assets/support-image.png";

function SupportTreasurePage(): JSX.Element {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const { isMobile } = useBreakpoint();
  const [, setCurrentCause] = useState<Cause>();
  const { navigateTo } = useNavigation();
  const [selectedOffer] = useState<Offer>(offerFactory());

  const { causes } = useCauses();

  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportCausePage",
  });

  useEffect(() => {
    logEvent("treasureSupportScreen_view");
  }, []);

  useEffect(() => {
    setCurrentCause(causes[0]);
  }, [JSON.stringify(causes)]);

  const handleCauseClick = (cause: Cause, index: number) => {
    logEvent("treasureCauseSelection_click", {
      id: cause?.id,
    });
    setCurrentCause(cause);
    setSelectedButtonIndex(index);
  };

  function renderCausesButtons() {
    return causes?.map((item, index) => (
      <S.Button
        outline={index !== selectedButtonIndex}
        onClick={() => handleCauseClick(item, index)}
        key={item?.id}
      >
        {item.name}
      </S.Button>
    ));
  }

  const handleDonateClick = () => {
    logEvent("treasureComCicleBtn_click");
    console.log(selectedOffer);
  };

  const handleCommunityAddClick = () => {
    navigateTo({
      pathname: "/promoters/community-add",
      state: {
        donationAmount: selectedOffer.price,
      },
    });
  };

  const communityAddText = () =>
    `+ ${formatPrice(selectedOffer.priceValue * 0.6, selectedOffer.currency)}`;

  return (
    <S.Container>
      <S.MainContainer>
        <S.Title>{t("title")}</S.Title>
        <S.ContainerCarousel>
          <Carousel
            sliderPerView={isMobile ? 2 : 2.8}
            mode="snap"
            loop
            spacing={8}
          >
            {renderCausesButtons()}
          </Carousel>
        </S.ContainerCarousel>
        <S.ContentContainer>
          <S.SupportImage src={SupportImage} />
          <S.DonateContainer>
            <S.GivingContainer>
              <S.ContributionContainer>
                <div />
              </S.ContributionContainer>
              <S.CommunityAddContainer>
                <S.CommunityAddText>{t("communityAddText")}</S.CommunityAddText>
                <S.CommunityAddValue>{communityAddText()}</S.CommunityAddValue>
                <S.CommunityAddButton
                  text={t("communityAddButtonText")}
                  onClick={handleCommunityAddClick}
                  outline
                />
              </S.CommunityAddContainer>
            </S.GivingContainer>
            <S.DonateButton
              text={t("donateButtonText", { value: "R$ 10" })}
              onClick={handleDonateClick}
            />
          </S.DonateContainer>
          <UserSupportSection />
        </S.ContentContainer>
      </S.MainContainer>
      <S.BackgroundImage src={IntersectBackground} />
    </S.Container>
  );
}

export default SupportTreasurePage;
