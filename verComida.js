import { View, Text, Button, TextInput, Image } from "react-native";
import React, { useState } from 'react';
import { getComida } from "./getComida";

export default function VerComida() {
    const [comida, setComida] = useState([]);
    const [nome, setNome] = useState('');

    async function carregaComida() {
        try {
            const resultado = await getComida(nome);
            if (resultado.status === 200) {
                setComida(resultado.data.meals || []);
            } else {
                console.log("Erro na solicitação da API");
                setComida([]);
            }
        } catch (error) {
            console.log(error);
            setComida([]);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>API de Comida</Text>
            {comida.length > 0 && (
                comida.map((refeicao) => (
                    <View key={refeicao.idMeal}>
                        <Image
                            source={{ uri: refeicao.strMealThumb }}
                            style={{ width: 200, height: 200, margin: 10 }}
                        />
                        <Text>Nome: {refeicao.strMeal}</Text>
                        <Text>Categoria: {refeicao.strCategory}</Text>
                        <Text>Região: {refeicao.strArea}</Text>
                    </View>
                ))
            )}
            <TextInput
                style={{ borderColor: "black", borderWidth: 1, width: 200, height: 25, margin: 10, padding: 5, textAlign: 'center' }}
                placeholder="Digite o nome"
                onChangeText={(text) => setNome(text)}
                value={nome}
            />
            <Button title="Ver comida" onPress={carregaComida} />
        </View>
    );
}
