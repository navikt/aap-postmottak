import { hentFlyt } from 'lib/services/dokumentmottakservice/dokumentMottakService';
import { notFound, redirect } from 'next/navigation';

interface PageProps {
  id: string;
}

const Page = async ({ params }: { params: PageProps }) => {
  const flyt = await hentFlyt(params.id);

  if (flyt === undefined) {
    return notFound();
  }

  redirect(`/postmottak/${params.id}/${flyt.aktivGruppe}`);
};

export default Page;
