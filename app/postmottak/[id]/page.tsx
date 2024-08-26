import { notFound, redirect } from 'next/navigation';

interface PageProps {
  id: string;
}

interface Flyt {
  aktivtSteg: string;
  steg: { stegType: string; erFullført: boolean }[];
}

const Page = async ({ params }: { params: PageProps }) => {
  // TODO: Hent flyt
  const flyt: Flyt = { aktivtSteg: 'VURDER_DOKUMENTTYPE', steg: [] };

  if (flyt === undefined) {
    return notFound();
  }

  redirect(`/postmottak/${params.id}/${flyt?.aktivtSteg}`);
};

export default Page;
