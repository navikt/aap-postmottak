import { hentFlyt } from 'lib/services/dokumentmottakservice/dokumentMottakService';
import { notFound, redirect } from 'next/navigation';

interface PageProps {
  journalpostId: string;
}

const Page = async ({ params }: { params: PageProps }) => {
  const flyt = await hentFlyt(params.journalpostId);

  if (flyt === undefined) {
    return notFound();
  }

  redirect(`/postmottak/${params.journalpostId}/${flyt.aktivGruppe}`);
};

export default Page;
