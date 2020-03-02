export enum WorkType {
    Appliances,
    Electrical,
    Plumbing,
    HomeCleaning,
    Tutoring,
    PackagingAndMoving,
    ComputerRepair,
    HomeRepairAndPainting,
    PestControl
}

/*
return string[] [Appliances,Electrical....,PestControl]
*/
export function getAllWorkTypestring() {
    let ret: string[];
    ret = [];
    // tslint:disable-next-line:forin
    for (const enumMember in WorkType) {
        const isValueProperty = parseInt(enumMember, 10) >= 0;
        if (isValueProperty) {
            ret.push(WorkType[enumMember]);
        }
    }
    return ret;
}




