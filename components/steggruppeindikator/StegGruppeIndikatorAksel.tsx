'use client';
import { Stepper } from '@navikt/ds-react';
import style from './StegGruppeIndikator.module.css';
import { FlytGruppe } from 'lib/types/types';
import { useRouter } from 'next/navigation';

export const StegGruppeIndikatorAksel = ({
  id,
  stegGrupper,
  aktivGruppe,
}: {
  id: string;
  stegGrupper: FlytGruppe[];
  aktivGruppe: string;
}) => {
  const aktivtStegNummer = stegGrupper.findIndex((steg) => steg.stegGruppe === aktivGruppe) + 1;
  const router = useRouter();
  return (
    <div className={style.stegMenyWrapper}>
      <Stepper orientation="horizontal" activeStep={aktivtStegNummer}>
        {stegGrupper.map((steg, index) => (
          <Stepper.Step
            as="button"
            completed={steg.erFullført}
            key={index}
            onClick={() => router.push(`/postmottak/${id}/${steg.stegGruppe}`)}
          >
            {steg.stegGruppe}
          </Stepper.Step>
        ))}
      </Stepper>
    </div>
  );
};
