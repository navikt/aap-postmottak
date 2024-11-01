import { StegKolonne } from 'components/stegkolonne/StegKolonne';
import { StegGruppe } from 'lib/types/types';

interface PageProps {
  aktivGruppe: StegGruppe;
  behandlingsreferanse: string;
}

const Page = async ({ params }: { params: PageProps }) => {
  return <StegKolonne aktivGruppe={params.aktivGruppe} behandlingsreferanse={params.behandlingsreferanse} />;
};

export default Page;
