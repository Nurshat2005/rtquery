import LayoutSite from '@/components/layout/LayoutSite';
import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutSite>
      <main>{children}</main>
    </LayoutSite>
  );
};

export default layout;
