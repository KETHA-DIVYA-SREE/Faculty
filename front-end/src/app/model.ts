export interface student{
    _id?:string,
    name: string,
    classInfo:string,
    email: string,
    phoneNumber: string,
    semester:number,
    status:boolean

}
export interface attendance{
    _id?:string,
    date:string,
    present:Array<student>
}
export interface attendanceChart{
    name:string,
    value:number
}
