import { fetchProxy } from 'lib/fetchproxy/fetchProxy';
import { mockFlyt } from 'lib/mock/mockFlyt';
import {
  AvklarTemaGrunnlag,
  BehandlingFlytOgTilstand,
  KategoriserGrunnlag,
  LøsAvklaringsbehovPåBehandling
} from 'lib/types/types';

const dokumentMottakApiBaseUrl = process.env.DOKUMENTMOTTAK_API_BASE_URL;
const dokumentMottakApiScope = process.env.DOKUMENTMOTTAK_API_SCOPE ?? '';

export const hentFlyt = async (journalpostId: string): Promise<BehandlingFlytOgTilstand> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${journalpostId}/flyt`;
  return await fetchProxy<BehandlingFlytOgTilstand>(url, dokumentMottakApiScope, 'GET');
};

export const hentAvklarTemaGrunnlag = async (journalpostId: string): Promise<AvklarTemaGrunnlag> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${journalpostId}/grunnlag/avklarTemaVurdering`;
  return await fetchProxy<AvklarTemaGrunnlag>(url, dokumentMottakApiScope, 'GET');
};
export const hentKategoriserGrunnlag = async (journalpostId: string): Promise<KategoriserGrunnlag> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${journalpostId}/grunnlag/kategorisering`;
  return await fetchProxy<KategoriserGrunnlag>(url, dokumentMottakApiScope, 'GET');
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

// TODO: Fjern denne - testendepunkt
export const opprettBehandlingForJournalpost = async (body: {referanse: number}) => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling`;
  return await fetchProxy<{ referanse: number }>(url, dokumentMottakApiScope, 'POST', body);
}