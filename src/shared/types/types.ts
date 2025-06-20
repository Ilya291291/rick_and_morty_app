export enum Category {
    LOCATION = "location",
    CHARACTER = "character",
    EPISODE = "episode"
}

export interface ICharacter {
    id?: number | null,
    name: string | '',
    status: string | '',
    species: string | '',
    gender: string | '',
    image: string | ''
    created: string | '',
    pagenum?: number
}

export interface IEpisode {
    id: number,
    name: string,
    air_date: string,
    episode: string
    created: string
}

export interface ILocation {
    id: number,
    name: string,
    type: string,
    dimension: string,
    created: string
}

export type IData = ICharacter | IEpisode | ILocation | ICharacter[] | IEpisode[] | ILocation[] | null;
