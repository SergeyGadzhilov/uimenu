import { Result } from "../common";

export class ProductDto {
    id?: string;
    name: string;
    description: string;
    price: number;
    image: string;
    categoryId?: string;
}

export type ProductResponse = Result<ProductDto>;