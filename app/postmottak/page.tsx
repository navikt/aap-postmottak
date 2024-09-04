import { hentAlleBehandlinger } from 'lib/services/dokumentmottakservice/dokumentMottakService';
import Link from 'next/link';

const Page = async () => {
  const alleBehandlinger = await hentAlleBehandlinger();
  console.log(alleBehandlinger);
  return (
    <main>
      Her kommer postmottaket
      <ul>
        {alleBehandlinger.map((behandling) => (
          <li key={behandling.id}>
            <Link href={`/postmottak/${behandling.id}/`}>
              {behandling.id} - {behandling.status}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
