import { ReactNode } from "react"
import { Text, View } from "react-native"

interface CardUserProps {
    nome: string
    email: string
    idade: number
    avatar?: string
    children?: ReactNode
}

export default function CardComponent({
    nome,
    email,
    idade,
    avatar,
    children
}: CardUserProps) {
    return (
        <View>
            { avatar } && <Text>{avatar}</Text>}
            <Text>Nome - {nome}</Text>
            <Text>E-mail - {email}</Text>
            <Text>Idade - {idade}</Text>
            <View style={{
                backgroundColor: "gray",
            }}>
                {children}
            </View>
        </View>
    )
}

