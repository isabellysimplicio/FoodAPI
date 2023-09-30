import { api } from './api'

export async function getComida(food) {
    try {
        const resultado = await api.get(`1/search.php?s=${food}`)
        return resultado
    } catch (error) {
        console.log(error)
        return {}
    }
}