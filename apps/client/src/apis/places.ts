import { GetRequest, PostRequest } from "./common";
import { CreatePlaceRequest, CreatePlaceResponse, GetPlacesResponse, PlaceDTO } from "./dto/PlacesDTO";

export async function CreatePlace(request: CreatePlaceRequest, token: string = "") : Promise<CreatePlaceResponse> {
    return await PostRequest<CreatePlaceRequest, PlaceDTO>("/places/", request, token);
}

export async function GetPlaces(token: string = "") : Promise<GetPlacesResponse> {
    return await GetRequest<string, PlaceDTO[]>(`/places/`, null, token);
}