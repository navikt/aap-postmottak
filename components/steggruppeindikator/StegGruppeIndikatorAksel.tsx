'use client';

import { Stepper } from '@navikt/ds-react';
import style from './StegGruppeIndikator.module.css';
import { FlytGruppe } from 'lib/types/types';
import { useParams, useRouter } from 'next/navigation';

export const StegGruppeIndikatorAksel = ({
  journalpostId,
  stegGrupper,
}: {
  journalpostId: string;
  stegGrupper: FlytGruppe[];
}) => {
  const { aktivGruppe } = useParams();
  const visningsListe = stegGrupper.filter((steg) => steg.skalVises);
  const aktivtStegNummer = visningsListe.findIndex((steg) => steg.stegGruppe === aktivGruppe) + 1;
  const router = useRouter();

  return (
    <div className={style.stegMenyWrapper}>
      <Stepper orientation="horizontal" activeStep={aktivtStegNummer}>
        {visningsListe.map((steg, index) => (
          <Stepper.Step
            as="button"
            completed={steg.erFullført}
            key={index}
            onClick={() => router.push(`/postmottak/${journalpostId}/${steg.stegGruppe}`)}
            interactive={steg.erFullført}
          >
            {steg.stegGruppe}
          </Stepper.Step>
        ))}
      </Stepper>
    </div>
  );
};
