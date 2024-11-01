import { Kategoriser } from './Kategoriser';
import {
  hentAvklarTemaGrunnlag,
  hentFlyt,
  hentKategoriserGrunnlag
} from '../../lib/services/dokumentmottakservice/dokumentMottakService';
interface Props {
  behandlingsreferanse: string;
}
export const KategoriserMedDataFetching = async ({ behandlingsreferanse }: Props) => {
  const flyt = await hentFlyt(behandlingsreferanse);
  const grunnlag = await hentKategoriserGrunnlag(behandlingsreferanse);
  return <Kategoriser behandlingsVersjon={flyt.behandlingVersjon} behandlingsreferanse={behandlingsreferanse} grunnlag={grunnlag}  />;
};
