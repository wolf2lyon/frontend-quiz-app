export interface Quizzes {
    quizzes:Quizz[];   
}

export interface Quizz {
    title:string;
    icon:string;
    questions?:QuestionQuizz[];
}

export interface QuestionQuizz{
    question:string;
    options:string[];
    answer:string;
}

