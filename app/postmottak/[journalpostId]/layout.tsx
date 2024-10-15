import { ReactNode } from 'react';
import { DokumentInfoBanner } from 'components/dokumentinfobanner/DokumentInfoBanner';
import styles from './layout.module.css';
import { StegGruppeIndikatorAksel } from 'components/steggruppeindikator/StegGruppeIndikatorAksel';
import { SplitVindu } from 'components/splitvindu/SplitVindu';
import { hentFlyt, hentJournalpostInfo } from 'lib/services/dokumentmottakservice/dokumentMottakService';
import { Dokumentvisning } from 'components/dokumentvisning/Dokumentvisning';
import { BehandlingPVentMedDataFetching } from '../../../components/behandlingpåvent/BehandlingPåVentMedDataFetching';
import { FlytProsesseringAlert } from '../../../components/flytprosesseringalert/FlytProsesseringAlert';

interface LayoutProps {
  children: ReactNode;
  params: { journalpostId: string };
}

const Layout = async ({ children, params }: LayoutProps) => {
  const flyt = await hentFlyt(params.journalpostId);
  const stegGrupper = flyt.flyt.map((steg) => steg);

  const journalpostInfo = await hentJournalpostInfo(params.journalpostId);
  const dokumenter = journalpostInfo.dokumenter;
  return (
    <div className={styles.idLayoutWrapper}>
      <DokumentInfoBanner journalpostId={params.journalpostId} behandlingsVersjon={flyt.behandlingVersjon} />
      <StegGruppeIndikatorAksel journalpostId={params.journalpostId} stegGrupper={stegGrupper} />
      {flyt.prosessering.status === 'FEILET' && <FlytProsesseringAlert flytProsessering={flyt.prosessering} />}
      {flyt.visning.visVentekort ? (
        <SplitVindu dokumentvisning={<Dokumentvisning journalpostId={params.journalpostId} dokumenter={dokumenter} />}>
          <BehandlingPVentMedDataFetching journalpostId={params.journalpostId} />
        </SplitVindu>
      ) : (
        <SplitVindu dokumentvisning={<Dokumentvisning journalpostId={params.journalpostId} dokumenter={dokumenter} />}>
          {children}
        </SplitVindu>
      )}
    </div>
  );
};

export default Layout;
