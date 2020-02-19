export enum VendorGender {
    whatever,
    male    ,
    female,
}

export enum VendorType {
    whatever,
    Cleaner,
    Painter,
    DogWalker,
    ElectricalWork,
}


export class VendorResult {
    titleName: string;
    typeString: string;
    priceString: string;
    workday: string;
    workHour: string;
    rate: number;
    commentsNum: number;
    photoUrl: string;
}
