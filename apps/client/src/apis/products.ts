import { DeleteRequest, PatchRequest, PostRequest } from "./common";
import { ProductDto, ProductResponse } from "./dto/ProductDTO";

export async function CreateProduct(placeId: string, product: ProductDto, token: string = "") : Promise<ProductResponse> {
    return await PostRequest(`/places/${placeId}/categories/menu-items/`, product, token);
}

export async function UpdateProduct(placeId: string, product: ProductDto, token: string = "") : Promise<ProductResponse> {
    return await PatchRequest(`/places/${placeId}/categories/menu-items/${product.id}`, product, token);
}

export async function DeleteProduct(placeId: string, productId: string, token: string = "") : Promise<ProductResponse>{
    return await DeleteRequest(`/places/${placeId}/categories/menu-items/${productId}`, null, token);
}