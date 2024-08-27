import { BehandlingFlytOgTilstand } from 'lib/types/types';

export const mockFlyt: BehandlingFlytOgTilstand = {
  flyt: [
    {
      stegGruppe: 'START_BEHANDLING',
      erFullført: false,
      steg: [
        {
          stegType: 'START_BEHANDLING',
          avklaringsbehov: [],
          vilkårDTO: undefined,
        },
      ],
      skalVises: true,
    },
    {
      stegGruppe: 'KATEGORISER',
      erFullført: false,
      steg: [
        {
          stegType: 'KATEGORISER_DOKUMENT',
          avklaringsbehov: [],
          vilkårDTO: undefined,
        },
      ],
      skalVises: false,
    },
  ],
  aktivtSteg: 'KATEGORISER_DOKUMENT',
  aktivGruppe: 'KATEGORISER',
  behandlingVersjon: 0,
  prosessering: {
    status: 'FERDIG',
    ventendeOppgaver: [],
  },
  visning: {
    beslutterReadOnly: false,
    kvalitetssikringReadOnly: false,
    saksbehandlerReadOnly: false,
    visBeslutterKort: false,
    visKvalitetssikringKort: false,
    visVentekort: false,
  },
};
