import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { FormField, FormFields } from '@navikt/aap-felles-react';
import { FieldPath, UseFormReturn } from 'react-hook-form';
import { SøknadFormFields } from './DigitaliserSøknad';
import { JaNeiAvbruttIkkeOppgitt } from '../../../lib/form';
import { VStack } from '@navikt/ds-react';

interface Props {
  form: UseFormReturn<SøknadFormFields>;
  formFields: FormFields<FieldPath<SøknadFormFields>, SøknadFormFields>;
}

export const Student = ({ form, formFields }: Props) => {
  const erStudent = form.watch('erStudent');
  return (
    <VStack gap={'3'}>
      <FormField form={form} formField={formFields.erStudent} />
      {erStudent === JaNeiAvbruttIkkeOppgitt.AVBRUTT && (
        <FormField form={form} formField={formFields.studentKommeTilbake} />
      )}
    </VStack>
  );
};
