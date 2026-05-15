import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from '../components/Buttons/index';
import { Title } from "../components/Texts/title";    
import { Subtitle } from "../components/Texts/subtitle";
import { SuccessIcon } from "../components/Icons/success";
import { Container } from "../components/Containers/container";
import { HeaderContainer } from "../components/Containers/HeaderContainer/index";
import { FooterContainer } from "../components/Containers/footerContainer";
import { router } from "expo-router/build/exports";

export default function SucessoScreen(){
    return(
        <SafeAreaView>
            <Container>
                <HeaderContainer>
                    <SuccessIcon />
                    <Title label="Cartão criado com sucesso!" />
                    <Subtitle label="Seu cartão de visita digital está pronto. Compartilhe com a galera!" />
                </HeaderContainer>
                <FooterContainer>
                    <Button label="Criar outro cartão" onPress={() => router.push('/cadastro')} />
                    <Button label="voltar para o início" variant="secondary" onPress={() => router.push('/')} />
                </FooterContainer>
            </Container>
        </SafeAreaView>
    )
}