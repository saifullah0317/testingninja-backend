/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Test } from 'src/Schemas/test.schema';
import { TestDto } from './test.dto';
import { TestInterface } from 'src/Schemas/test.schema';
import { AttempterService } from 'src/attempters/attempter.service';
import { AttempterListService } from 'src/attempterlists/attempterlist.service';
export declare class TestService {
    private testModel;
    private readonly attempterListService;
    private readonly attempterService;
    constructor(testModel: Model<Test>, attempterListService: AttempterListService, attempterService: AttempterService);
    getall(): Promise<Test[]>;
    getByKey(testkey: string): Promise<import("mongoose").Document<unknown, {}, Test> & Test & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    generateString(length: any): Promise<string>;
    add(createTestDto: TestInterface): Promise<Test>;
    updateTest(id: string, updateTestDto: TestDto): Promise<Test>;
    deleteTest(id: string): Promise<import("mongoose").Document<unknown, {}, Test> & Test & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getByUserid(userid: string): Promise<any>;
    sendTestKey(testid: string): Promise<string[]>;
    initiateResponse(email: string, key: string): Promise<{
        message: string;
        testId?: undefined;
        attempterId?: undefined;
    } | {
        testId: string;
        attempterId: any;
        message?: undefined;
    }>;
}
