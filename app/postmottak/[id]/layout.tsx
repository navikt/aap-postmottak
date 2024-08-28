import { StegGruppeIndikatorAksel } from 'components/steggruppeindikator/StegGruppeIndikatorAksel';
import { ReactNode } from 'react';
import { HGrid } from '@navikt/ds-react';
import { SplitVindu } from 'components/splitvindu/SplitVindu';
import { DokumentInfoBanner } from 'components/dokumentinfobanner/DokumentInfoBanner';

interface LayoutProps {
  children: ReactNode;
  params: { id: string };
}

const Layout = async ({ children, params }: LayoutProps) => {
  // TODO: Høre med designer om vi trenger en 'saksinfo' komponent
  return (
    <div>
      <DokumentInfoBanner />
      <StegGruppeIndikatorAksel id={params.id} />
      <SplitVindu>{children}</SplitVindu>
    </div>
  );
};

export default Layout;
