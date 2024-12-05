'use client';
import scss from './TodoList.module.scss';
import { FC, useState } from 'react';
import { useDeleteTodoMutation, useGetTodoQuery, usePatchTodoMutation } from '@/redux/api/todo';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IUploadTodo {
  title: string;
}

const TodoList: FC = () => {
  const { data } = useGetTodoQuery();
  const [patchTodo] = usePatchTodoMutation();
  const [deleteMutation] = useDeleteTodoMutation();
  const { register, handleSubmit, setValue,reset } = useForm<IUploadTodo>();
  const [edit, setEdit] = useState<number | null>(null);

  const uplaodTodo: SubmitHandler<IUploadTodo> = async (data) => {
    await patchTodo({ _id: edit!, newData: data })
    setEdit(null);
    reset()
  };
  return (
    <section className={scss.TodoList}>
      <div className="container">
        <div className={scss.content}>
          <h1>TodoList</h1>
          {data?.map((el) => (
            <div className={scss.TodoBlog} key={el._id}>
              {edit === el?._id ? (
                <>
                  <form onSubmit={handleSubmit(uplaodTodo)}>
                    <input
                      type="text"
                      placeholder="  upalod"
                      {...register('title', { required: true })}
                    />
                    <button type="submit">SAVE</button>
                    <button type="button" onClick={()=>setEdit(null)}>cancel</button>
                  </form>
                </>
              ) : (
                <>
                  <h1>{el.title}</h1>
                  <button onClick={() => setEdit(el._id!)}>Uplaod</button>
                  <button onClick={async () => await deleteMutation(el._id)}>DELETE</button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
