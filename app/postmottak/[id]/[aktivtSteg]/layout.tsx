import { SplitVindu } from 'components/splitvindu/SplitVindu';
import { StegGruppeIndikatorAksel } from 'components/steggruppeindikator/StegGruppeIndikatorAksel';
import { hentFlyt } from 'lib/services/dokumentmottakservice/dokumentMottakService';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  params: { id: string; aktivtSteg: string };
}

const Layout = async ({ children, params }: LayoutProps) => {
  const flyt = await hentFlyt(params.id);
  const stegGrupper = flyt.flyt.map((steg) => steg);
  return (
    <div>
      <StegGruppeIndikatorAksel id={params.id} stegGrupper={stegGrupper} aktivGruppe={params.aktivtSteg} />
      <SplitVindu>{children}</SplitVindu>
    </div>
  );
};

export default Layout;
