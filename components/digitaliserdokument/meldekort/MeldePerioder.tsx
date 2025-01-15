'use client';

import { Button, HStack, VStack } from '@navikt/ds-react';
import { useFieldArray, UseFormReturn } from 'react-hook-form';
import { PliktDag, PliktkortFormFields } from './DigitaliserMeldekort';
import { MeldePeriodeInput } from './MeldePeriodeInput';
import { PlusCircleIcon } from '@navikt/aksel-icons';

interface Props {
  form: UseFormReturn<PliktkortFormFields>;
  readOnly: boolean;
}
export const MeldePerioder = ({ form, readOnly }: Props) => {
  const { fields, append } = useFieldArray({ name: 'pliktPerioder', control: form.control });

  function leggTilNyPeriode() {
    const tomUke: PliktDag[] = Array.from(Array(7), () => ({ dato: undefined, arbeidsTimer: 0 }));
    append({ dager: tomUke });
  }
  return (
    <VStack gap={'3'}>
      {fields.map((_, periodeIndex) => (
        <MeldePeriodeInput
          key={`pliktperiodeinput-${periodeIndex}`}
          form={form}
          dagIndex={periodeIndex}
          readOnly={readOnly}
        />
      ))}
      <HStack>
        <Button
          icon={<PlusCircleIcon />}
          size={'small'}
          type={'button'}
          variant={'secondary'}
          onClick={() => leggTilNyPeriode()}
          disabled={readOnly}
        >
          Legg til ny periode
        </Button>
      </HStack>
    </VStack>
  );
};
