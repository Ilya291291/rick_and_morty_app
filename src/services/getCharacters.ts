import CHARACTERS_URL from "../fixtures/characters"

export const getCharacters = async () => {
    try {
        const response = await Promise.resolve(CHARACTERS_URL);
        return response;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
}