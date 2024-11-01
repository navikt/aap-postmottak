import { hentFlyt } from 'lib/services/dokumentmottakservice/dokumentMottakService';
import { notFound, redirect } from 'next/navigation';

interface PageProps {
  behandlingsreferanse: string;
}

const Page = async ({ params }: { params: PageProps }) => {
  const flyt = await hentFlyt(params.behandlingsreferanse);

  if (flyt === undefined) {
    return notFound();
  }

  redirect(`/postmottak/${params.behandlingsreferanse}/${flyt.aktivGruppe}`);
};

export default Page;
