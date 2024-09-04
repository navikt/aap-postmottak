import { StegKolonne } from 'components/stegkolonne/StegKolonne';

interface PageProps {
  aktivtSteg: string;
  id: string;
}

const Page = async ({ params }: { params: PageProps }) => {
  return <StegKolonne aktivtSteg={params.aktivtSteg} behandlingsReferanse={params.id}  />;
};

export default Page;
