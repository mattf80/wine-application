export interface ICountry {
    id: number;
    name: string; //required
    regions: IRegion[] //one or more regions
}

export interface IRegion {
    id: number;
    name: string; //required
}