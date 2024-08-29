import { fetchProxy } from 'lib/fetchproxy/fetchProxy';
import { mockFlyt } from 'lib/mock/mockFlyt';
import { BehandlingFlytOgTilstand } from 'lib/types/types';

const dokumentMottakApiBaseUrl = process.env.DOKUMENTMOTTAK_API_BASE_URL;
const dokumentMottakApiScope = process.env.DOKUMENTMOTTAK_API_SCOPE ?? '';

export const hentFlyt = async (behandlingsReferanse: string): Promise<BehandlingFlytOgTilstand> => {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'localhost') {
    return mockFlyt;
  }
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsReferanse}/flyt`;
  return await fetchProxy<BehandlingFlytOgTilstand>(url, dokumentMottakApiScope, 'GET');
};

export const hentDokumentUrlForJournalpostId = async (journalpostId: string): Promise<{ url: string }> => {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'localhost') {
    return { url: 'https://pdfobject.com/pdf/sample.pdf' };
  }
  const url = `${dokumentMottakApiBaseUrl}/api/dokument/${journalpostId}/hent`;
  return await fetchProxy<{ url: string }>(url, dokumentMottakApiScope, 'GET');
};
