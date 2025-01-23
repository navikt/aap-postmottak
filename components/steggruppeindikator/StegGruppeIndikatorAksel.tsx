'use client';

import { Stepper } from '@navikt/ds-react';
import style from './StegGruppeIndikator.module.css';
import { BehandlingFlytOgTilstand, FlytGruppe } from 'lib/types/types';

export const StegGruppeIndikatorAksel = ({
  behandlingsreferanse,
  stegGrupper,
  flytRespons,
}: {
  behandlingsreferanse: string;
  stegGrupper: FlytGruppe[];
  flytRespons: BehandlingFlytOgTilstand;
}) => {
  const visningsListe = stegGrupper.filter((steg) => steg.skalVises);
  const aktivtStegNummer = visningsListe.findIndex((steg) => steg.stegGruppe === flytRespons.aktivGruppe) + 1;

  return (
    <div className={style.stegMenyWrapper}>
      <Stepper orientation="horizontal" activeStep={aktivtStegNummer}>
        {visningsListe.map((steg, index) => (
          <Stepper.Step
            completed={steg.erFullført}
            key={index}
            href={`/postmottak/${behandlingsreferanse}/${steg.stegGruppe}`}
            interactive={steg.erFullført || flytRespons.aktivGruppe === steg.stegGruppe}
          >
            {steg.stegGruppe}
          </Stepper.Step>
        ))}
      </Stepper>
    </div>
  );
};
