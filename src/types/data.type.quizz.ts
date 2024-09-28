export interface Quizzes {
    quizzes:Quizz[];   
}

export interface Quizz {
    title:string;
    icon:string;
    question?:QuestionQuizz[];
}

export interface QuestionQuizz{
    question:string;
    options:string[];
    answer:string;
}

