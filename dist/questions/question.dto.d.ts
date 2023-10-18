export declare class QuestionDto {
    testid: string;
    type: string;
    question: string;
    option1?: string;
    option2?: string;
    option3?: string;
    option4?: string;
    mcqOption?: string;
    suggestedAnswer: string[];
}
declare const OtionalQuestionDto_base: import("@nestjs/common").Type<Partial<QuestionDto>>;
export declare class OtionalQuestionDto extends OtionalQuestionDto_base {
}
export {};
