import { useTranslation } from "react-i18next";
import CardBlank from "components/moleculars/cards/CardBlank";
import Button from "components/atomics/Button";
import { useEffect, useState } from "react";
import {
  DONATION_TOKEN_CONTRACT_ADDRESS,
  RIBON_CONTRACT_ADDRESS,
} from "utils/contractUtils";
import { utils } from "ethers";
import { useWalletContext } from "contexts/walletContext";
import useNavigation from "hooks/useNavigation";
import { useContract } from "hooks/useContract";
import DonationTokenAbi from "utils/abis/DonationToken.json";
import RibonAbi from "utils/abis/RibonAbi.json";
import { logError } from "services/crashReport";
import { Divider } from "components/atomics/Divider/styles";
import theme from "styles/theme";
import Spinner from "components/atomics/Spinner";
import * as S from "./styles";

function FundPage(): JSX.Element {
  const [donationPoolBalance, setDonationPoolBalance] = useState<string | null>(
    null,
  );
  const { navigateTo } = useNavigation();
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.fundPage",
  });
  const { wallet, connectWallet } = useWalletContext();
  const donationTokenContract = useContract({
    address: DONATION_TOKEN_CONTRACT_ADDRESS,
    ABI: DonationTokenAbi.abi,
  });
  const contract = useContract({
    address: RIBON_CONTRACT_ADDRESS,
    ABI: RibonAbi.abi,
  });

  async function fetchContractBalance() {
    try {
      const balance = await donationTokenContract?.balanceOf(
        RIBON_CONTRACT_ADDRESS,
      );
      const formattedBalance = parseFloat(utils.formatEther(balance)).toFixed(
        2,
      );

      setDonationPoolBalance(formattedBalance);
    } catch (e) {
      logError(e);
    }
  }

  const handleSupportButtonClick = () => {
    if (wallet) {
      navigateTo("/promoters/support-fund");
      return;
    }

    connectWallet();
  };

  useEffect(() => {
    fetchContractBalance();
  }, []);

  useEffect(() => {
    contract?.on("PoolBalanceIncreased", () => {
      fetchContractBalance();
    });
  }, []);

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <S.Subtitle>{t("subtitle")}</S.Subtitle>

      <S.SectionTitle>{t("fundBalance")}</S.SectionTitle>
      <S.CardContainer>
        <CardBlank>
          <S.FundText>
            {donationPoolBalance} <S.FundTextCoin>USDC</S.FundTextCoin>
          </S.FundText>
          <Button
            text={t("fundSupportButtonText")}
            onClick={handleSupportButtonClick}
          />
        </CardBlank>
      </S.CardContainer>

      <S.GivingsContainer>
        <S.SectionTitle>{t("givingsTitle")}</S.SectionTitle>
        <S.GivingsCardContainer>
          <S.GivingsCard>
            <S.GivingDate>22/02/2022</S.GivingDate>
            <S.GivingText>
              12.00 <S.GivingTextCoin>USDC</S.GivingTextCoin>
            </S.GivingText>
            <Divider color={theme.colors.lightGray} />
            <S.StatusContainer>
              <Spinner />
              <S.ProcessingText>Processing Transaction...</S.ProcessingText>
            </S.StatusContainer>
          </S.GivingsCard>

          <S.GivingsCard>
            <S.GivingDate>22/02/2022</S.GivingDate>
            <S.GivingText>
              12.00 <S.GivingTextCoin>USDC</S.GivingTextCoin>
            </S.GivingText>
            <Divider color={theme.colors.lightGray} />
            <S.StatusContainer>
              <S.TransactionLink>See Transaction</S.TransactionLink>
            </S.StatusContainer>
          </S.GivingsCard>

          <S.GivingsCard>
            <S.GivingDate>22/02/2022</S.GivingDate>
            <S.GivingText>
              12.00 <S.GivingTextCoin>USDC</S.GivingTextCoin>
            </S.GivingText>
            <Divider color={theme.colors.lightGray} />
          </S.GivingsCard>
        </S.GivingsCardContainer>
      </S.GivingsContainer>
    </S.Container>
  );
}

export default FundPage;
