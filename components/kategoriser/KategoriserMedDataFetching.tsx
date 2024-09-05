import { Kategoriser } from './Kategoriser';
import {
  hentAvklarTemaGrunnlag,
  hentFlyt,
  hentKategoriserGrunnlag
} from '../../lib/services/dokumentmottakservice/dokumentMottakService';
interface Props {
  journalpostId: string;
}
export const KategoriserMedDataFetching = async ({ journalpostId }: Props) => {
  const flyt = await hentFlyt(journalpostId);
  const grunnlag = await hentKategoriserGrunnlag(journalpostId);
  return <Kategoriser behandlingsVersjon={flyt.behandlingVersjon} journalpostId={journalpostId} grunnlag={grunnlag}  />;
};
