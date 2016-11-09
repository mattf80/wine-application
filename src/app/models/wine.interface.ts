
export interface IWine {
     id: number,
     name: string,
     colour: string,
     countryId: number,
     countryName: string,
     vintage: number,
     imageUrl: string,
     shortDesc: string,
     grapes: IGrape[],
     tastingNotes: ITastingNote[],
     objectState: IObjectState
}

export interface IGrape {
    id: number,
    name: string
}

export interface ITastingNote {
    id: number,
    notes: string,
    score: number
}

export interface IObjectState {
    
}