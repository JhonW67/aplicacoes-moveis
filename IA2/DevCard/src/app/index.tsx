import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from '../components/Buttons/index';
import { Subtitle } from "../components/Texts/subtitle";
import { Logo } from "../components/Texts/logo";
import { FooterText } from "../components/Texts/footer";
import { CardIcon } from "../components/Icons/card";
import { Container } from "../components/Containers/container";
import { HeaderContainer } from "../components/Containers/HeaderContainer/index";
import { FooterContainer } from "../components/Containers/footerContainer";
import { router } from "expo-router/build/exports";

export default function HomeScreen(){
    return(
        <SafeAreaView>
            <Container>
                <HeaderContainer>
                    <CardIcon />
                    <Logo label="DevCard" />
                    <Subtitle label="Seu cartão de visitas digital de dev mobile" />
                </HeaderContainer>

                <Button label="Criar meu cartão" onPress={() => router.push('/cadastro')} />

                <FooterContainer>
                    <FooterText label="Aplicações Moveis - Instrumento Avaliativo 2" />
                </FooterContainer>
            </Container>
        </SafeAreaView>
    )
}
