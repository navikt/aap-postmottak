import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { Button, HStack, Table } from '@navikt/ds-react';
import { useFieldArray, UseFormReturn } from 'react-hook-form';
import { SøknadFormFields, Barn } from './DigitaliserSøknad';
import { useState } from 'react';
import { SelectWrapper, TextFieldWrapper } from '@navikt/aap-felles-react';
import { TrashIcon } from '@navikt/aksel-icons';

interface Props {
  form: UseFormReturn<SøknadFormFields>;
}
export const Barnetillegg = ({ form }: Props) => {
  const { fields, append, remove } = useFieldArray({ control: form.control, name: 'oppgitteBarn' });
  return (
    <VilkårsKort heading={'Barnetillegg'}>
      {fields.length > 0 && (
        <Table size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">Fødselsnr.</Table.HeaderCell>
              <Table.HeaderCell scope="col">Fornavn</Table.HeaderCell>
              <Table.HeaderCell scope="col">Etternavn</Table.HeaderCell>
              <Table.HeaderCell scope="col">Relasjon</Table.HeaderCell>
              <Table.HeaderCell scope="col"></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {fields.map(({ fnr }, i) => {
              return (
                <Table.Row key={`${i}-${fnr}`}>
                  <Table.DataCell>
                    <TextFieldWrapper
                      label={'Fødselsnummer'}
                      hideLabel={true}
                      type={'text'}
                      name={`oppgitteBarn.${i}.fnr`}
                      control={form.control}
                      rules={{
                        required:
                          'Fødselsnummer er påkrevd. Sett postoppgaven på vent og innhent fødselsnummer hvis dette mangler.',
                      }}
                    />
                  </Table.DataCell>
                  <Table.DataCell>
                    <TextFieldWrapper
                      label={'Fornavn'}
                      hideLabel={true}
                      type={'text'}
                      name={`oppgitteBarn.${i}.fornavn`}
                      control={form.control}
                    />
                  </Table.DataCell>
                  <Table.DataCell>
                    <TextFieldWrapper
                      label={'Etternavn'}
                      hideLabel={true}
                      type={'text'}
                      name={`oppgitteBarn.${i}.etternavn`}
                      control={form.control}
                    />
                  </Table.DataCell>
                  <Table.DataCell>
                    <SelectWrapper
                      label={'Relasjon'}
                      hideLabel={true}
                      name={`oppgitteBarn.${i}.relasjon`}
                      control={form.control}
                    >
                      <option value={'FORELDER'}>Forelder</option>
                      <option value={'FOSTERFORELDER'}>Fosterforelder</option>
                    </SelectWrapper>
                  </Table.DataCell>
                  <Table.DataCell>
                    <Button
                      aria-label={'Slett'}
                      size={'small'}
                      icon={<TrashIcon title={'Slett'} />}
                      variant={'secondary-neutral'}
                      type={'button'}
                      onClick={() => remove(i)}
                    />
                  </Table.DataCell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      )}
      {/*@ts-ignore*/}
      <HStack padding={'4 0 0 0'}>
        <Button size={'small'} type={'button'} onClick={() => append({})}>
          Legg til
        </Button>
      </HStack>
    </VilkårsKort>
  );
};
