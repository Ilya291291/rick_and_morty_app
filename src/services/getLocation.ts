import LOCATION_URL from "../fixtures/location"

export const getLocation = async () => {
    try {
        const response = await Promise.resolve(LOCATION_URL);
        return response;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
}