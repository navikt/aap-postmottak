import { StegKolonne } from 'components/stegkolonne/StegKolonne';
import { StegGruppe } from 'lib/types/types';

interface PageProps {
  aktivGruppe: StegGruppe;
  journalpostId: string;
}

const Page = async ({ params }: { params: PageProps }) => {
  return <StegKolonne aktivGruppe={params.aktivGruppe} journalpostId={params.journalpostId} />;
};

export default Page;
