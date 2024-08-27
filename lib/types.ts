// Temp types, skal hentes fra Swagger etterhvert

export interface Flyt {
  flyt: {
    stegGruppe: string;
    erFullført: boolean;
    steg: {
      stegType: string;
      avklaringsbehov: unknown[];
      vilkårDTO: unknown;
    }[];
    skalVises: boolean;
  }[];
  aktivtSteg: string;
  aktivGruppe: string;
  vurdertSteg?: string;
  vurdertGruppe?: string;
  behandlingVersjon: number;
  prosessering: {
    status: string;
    ventendeOppgaver: unknown[];
  };
  visning: {
    saksbehandlerReadOnly: boolean;
    beslutterReadyOnly: boolean;
    visBeslutterKort: boolean;
    visVenteKort: boolean;
    kvalitetssikringReadOnly: boolean;
    visKvalitetssikringKort: boolean;
  };
}
