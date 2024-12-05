namespace TODO {
  interface ITodo {
    _id: number;
    title: string;
  }
  type GetTodoResponse = ITodo[];
  type GetTodoRequest = void;

  type AddtodoResponse = ITodo[];
  type AddTodoRequest = ITodo;

  type DeleteTodoResponse = ITodo[];
  type DeleteTodoRequest = number;


type PatchTodoResponse=ITodo[];
type PatchTodoRequest={
  _id:number;
  newData:ITodo;
};
}