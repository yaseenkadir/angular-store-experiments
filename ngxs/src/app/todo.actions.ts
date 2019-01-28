export class ChangeTodoState {
  static readonly type = '[TODO] Changing Todo State';

  constructor(public id: number) {
  }
}

export class CreateTodo {
  static readonly type = '[TODO] Create';

  constructor(public text: string) {
  }
}
