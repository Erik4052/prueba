export class User{
    constructor(
        public id:string,
        public name: string,
        public email: string,
        public idCard: string,
        public aprobed: any, 
        public payment: string,
        public paymentDate?: Date,
        
    ){}
}