'use client';

import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { FormEvent, forwardRef, useImperativeHandle } from 'react';
import { Behovstype } from '../../../lib/form';
import { useLøsBehovOgGåTilNesteSteg } from '../../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { MeldePerioder } from './MeldePerioder';
import { ServerSentEventStatusAlert } from '../../serversenteventstatusalert/ServerSentEventStatusAlert';
import { setDokumentJson, Submittable } from '../DigitaliserDokument.tsx';

interface Props {
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
export const DigitaliserMeldekort = forwardRef<Submittable, Props>(
  ({ behandlingsVersjon, behandlingsreferanse, readOnly }: Props, ref) => {
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
    const { løsBehovOgGåTilNesteSteg, status } = useLøsBehovOgGåTilNesteSteg('DIGITALISER_DOKUMENT');

    useImperativeHandle(ref, () => ({
      submit(setDokumentJson: setDokumentJson) {
        console.log('submithandle called from digitaliser søknad');
        form.handleSubmit((data) => setDokumentJson(mapTilPliktkortKontrakt(data)));
      },
    }));

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
      <VilkårsKort heading={'Meldekort'}>
        <form onSubmit={onSubmit}>
          <ServerSentEventStatusAlert status={status} />
          <FormField form={form} formField={formFields.innsendtDato} />
          <MeldePerioder form={form} readOnly={readOnly} />
        </form>
      </VilkårsKort>
    );
  }
);

DigitaliserMeldekort.displayName = 'DigitaliserMeldekort';