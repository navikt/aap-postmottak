'use client';

import { Button, HStack, VStack } from '@navikt/ds-react';
import { useFieldArray, UseFormReturn } from 'react-hook-form';
import { PliktDag, PliktkortFormFields } from './DigitaliserMeldekort';
import { MeldePeriodeInput } from './MeldePeriodeInput';
import { PlusCircleIcon } from '@navikt/aksel-icons';

interface Props {
  form: UseFormReturn<PliktkortFormFields>;
}
export const MeldePerioder = ({ form }: Props) => {
  const { fields, append } = useFieldArray({ name: 'pliktPerioder', control: form.control });

  function leggTilNyPeriode() {
    const tomUke: PliktDag[] = Array.from(Array(7), () => ({ dato: undefined, arbeidsTimer: 0 }));
    append({ dager: tomUke });
  }
  return (
    <VStack gap={'3'}>
      {fields.map((_, periodeIndex) => (
        <MeldePeriodeInput key={`pliktperiodeinput-${periodeIndex}`} form={form} dagIndex={periodeIndex} />
      ))}
      <HStack>
        <Button
          icon={<PlusCircleIcon />}
          size={'small'}
          type={'button'}
          variant={'secondary'}
          onClick={() => leggTilNyPeriode()}
        >
          Legg til ny periode
        </Button>
      </HStack>
    </VStack>
  );
};
