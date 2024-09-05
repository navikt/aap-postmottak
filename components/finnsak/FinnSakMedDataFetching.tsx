import { FinnSak } from './FinnSak';
import { hentAvklarTemaGrunnlag, hentFlyt } from '../../lib/services/dokumentmottakservice/dokumentMottakService';
interface Props {
  journalpostId: string;
}
export const FinnSakMedDataFetching = async ({ journalpostId }: Props) => {
  const flyt = await hentFlyt(journalpostId);
  return <FinnSak behandlingsVersjon={flyt.behandlingVersjon} journalpostId={journalpostId}  />;
};
