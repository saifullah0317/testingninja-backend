import { AuthService } from 'src/auth/auth.service';
import { CategoryService } from './category.service';
import { Category } from 'src/Schemas/category.schema';
import { CategoryDto } from './category.dto';
export declare class CategoryController {
    private readonly categoryService;
    private readonly authService;
    constructor(categoryService: CategoryService, authService: AuthService);
    getall(req: any): Promise<Category[]>;
    add(req: any, body: CategoryDto): Promise<Category>;
}
