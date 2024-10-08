import { ReactNode } from 'react';
import { DokumentInfoBanner } from 'components/dokumentinfobanner/DokumentInfoBanner';
import styles from './layout.module.css';
import { StegGruppeIndikatorAksel } from 'components/steggruppeindikator/StegGruppeIndikatorAksel';
import { SplitVindu } from 'components/splitvindu/SplitVindu';
import {
    hentFlyt, hentJournalpostInfo
} from 'lib/services/dokumentmottakservice/dokumentMottakService';
import { Dokumentvisning } from 'components/dokumentvisning/Dokumentvisning';

interface LayoutProps {
  children: ReactNode;
  params: { journalpostId: string };
}

const Layout = async ({ children, params }: LayoutProps) => {
  const flyt = await hentFlyt(params.journalpostId);
  const stegGrupper = flyt.flyt.map((steg) => steg);

    const journalpostInfo = await hentJournalpostInfo(params.journalpostId)
    const dokumenter = journalpostInfo.dokumenter;

  return (
    <div className={styles.idLayoutWrapper}>
      <DokumentInfoBanner />
      <StegGruppeIndikatorAksel journalpostId={params.journalpostId} stegGrupper={stegGrupper} />
      <SplitVindu dokumentvisning={<Dokumentvisning journalpostId={params.journalpostId} dokumenter={dokumenter} />}>{children}</SplitVindu>
    </div>
  );
};

export default Layout;
