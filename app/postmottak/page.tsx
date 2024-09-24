import { hentAlleBehandlinger } from 'lib/services/dokumentmottakservice/dokumentMottakService';
import Link from 'next/link';
import { OpprettBehandling } from 'components/test/behandling/OpprettBehandling';
import { RekjørFeilede } from 'components/test/postmottak/RekjørFeilede';
import { VStack } from '@navikt/ds-react';

const Page = async () => {
  const alleBehandlinger = (await hentAlleBehandlinger()).sort(
    (a, b) => Date.parse(b.opprettet) - Date.parse(a.opprettet)
  );

  console.log(alleBehandlinger);

  return (
    <main>
      Her kommer postmottaket
      <div></div>
      <ul>
        {alleBehandlinger.map((behandling) => (
          <li key={behandling.id}>
            <Link href={`/postmottak/${behandling.id}/`}>
              {behandling.id} - {behandling.status} - {behandling.opprettet}
            </Link>
          </li>
        ))}
      </ul>
      <div style={{ maxWidth: 'var(--a-breakpoint-sm)' }}>
        <VStack gap={'6'}>
          <OpprettBehandling />
          <RekjørFeilede />
        </VStack>
      </div>
    </main>
  );
};

export default Page;
