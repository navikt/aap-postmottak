'use client';
import { Stepper } from '@navikt/ds-react';
import style from './StegGruppeIndikator.module.css';

export const StegGruppeIndikatorAksel = ({ id }: { id: string }) => {
  const dummySteg = ['VURDER_DOKUMENTTYPE', 'ENDELIG_JOURNALFØR'];

  return (
    <div className={style.stegMenyWrapper}>
      <Stepper orientation="horizontal" activeStep={0}>
        {dummySteg.map((steg, index) => (
          <Stepper.Step key={index} href={`/postmottak/${id}/${steg}`}>
            {steg}
          </Stepper.Step>
        ))}
      </Stepper>
    </div>
  );
};
