import {fetchPdf, fetchProxy} from 'lib/fetchproxy/fetchProxy';
import {
  AvklarTemaGrunnlag,
  BehandlingFlytOgTilstand, FinnSakGrunnlag,
  JournalpostInfo,
  KategoriserGrunnlag,
  LøsAvklaringsbehovPåBehandling, StruktureringGrunnlag,
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
export const hentFinnSakGrunnlag = async (journalpostId: string): Promise<FinnSakGrunnlag> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${journalpostId}/grunnlag/finnSak`;
  return await fetchProxy<FinnSakGrunnlag>(url, dokumentMottakApiScope, 'GET');
};
export const hentKategoriserGrunnlag = async (journalpostId: string): Promise<KategoriserGrunnlag> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${journalpostId}/grunnlag/kategorisering`;
  return await fetchProxy<KategoriserGrunnlag>(url, dokumentMottakApiScope, 'GET');
};
export const hentDigitaliseringGrunnlag = async (journalpostId: string): Promise<StruktureringGrunnlag> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${journalpostId}/grunnlag/strukturering`;
  return await fetchProxy<StruktureringGrunnlag>(url, dokumentMottakApiScope, 'GET');
};
export const hentJournalpostInfo = async (journalpostId: string): Promise<JournalpostInfo> => {
  const url = `${dokumentMottakApiBaseUrl}/api/dokumenter/${journalpostId}/info`;
  return fetchProxy<JournalpostInfo>(url, dokumentMottakApiScope, 'GET');
}

export const løsAvklaringsbehov = async (avklaringsBehov: LøsAvklaringsbehovPåBehandling) => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/løs-behov`;
  return await fetchProxy<void>(url, dokumentMottakApiScope, 'POST', avklaringsBehov);
};
export const hentDokumentFraDokumentInfoId = async (journalpostId: string, dokumentInfoId: string): Promise<Blob | undefined> => {
  return fetchPdf(
      `${dokumentMottakApiBaseUrl}/api/dokumenter/${journalpostId}/${dokumentInfoId}`,
      dokumentMottakApiScope
  );
}

export const hentAlleBehandlinger = async () => {
  const url = `${dokumentMottakApiBaseUrl}/test/hentAlleBehandlinger`;
  return await fetchProxy<[{ id: string; status: string; opprettet: string }]>(url, dokumentMottakApiScope, 'GET');
};

// TODO: Fjern denne - testendepunkt
export const opprettBehandlingForJournalpost = async (body: {referanse: number}) => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling`;
  return await fetchProxy<{ referanse: number }>(url, dokumentMottakApiScope, 'POST', body);
}