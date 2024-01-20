
export class TodoEntity {
    constructor(
        public readonly id: number,
        public readonly message: string,
        public readonly createdAt?: Date | null,
    ) {}

    get isCreated() {
        return !!this.createdAt;
    }
    public static fromObject(object:{[key:string]:any}): TodoEntity {
        const { id, message, createdAt } = object;
        if (!id) throw 'Id is required';
        if (!message) throw 'Message is required';

        let newCreatedAt;
        if (createdAt) {
            newCreatedAt = new Date(createdAt);
            if (isNaN(newCreatedAt.getTime())) {
                throw 'CreatedAt is not a valid date!!';
            }
            
        }
        return new TodoEntity(id, message, createdAt);
    }
}