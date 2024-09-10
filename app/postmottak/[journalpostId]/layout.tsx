import { ReactNode } from 'react';
import { DokumentInfoBanner } from 'components/dokumentinfobanner/DokumentInfoBanner';
import styles from './layout.module.css';
import { StegGruppeIndikatorAksel } from 'components/steggruppeindikator/StegGruppeIndikatorAksel';
import { SplitVindu } from 'components/splitvindu/SplitVindu';
import {
    hentAvklarTemaGrunnlag, hentDokumentFraDokumentInfoId,
    hentFlyt
} from 'lib/services/dokumentmottakservice/dokumentMottakService';
import { Dokumentvisning } from 'components/dokumentvisning/Dokumentvisning';

interface LayoutProps {
  children: ReactNode;
  params: { journalpostId: string };
}

const Layout = async ({ children, params }: LayoutProps) => {
  const flyt = await hentFlyt(params.journalpostId);
  const stegGrupper = flyt.flyt.map((steg) => steg);

  // TODO: flytt dokumentidene til et annet endepunkt
  const grunnlag = await hentAvklarTemaGrunnlag(params.journalpostId);
  console.log('dokumenter', grunnlag?.dokumenter);
  const dokumentInfoId: string = `${grunnlag?.dokumenter?.[1]}`;

  return (
    <div className={styles.idLayoutWrapper}>
      <DokumentInfoBanner />
      <StegGruppeIndikatorAksel journalpostId={params.journalpostId} stegGrupper={stegGrupper} />
      <SplitVindu dokumentvisning={<Dokumentvisning journalpostId={params.journalpostId} dokumentInfoId={dokumentInfoId} />}>{children}</SplitVindu>
    </div>
  );
};

export default Layout;
