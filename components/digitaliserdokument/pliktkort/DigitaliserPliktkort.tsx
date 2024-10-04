'use client';

import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { Button, HStack, VStack } from '@navikt/ds-react';
import { FormEvent } from 'react';
import { Behovstype } from '../../../lib/form';
import { useLøsBehovOgGåTilNesteSteg } from '../../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { PliktPerioder } from './PliktPerioder';

interface Props {
  behandlingsVersjon: number;
  journalpostId: string;
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
export const DigitaliserPliktkort = ({ behandlingsVersjon, journalpostId }: Props) => {
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
  const { løsBehovOgGåTilNesteSteg } = useLøsBehovOgGåTilNesteSteg('DIGITALISER_DOKUMENT');

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
        //TODO: dette skal være referanse: string
        // @ts-ignore
        referanse: parseInt(journalpostId),
      });
    })(event);
  }
  return (
    <VilkårsKort heading={'Pliktkort'}>
      <form onSubmit={onSubmit}>
        <VStack gap={'3'}>
          <FormField form={form} formField={formFields.innsendtDato} />
          <PliktPerioder form={form} />
          <HStack>
            <Button>Send inn</Button>
          </HStack>
        </VStack>
      </form>
    </VilkårsKort>
  );
};
