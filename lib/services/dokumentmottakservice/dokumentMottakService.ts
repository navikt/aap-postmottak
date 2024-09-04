import { fetchProxy } from 'lib/fetchproxy/fetchProxy';
import { mockFlyt } from 'lib/mock/mockFlyt';
import { BehandlingFlytOgTilstand, LøsAvklaringsbehovPåBehandling } from 'lib/types/types';

const dokumentMottakApiBaseUrl = process.env.DOKUMENTMOTTAK_API_BASE_URL;
const dokumentMottakApiScope = process.env.DOKUMENTMOTTAK_API_SCOPE ?? '';

export const hentFlyt = async (behandlingsReferanse: string): Promise<BehandlingFlytOgTilstand> => {
  /*if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'localhost') {
    return mockFlyt;
  }*/
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsReferanse}/flyt`;
  return await fetchProxy<BehandlingFlytOgTilstand>(url, dokumentMottakApiScope, 'GET');
};

export const løsAvklaringsbehov = async (avklaringsBehov: LøsAvklaringsbehovPåBehandling) => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/løs-behov`;
  return await fetchProxy<void>(url, dokumentMottakApiScope, 'POST', avklaringsBehov);
};

export const hentDokumentUrlForJournalpostId = async (journalpostId: string): Promise<{ url: string }> => {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'localhost') {
    return { url: 'https://pdfobject.com/pdf/sample.pdf' };
  }
  const url = `${dokumentMottakApiBaseUrl}/api/dokument/${journalpostId}/hent`;
  return await fetchProxy<{ url: string }>(url, dokumentMottakApiScope, 'GET');
};

export const hentAlleBehandlinger = async () => {
  const url = `${dokumentMottakApiBaseUrl}/test/hentAlleBehandlinger`;
  return await fetchProxy<[{ id: string; status: string }]>(url, dokumentMottakApiScope, 'GET');
};
