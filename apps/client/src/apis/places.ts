import { PostRequest } from "./common";
import { CreatePlaceRequest, CreatePlaceResponse, PlaceDTO } from "./dto/PlacesDTO";

export async function CreatePlace(request: CreatePlaceRequest, token: string = "") : Promise<CreatePlaceResponse> {
    return await PostRequest<CreatePlaceRequest, PlaceDTO>("/places/", request, token);
}