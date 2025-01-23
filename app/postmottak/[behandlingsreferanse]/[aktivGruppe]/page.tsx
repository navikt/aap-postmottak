import { StegKolonne } from 'components/stegkolonne/StegKolonne';
import { StegGruppe } from 'lib/types/types';
import {
  forberedBehandlingOgVentPåProsessering,
  hentBehandling,
} from 'lib/services/dokumentmottakservice/dokumentMottakService';
import { FlytProsesseringAlert } from 'components/flytprosesseringalert/FlytProsesseringAlert';

interface PageProps {
  aktivGruppe: StegGruppe;
  behandlingsreferanse: string;
}

const Page = async (props: { params: Promise<PageProps> }) => {
  const params = await props.params;
  const behandling = await hentBehandling(params.behandlingsreferanse);

  if (behandling.skalForberede) {
    const forberedBehandlingResponse = await forberedBehandlingOgVentPåProsessering(params.behandlingsreferanse);

    if (forberedBehandlingResponse && forberedBehandlingResponse.status === 'FEILET') {
      return <FlytProsesseringAlert flytProsessering={forberedBehandlingResponse} />;
    }
  }
  return <StegKolonne aktivGruppe={params.aktivGruppe} behandlingsreferanse={params.behandlingsreferanse} />;
};

export default Page;
