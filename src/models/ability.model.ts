export class Ability{
    public count!: number;
    public next!: string;
    public previous!: string; 
    public results!: ResultList[];
}

export class ResultList{
    public name!: string;
    public url!: string;
}