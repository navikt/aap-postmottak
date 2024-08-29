import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  params: { id: string; aktivtSteg: string };
}

const Layout = async ({ children, params }: LayoutProps) => {
  return <>{children}</>;
};

export default Layout;
