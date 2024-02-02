import { Model } from 'mongoose';
import { AttempterList } from 'src/Schemas/attempterList.schema';
import { Category } from 'src/Schemas/category.schema';
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: Model<AttempterList>);
    getbyuserid(userid: string): Promise<any[]>;
    add(newCategory: Category): Promise<any>;
}
