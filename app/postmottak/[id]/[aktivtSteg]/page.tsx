import { StegKolonne } from 'components/stegkolonne/StegKolonne';

interface PageProps {
  aktivtSteg: string;
}

const Page = async ({ params }: { params: PageProps }) => {
  return <StegKolonne aktivtSteg={params.aktivtSteg} />;
};

export default Page;
