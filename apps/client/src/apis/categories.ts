import { DeleteRequest, PostRequest } from "./common";
import { CategoryDto, CreateCategoryResponse, DeleteCategoryResponse } from "./dto/CategoryDTO";

export async function CreateCategory(category: CategoryDto, token: string = "") : Promise<CreateCategoryResponse> {
    return await PostRequest<CategoryDto, CategoryDto>(`/places/${category.placeId}/categories/`, category, token);
}

export async function DeleteCategory(category: CategoryDto, token: string = "") : Promise<DeleteCategoryResponse> {
    return await DeleteRequest<CategoryDto, CategoryDto>(
        `/places/${category.placeId}/categories/${category.id}`,
        category,
        token
    )
}