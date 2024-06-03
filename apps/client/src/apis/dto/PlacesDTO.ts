import { Result } from "../common";

export class PlaceDTO {
    id?: string;
    name?: string;
    ownerId?: string;
    image?: string;
    numberOfTables?: number;
    font?: string;
    color?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class CreatePlaceRequest {
    name: string;
    image: string;
}

export type CreatePlaceResponse = Result<PlaceDTO>;
export type GetPlacesResponse = Result<PlaceDTO[]>;
export type UpdatePlaceResponse = Result<PlaceDTO>;