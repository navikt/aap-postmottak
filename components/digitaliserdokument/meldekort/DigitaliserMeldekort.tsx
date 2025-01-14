'use client';

import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { Button, HStack, VStack } from '@navikt/ds-react';
import { FormEvent } from 'react';
import { Behovstype } from '../../../lib/form';
import { useLøsBehovOgGåTilNesteSteg } from '../../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { MeldePerioder } from './MeldePerioder';
import { ServerSentEventStatusAlert } from '../../serversenteventstatusalert/ServerSentEventStatusAlert';
import { Nesteknapp } from 'components/nesteknapp/Nesteknapp';

interface Props {
  behandlingsVersjon: number;
  behandlingsreferanse: string;
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
export const DigitaliserMeldekort = ({ behandlingsVersjon, behandlingsreferanse }: Props) => {
  const { form, formFields } = useConfigForm<PliktkortFormFields>({
    innsendtDato: {
      type: 'date',
      label: 'Innsendt dato',
    },
    pliktPerioder: {
      type: 'fieldArray',
      defaultValue: [],
    },
  });
  const { løsBehovOgGåTilNesteSteg, status } = useLøsBehovOgGåTilNesteSteg('DIGITALISER_DOKUMENT');

  function mapTilPliktkortKontrakt(data: PliktkortFormFields) {
    return JSON.stringify(data);
  }
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    form.handleSubmit((data) => {
      løsBehovOgGåTilNesteSteg({
        behandlingVersjon: behandlingsVersjon,
        behov: {
          behovstype: Behovstype.DIGITALISER_DOKUMENT,
          strukturertDokument: mapTilPliktkortKontrakt(data),
        },
        // @ts-ignore
        referanse: behandlingsreferanse,
      });
    })(event);
  }
  return (
    <VilkårsKort heading={'Pliktkort'}>
      <form onSubmit={onSubmit}>
        <ServerSentEventStatusAlert status={status} />
        <FormField form={form} formField={formFields.innsendtDato} />
        <MeldePerioder form={form} />
        <Nesteknapp>Send inn</Nesteknapp>
      </form>
    </VilkårsKort>
  );
};
