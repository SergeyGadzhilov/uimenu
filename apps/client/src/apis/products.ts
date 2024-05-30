import { PatchRequest } from "./common";
import { ProductDto, ProductResponse } from "./dto/ProductDTO";

export async function UpdateProduct(placeId: string, product: ProductDto, token: string = "") : Promise<ProductResponse> {
    return await PatchRequest(`/places/${placeId}/categories/menu-items/${product.id}`, product, token);
}