import { BehandlingPåVentKort } from './BehandlingPåVentKort';
import { hentVenteInformasjon } from '../../lib/services/dokumentmottakservice/dokumentMottakService';

interface Props {
  journalpostId: string;
}
export const BehandlingPVentMedDataFetching = async ({ journalpostId }: Props) => {
  const venteInfo = await hentVenteInformasjon(journalpostId);
  return <BehandlingPåVentKort informasjon={venteInfo} />;
};
