import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { FormField, FormFields } from '@navikt/aap-felles-react';
import { FieldPath, UseFormReturn } from 'react-hook-form';
import { SøknadFormFields } from './DigitaliserSøknad';
import { JaEllerNei, JaNeiAvbrutt } from '../../../lib/form';

interface Props {
  form: UseFormReturn<SøknadFormFields>;
  formFields: FormFields<FieldPath<SøknadFormFields>, SøknadFormFields>;
}

export const Student = ({ form, formFields }: Props) => {
  const erStudent = form.watch('erStudent');
  return (
    <VilkårsKort heading={'Student'}>
      <FormField form={form} formField={formFields.erStudent} />
      {erStudent === JaNeiAvbrutt.AVBRUTT && <FormField form={form} formField={formFields.studentKommeTilbake} />}
    </VilkårsKort>
  );
};
