
export class CreateTodoDto {

    constructor(public readonly message: string, public readonly createdAt: Date) {
        
    }
    static create( props:{[key:string]:any}):[string?,CreateTodoDto?] {
        const { message } = props;
        if(!message) return ['message is required',undefined];
        return [undefined,new CreateTodoDto(message,new Date())];
    }
}