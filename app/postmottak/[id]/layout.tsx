import { StegGruppeIndikatorAksel } from 'components/steggruppeindikator/StegGruppeIndikatorAksel';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  params: { id: string };
}

const Layout = async ({ children, params }: LayoutProps) => {
  // TODO: Høre med designer om vi trenger en 'saksinfo' komponent
  return (
    <div>
      <StegGruppeIndikatorAksel id={params.id} />
      {children}
    </div>
  );
};

export default Layout;
