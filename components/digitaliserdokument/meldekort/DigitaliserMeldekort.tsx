'use client';

import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { MeldePerioder } from './MeldePerioder';
import { Submittable } from '../DigitaliserDokument.tsx';
import { Nesteknapp } from 'components/nesteknapp/Nesteknapp';

interface Props extends Submittable {
  behandlingsVersjon: number;
  behandlingsreferanse: string;
  readOnly: boolean;
}
export type PliktDag = {
  dato?: Date;
  arbeidsTimer?: number;
};
export type PliktPeriode = {
  dager: Array<PliktDag>;
};
export interface PliktkortFormFields {
  innsendtDato?: Date;
  pliktPerioder?: PliktPeriode[];
}
export const DigitaliserMeldekort = ({ readOnly, submit }: Props) => {
  const { form, formFields } = useConfigForm<PliktkortFormFields>(
    {
      innsendtDato: {
        type: 'date',
        label: 'Innsendt dato',
      },
      pliktPerioder: {
        type: 'fieldArray',
        defaultValue: [],
      },
    },
    { readOnly }
  );

  function mapTilPliktkortKontrakt(data: PliktkortFormFields) {
    return JSON.stringify(data);
  }
  return (
    <VilkårsKort heading={'Meldekort'}>
      <form onSubmit={form.handleSubmit((data) => submit('PLIKTKORT', mapTilPliktkortKontrakt(data), null))}>
        <FormField form={form} formField={formFields.innsendtDato} />
        <MeldePerioder form={form} readOnly={readOnly} />
        <Nesteknapp>Send Inn</Nesteknapp>
      </form>
    </VilkårsKort>
  );
};

DigitaliserMeldekort.displayName = 'DigitaliserMeldekort';
