import { GetRequest, PatchRequest, PostRequest } from "./common";
import { CreatePlaceRequest, CreatePlaceResponse, GetPlacesResponse, PlaceDTO, UpdatePlaceResponse } from "./dto/PlacesDTO";

export async function CreatePlace(request: CreatePlaceRequest, token: string = "") : Promise<CreatePlaceResponse> {
    return await PostRequest<CreatePlaceRequest, PlaceDTO>("places/", request, token);
}

export async function GetPlaces(token: string = "") : Promise<GetPlacesResponse> {
    return await GetRequest<string, PlaceDTO[]>(`places/`, null, token);
}

export async function UpdatePlace(place: PlaceDTO = null, token:string = "") : Promise<UpdatePlaceResponse> {
    return await PatchRequest<PlaceDTO, PlaceDTO>(`places/${place.id}`, place, token);
}