export declare class QuestionDto {
    testid: string;
    question: string;
    options?: string[];
    mcqOption?: string;
}
declare const OtionalQuestionDto_base: import("@nestjs/common").Type<Partial<QuestionDto>>;
export declare class OtionalQuestionDto extends OtionalQuestionDto_base {
}
export {};
