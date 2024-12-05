'use client';
import { api } from '@/redux/api';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { FC, ReactNode } from 'react';
interface IReduxProvidersProps {
  children: ReactNode;
}

const ReduxProviders: FC<IReduxProvidersProps> = ({ children }) => {
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default ReduxProviders;
