'use client';
import { useAddTodoMutation, useDeleteTodoMutation, usePatchTodoMutation } from '@/redux/api/todo';
import scss from './TodoAdd.module.scss';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ITodoAdd {
  title: string;
}

const TodoAdd = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting },
  } = useForm<ITodoAdd>();
  const [addToMutation] = useAddTodoMutation();

  const AddTodo: SubmitHandler<ITodoAdd> = async (data) => {
    await addToMutation(data);
    reset();
  };

  return (
    <div className={scss.TodoAdd}>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(AddTodo)}>
            <input type="text" placeholder="Text" {...register('title', { required: true })} />
            {isSubmitting ? <button disabled type='button'>Loading...</button> : <button type="submit">Add</button>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoAdd;
