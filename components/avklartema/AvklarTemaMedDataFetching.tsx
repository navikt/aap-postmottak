import { AvklarTema } from './AvklarTema';
import { hentFlyt } from '../../lib/services/dokumentmottakservice/dokumentMottakService';
interface Props {
  journalpostId: string;
}
export const AvklarTemaMedDataFetching = async ({ journalpostId }: Props) => {
  const flyt = await hentFlyt(journalpostId);
  return <AvklarTema behandlingsVersjon={flyt.behandlingVersjon} journalpostId={journalpostId} />;
};
