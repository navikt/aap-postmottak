import { FinnSak } from './FinnSak';
import {
  hentAvklarTemaGrunnlag,
  hentFinnSakGrunnlag,
  hentFlyt,
} from '../../lib/services/dokumentmottakservice/dokumentMottakService';
interface Props {
  journalpostId: string;
}
export const FinnSakMedDataFetching = async ({ journalpostId }: Props) => {
  const flyt = await hentFlyt(journalpostId);
  const grunnlag = await hentFinnSakGrunnlag(journalpostId);
  return <FinnSak
    behandlingsVersjon={flyt.behandlingVersjon}
    journalpostId={journalpostId}
    grunnlag={grunnlag}
  />;
};
