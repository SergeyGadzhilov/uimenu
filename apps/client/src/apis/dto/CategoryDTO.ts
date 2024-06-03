import { Result } from "../common";

export class CategoryDto {
    id?: string;
    name: string;
    placeId: string;
}

export type CreateCategoryResponse = Result<CategoryDto>;
export type DeleteCategoryResponse = Result<CategoryDto>;
export type UpdateCategoryResponse = Result<CategoryDto>;