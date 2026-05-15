import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from '../components/Buttons/index';
import { Title } from "../components/Texts/title";    
import { Container } from "../components/Containers/container";
import { HeaderContainer } from "../components/Containers/HeaderContainer/index";
import { FooterContainer } from "../components/Containers/footerContainer";
import { CardContainer } from "../components/Containers/cardContainer";
import { CardAvatarContainer } from "../components/Containers/cardAvatarContainer";
import { CardSeparator } from "../components/Containers/cardSeparator";
import { router } from "expo-router/build/exports";
import { Avatar } from "../components/Avatar";
import { CardTextContainer } from "../components/Containers/cardTextContainer";
import { CardTitle } from "../components/Card/cardTitle";
import { CardText } from "../components/Card/CardText";
import { CardSubtitle } from "../components/Card/cardSubtitle";
import { CardBadgeContainer } from "../components/Containers/cardBadgeContainer";
import { CardBadgeText } from "../components/Card/CardBadgeText";
import { CardTitleRole } from "../components/Card/cardTitleRole";

export default function PreviewScreen(){
    return(
        <SafeAreaView>
            <Container>
                <HeaderContainer variant="secondary">
                    <Title label="Seu Cartão" />
                </HeaderContainer>
                <CardContainer>
                    <CardAvatarContainer>
                        <Avatar label="J" />
                    </CardAvatarContainer>
                    <CardTextContainer>
                        <CardTitle label="João Vitor da Silva Costa" />
                    </CardTextContainer>
                    <CardTextContainer>
                        <CardText label="Desenvolvedor/Estudante" />
                        <CardSubtitle label="LumenVita" />
                    </CardTextContainer>
                    <CardSeparator />
                    <CardTextContainer>
                        <CardSubtitle label="Focado em" />
                        <CardTitleRole label="Backend" />
                    </CardTextContainer>
                    <CardBadgeContainer>
                        <CardBadgeText label="Estudante" />
                    </CardBadgeContainer>
                    <CardSubtitle label="3 anos de experiência" />
                </CardContainer>
                <FooterContainer>
                    <Button label="Editar" variant="outline" onPress={() => router.push('/cadastro')} />
                    <Button variant="secondary" label="Finalizar" onPress={() => router.push('/')} />
                </FooterContainer>
            </Container>
        </SafeAreaView>
    )
}