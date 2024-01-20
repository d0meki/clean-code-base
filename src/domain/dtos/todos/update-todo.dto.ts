export class UpdateTodoDto {
  constructor(
    public readonly id: number,
    public readonly message: string,
    public readonly createdAt?: Date
  ) {}

  get values() {
    const returnObj: {[key: string]: any} = {};
    if ( this.message ) returnObj.message = this.message;
    if ( this.createdAt ) returnObj.createdAt = this.createdAt;

    return returnObj;
  }
  static create(props: { [key: string]: any }): [string?, UpdateTodoDto?] {
    const { id, message, createdAt } = props;
    let newCreatedAt = createdAt;

    if (!id || isNaN(Number(id))) {
      return ["id must be a valid number"];
    }

    if (createdAt) {
      newCreatedAt = new Date(createdAt);
      if (newCreatedAt.toString() === "Invalid Date") {
        return ["CompletedAt must be a valid date"];
      }
    }

    return [undefined, new UpdateTodoDto(id, message, newCreatedAt)];
  }
}
