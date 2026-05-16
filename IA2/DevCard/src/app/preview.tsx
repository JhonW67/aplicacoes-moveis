import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Buttons/index";
import { Title } from "../components/Texts/title";
import { Container } from "../components/Containers/container";
import { HeaderContainer } from "../components/Containers/HeaderContainer/index";
import { FooterContainer } from "../components/Containers/footerContainer";
import { CardContainer } from "../components/Containers/cardContainer";
import { CardAvatarContainer } from "../components/Containers/cardAvatarContainer";
import { CardSeparator } from "../components/Containers/cardSeparator";
import { router, useLocalSearchParams } from "expo-router/build/exports";
import { Avatar } from "../components/Avatar";
import { CardTextContainer } from "../components/Containers/cardTextContainer";
import { CardTitle } from "../components/Card/cardTitle";
import { CardText } from "../components/Card/cardText";
import { CardSubtitle } from "../components/Card/cardSubtitle";
import { CardBadgeContainer } from "../components/Containers/cardBadgeContainer";
import { CardBadgeText } from "../components/Card/CardBadgeText";
import { CardTitleRole } from "../components/Card/cardTitleRole";

export default function PreviewScreen() {
  const params = useLocalSearchParams<{
    nome: string;
    cargo: string;
    anos: string;
    tecnologia: string;
    cor: string;
    empresa?: string;
  }>();

  const inicialNome = params.nome ? params.nome.charAt(0).toUpperCase() : "Dev";

  const anosNum = Number(params.anos) || 0;
  let nivel = "Júnior";
  if (anosNum >= 3 && anosNum <= 5) {
    nivel = "Pleno";
  } else if (anosNum >= 6) {
    nivel = "Sênior";
  }

  let corFundoCartao = "#3783f6";
  if (params.cor === "Azul") {
    corFundoCartao = "#3783f6";
  } else if (params.cor === "Verde") {
    corFundoCartao = "#24a148";
  } else if (params.cor === "Roxo") {
    corFundoCartao = "#8a3ffc";
  }

  return (
    <SafeAreaView>
      <Container>
        <HeaderContainer variant="secondary">
          <Title label="Seu Cartão" />
        </HeaderContainer>
        <CardContainer backgroundColor={corFundoCartao}>
          <CardAvatarContainer>
            <Avatar label={inicialNome} />
          </CardAvatarContainer>
          <CardTextContainer>
            <CardTitle label={params.nome} />
          </CardTextContainer>
          <CardTextContainer>
            <CardText label={params.cargo} />
            <CardSubtitle label={params.empresa ?? ""} />
          </CardTextContainer>
          <CardSeparator />
          <CardTextContainer>
            <CardSubtitle label="Focado em" />
            <CardTitleRole label={params.tecnologia} />
          </CardTextContainer>
          <CardBadgeContainer>
            <CardBadgeText label={nivel} />
          </CardBadgeContainer>
          <CardSubtitle label={params.anos || "3"} />
        </CardContainer>
        <FooterContainer>
          <Button
            label="Editar"
            variant="outline"
            onPress={() => router.push("/cadastro")}
          />
          <Button
            variant="secondary"
            label="Finalizar"
            onPress={() => router.replace("/sucesso")}
          />
        </FooterContainer>
      </Container>
    </SafeAreaView>
  );
}
