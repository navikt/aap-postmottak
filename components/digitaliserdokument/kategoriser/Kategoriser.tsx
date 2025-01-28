'use client';

import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { FormEvent } from 'react';
import { KategoriserDokumentKategori, Søknad } from '../../../lib/types/types';

interface Props {
  kategori: KategoriserDokumentKategori;
  onKategoriChange: (kategori: KategoriserDokumentKategori) => void;
  readOnly: boolean;
}
interface FormFields {
  kategori: KategoriserDokumentKategori;
}
const kategorier: { label: string; value: KategoriserDokumentKategori }[] = [
  {
    label: 'Aktivitetskort',
    value: 'AKTIVITETSKORT',
  },
  {
    label: 'Søknad',
    value: 'SØKNAD',
  },
  {
    label: 'Meldekort',
    value: 'PLIKTKORT',
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
    label: 'Legeerklæring avvist',
    value: 'LEGEERKLÆRING_AVVIST',
  },
];

export const Kategoriser = ({ kategori, readOnly, onKategoriChange }: Props) => {
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

  form.watch((value, info) => onKategoriChange(value.kategori!!));

  const onChange = (event: FormEvent<HTMLFormElement>) => {
    form.handleSubmit((data) => {
      onKategoriChange(data.kategori);
    });
  };

  return (
    <VilkårsKort heading={'Kategoriser'}>
      <form onChange={onChange}>
        <FormField form={form} formField={formFields.kategori} />
      </form>
    </VilkårsKort>
  );
};
