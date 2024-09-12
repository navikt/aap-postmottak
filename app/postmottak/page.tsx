import { hentAlleBehandlinger } from 'lib/services/dokumentmottakservice/dokumentMottakService';
import Link from 'next/link';
import {OpprettBehandling} from "../../components/test/behandling/OpprettBehandling";

const Page = async () => {
  const alleBehandlinger = (await hentAlleBehandlinger()).sort(
    (a, b) => Date.parse(a.opprettet) - Date.parse(b.opprettet)
  );

  
  console.log(alleBehandlinger);
  return (
    <main>
      Her kommer postmottaket
      <ul>
        {alleBehandlinger.map((behandling) => (
          <li key={behandling.id}>
            <Link href={`/postmottak/${behandling.id}/`}>
              {behandling.id} - {behandling.status} - {behandling.opprettet}
            </Link>
          </li>
        ))}
      </ul>
      <OpprettBehandling/>
    </main>
  );
};

export default Page;
