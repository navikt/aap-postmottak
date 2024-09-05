import { AvklarTema } from './AvklarTema';
import { hentAvklarTemaGrunnlag, hentFlyt } from '../../lib/services/dokumentmottakservice/dokumentMottakService';
interface Props {
  journalpostId: string;
}
export const AvklarTemaMedDataFetching = async ({ journalpostId }: Props) => {
  const flyt = await hentFlyt(journalpostId);
  const grunnlag = await hentAvklarTemaGrunnlag(journalpostId);
  return <AvklarTema behandlingsVersjon={flyt.behandlingVersjon} journalpostId={journalpostId} grunnlag={grunnlag} />;
};
