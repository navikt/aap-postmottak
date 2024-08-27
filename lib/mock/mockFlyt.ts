import { Flyt } from 'lib/types';

export const mockFlyt: Flyt = {
  flyt: [
    {
      stegGruppe: 'VURDER_DOKUMENTTYPE',
      erFullført: false,
      steg: [
        {
          stegType: 'VURDER_DOKUMENTTYPE',
          avklaringsbehov: [],
          vilkårDTO: {},
        },
      ],
      skalVises: true,
    },
    {
      stegGruppe: 'ENDELIG_JOURNALFØR',
      erFullført: false,
      steg: [
        {
          stegType: 'ENDELIG_JOURNALFØR',
          avklaringsbehov: [],
          vilkårDTO: {},
        },
      ],
      skalVises: false,
    },
  ],
  aktivtSteg: 'VURDER_DOKUMENTTYPE',
  aktivGruppe: 'VURDER_DOKUMENTTYPE',
  behandlingVersjon: 0,
  prosessering: {
    status: 'VENTER',
    ventendeOppgaver: [],
  },
  visning: {
    saksbehandlerReadOnly: false,
    beslutterReadyOnly: false,
    visBeslutterKort: false,
    visVenteKort: false,
    kvalitetssikringReadOnly: false,
    visKvalitetssikringKort: false,
  },
};
