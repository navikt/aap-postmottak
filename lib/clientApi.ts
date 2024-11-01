import { LøsAvklaringsbehovPåBehandling, SettPåVentRequest } from './types/types';

async function fetchProxy<ResponseBody>(
  url: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  body?: object,
  nextTag?: string
): Promise<ResponseBody | undefined> {
  try {
    const res = await fetch(url, {
      method,
      body: body && JSON.stringify(body),
      ...(nextTag ? { next: { tags: [nextTag] } } : {}),
    });

    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      console.error(data.message);
      return undefined;
    }
  } catch (e) {
    throw new Error('Noe gikk galt.');
  }
}

export function løsBehov(avklaringsBehov: LøsAvklaringsbehovPåBehandling) {
  return fetchProxy('/api/post/los-behov/', 'POST', avklaringsBehov);
}
export function settPåVent(body: SettPåVentRequest) {
  return fetchProxy('/api/post/sett-pa-vent/', 'POST', body);
}
export function endreTema(behandlingsreferanse: string): Promise<string|undefined> {
  return fetchProxy<{redirectUrl: string}>(`/api/post/${behandlingsreferanse}/endre-tema`, 'POST', {}).then(resp => resp?.redirectUrl);
}
// TODO: Test-endepunkt - skal fjernes
export function opprettBehandling(journalpostId: number) {
  return fetchProxy<{ referanse: number }>('/api/test/behandling/opprett/', 'POST', { referanse: journalpostId });
}

// TODO: Test/admin endepunkt
// TODO: Fjern denne - testendepunkt eller featuretoggle kun til test - skal ikke i prod
export const rekjørFeiledeJobber = async () => {
  return fetchProxy('/drift/api/jobb/rekjorAlleFeilede/', 'GET');
};

export interface SaksInformasjon {
  søker: {
    navn: string;
    fnr: string;
  };
  labels: { type: string }[];
  sistEndret: {
    navn: string;
    tidspunkt: string;
  };
}
export async function hentSaksinfo(): Promise<SaksInformasjon> {
  return {
    søker: {
      navn: 'Peder Ås',
      fnr: '123456 78910',
    },
    labels: [{ type: 'Førstegangsbehandling' }, { type: 'Fra sykepenger' }, { type: 'Lokalkontor: NAV Grünerløkka' }],
    sistEndret: {
      navn: 'Marte Kirkerud',
      tidspunkt: '12.12.2020 kl 12:12',
    },
  };
}
