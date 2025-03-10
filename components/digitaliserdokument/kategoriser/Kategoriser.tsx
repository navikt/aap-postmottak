'use client';

import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { KategoriserDokumentKategori, Søknad } from '../../../lib/types/types';
import { Nesteknapp } from 'components/nesteknapp/Nesteknapp';
import { Submittable } from 'components/digitaliserdokument/DigitaliserDokument.tsx';
import { ServerSentEventStatusAlert } from 'components/serversenteventstatusalert/ServerSentEventStatusAlert';
import { ServerSentEventStatus } from 'app/api/post/[behandlingsreferanse]/hent/[gruppe]/[steg]/nesteSteg/route';

interface Props extends Submittable {
  kategori?: KategoriserDokumentKategori;
  readOnly: boolean;
  onKategoriChange: (kategori: KategoriserDokumentKategori) => void;
  status: ServerSentEventStatus | undefined;
}

interface FormFields {
  kategori: KategoriserDokumentKategori;
}

const kategorier: { label: string; value: KategoriserDokumentKategori }[] = [
  {
    label: 'Søknad',
    value: 'SØKNAD',
  },
  {
    label: 'Meldekort',
    value: 'MELDEKORT',
  },
  {
    label: 'Dialogmelding',
    value: 'DIALOGMELDING',
  },
  {
    label: 'Legeerklæring',
    value: 'LEGEERKLÆRING',
  },
  {
    label: 'Annet relevant dokument',
    value: 'ANNET_RELEVANT_DOKUMENT',
  },
];

const kategorierSomSkalDigitaliseres: KategoriserDokumentKategori[] = [
  'SØKNAD',
  'MELDEKORT',
  'ANNET_RELEVANT_DOKUMENT',
];

export const Kategoriser = ({ kategori, readOnly, submit, onKategoriChange, status }: Props) => {
  const { formFields, form } = useConfigForm<FormFields>(
    {
      kategori: {
        type: 'combobox',
        label: 'Velg kategori for dokument',
        rules: { required: 'Du må velge kategori' },
        options: kategorier,
        defaultValue: kategori,
      },
    },
    { readOnly }
  );
  form.watch((value) => value.kategori && onKategoriChange(value.kategori));

  return (
    <VilkårsKort heading={'Kategoriser'}>
      <form onSubmit={form.handleSubmit((data) => submit(data.kategori, null, null))}>
        <ServerSentEventStatusAlert status={status} />
        <FormField form={form} formField={formFields.kategori} />
        {kategori && !kategorierSomSkalDigitaliseres.includes(kategori) && <Nesteknapp>Neste</Nesteknapp>}
      </form>
    </VilkårsKort>
  );
};
