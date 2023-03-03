// Interface to manage the data types of each variable
export interface IExpenses {
    type: string;
    name: string;
    date: string;
    amount: number;
    status: boolean;
}