import { ReactNode } from 'react';
import { DokumentInfoBanner } from 'components/dokumentinfobanner/DokumentInfoBanner';
import { hentFlyt } from 'lib/services/dokumentmottakservice/dokumentMottakService';

interface LayoutProps {
  children: ReactNode;
  params: { id: string };
}

const Layout = async ({ children, params }: LayoutProps) => {
  // TODO: Høre med designer om vi trenger en 'saksinfo' komponent

  return (
    <div>
      <DokumentInfoBanner />
      {children}
    </div>
  );
};

export default Layout;
