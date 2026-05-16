import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { ContainerScroll } from "../components/Sign-In/containerScroll";
import { ContainerSignIn } from "../components/Sign-In/containerSignIn";
import { Button } from "../components/Buttons";
import { ContainerColor } from "../components/Sign-In/containerColor";
import { ColorButton } from "../components/Sign-In/colotButton";
import { Subtitle } from "../components/Sign-In/subtitle";
import { Title } from "../components/Sign-In/title";
import { InputText } from "../components/Sign-In/inputText";

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [anos, setAnos] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [cor, setCor] = useState("");

  const [erroNome, setErroNome] = useState("");
  const [erroCargo, setErroCargo] = useState("");
  const [erroAnos, setErroAnos] = useState("");
  const [erroTecnologia, setErroTecnologia] = useState("");
  const [erroCor, setErroCor] = useState("");

  function salvar() {
    let valido = true;

    if (nome.length < 3) {
      setErroNome("Mínimo de 3 caracteres");
      valido = false;
    } else {
      setErroNome("");
    }

    if (cargo == "") {
      setErroCargo("Cargo é obrigatório");
      valido = false;
    } else {
      setErroCargo("");
    }

    if (anos == "" || Number(anos) <= 0) {
      setErroAnos("Coloque um número maior que 0");
      valido = false;
    } else {
      setErroAnos("");
    }

    if (tecnologia == "") {
      setErroTecnologia("Tecnologia é obrigatória");
      valido = false;
    } else {
      setErroTecnologia("");
    }

    if (cor == "") {
      setErroCor("Cor é obrigatória");
      valido = false;
    } else {
      setErroCor("");
    }

    if (valido) {
      router.push({
        pathname: "/preview",
        params: { nome, cargo, empresa, anos, tecnologia, cor },
      });
    }
  }

  return (
    <ContainerScroll>
      <ContainerSignIn>
        <Title label="Cadastro" />
        <Subtitle label="Preencha seus dados de dev" />

        <InputText
          label="Nome completo"
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu Nome Completo"
          error={erroNome}
        />

        <InputText
          label="Cargo"
          value={cargo}
          onChangeText={setCargo}
          placeholder="Digite seu Cargo"
          error={erroCargo}
        />

        <InputText
          label="Empresa (opcional)"
          value={empresa}
          onChangeText={setEmpresa}
          placeholder="Digite sua Empresa"
        />

        <InputText
          label="Anos de experiência"
          value={anos}
          onChangeText={setAnos}
          placeholder="Digite seus anos de experiência"
          keyboardType="numeric"
          error={erroAnos}
        />

        <InputText
          label="Tecnologia favorita"
          value={tecnologia}
          onChangeText={setTecnologia}
          placeholder="Digite sua Tecnologia"
          error={erroTecnologia}
        />

        <Title label="Escolha a cor do seu cartão" />
        <ContainerColor>
          <ColorButton
            color="Azul"
            isActive={cor === "Azul"}
            onPress={() => setCor("Azul")}
          />

          <ColorButton
            color="Verde"
            isActive={cor === "Verde"}
            onPress={() => setCor("Verde")}
          />

          <ColorButton
            color="Roxo"
            isActive={cor === "Roxo"}
            onPress={() => setCor("Roxo")}
          />
        </ContainerColor>

        <Button label="Gerar Cartão" onPress={salvar} />
      </ContainerSignIn>
    </ContainerScroll>
  );
}
