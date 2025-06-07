import EPISODE_URL from "../fixtures/episode"

export const getEpisode = async () => {
    try {
        const response = await Promise.resolve(EPISODE_URL);
        return response;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
}