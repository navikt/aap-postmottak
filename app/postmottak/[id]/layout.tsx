import { ReactNode } from 'react';
import { DokumentInfoBanner } from 'components/dokumentinfobanner/DokumentInfoBanner';
import styles from './layout.module.css';
import { StegGruppeIndikatorAksel } from 'components/steggruppeindikator/StegGruppeIndikatorAksel';
import { SplitVindu } from 'components/splitvindu/SplitVindu';
import { hentDokumentUrlForJournalpostId, hentFlyt } from 'lib/services/dokumentmottakservice/dokumentMottakService';
import { Dokumentvisning } from 'components/dokumentvisning/Dokumentvisning';

interface LayoutProps {
  children: ReactNode;
  params: { id: string };
}

const Layout = async ({ children, params }: LayoutProps) => {
  const flyt = await hentFlyt(params.id);
  const stegGrupper = flyt.flyt.map((steg) => steg);

  const { url } = await hentDokumentUrlForJournalpostId(params.id);
  // TODO: Hent dokumentUrl fra backend

  return (
    <div className={styles.idLayoutWrapper}>
      <DokumentInfoBanner />
      <StegGruppeIndikatorAksel id={params.id} stegGrupper={stegGrupper} />
      <SplitVindu dokumentvisning={<Dokumentvisning dokumentUrl={url} />}>{children}</SplitVindu>
    </div>
  );
};

export default Layout;
