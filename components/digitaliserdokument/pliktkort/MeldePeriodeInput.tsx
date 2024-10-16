import { Button, DatePicker, Table, TextField } from '@navikt/ds-react';
import { PliktDag, PliktkortFormFields } from './DigitaliserMeldekort';
import { add, format } from 'date-fns';
import { useFieldArray, UseFormReturn } from 'react-hook-form';
import { useEffect, useState } from 'react';
import styles from './MeldePeriodeInput.module.css';

interface Props {
  form: UseFormReturn<PliktkortFormFields>;
  dagIndex: number;
}
export const MeldePeriodeInput = ({ form, dagIndex }: Props) => {
  const [isVelgDatoÅpen, setIsVelgDatoÅpen] = useState<boolean>(false);
  const [valgtDato, setValgtDato] = useState<Date>();
  const { fields, update } = useFieldArray({
    name: `pliktPerioder.${dagIndex}.dager`,
    control: form.control,
  });
  useEffect(() => {
    if (valgtDato) {
      fields.forEach((dag, index) => {
        update(index, { ...dag, dato: add(valgtDato, { days: index }) });
      });
    }
  }, [valgtDato]);
  const erAnnenDagEnnMandag = [(date: Date) => date.getDay() !== 1];
  return (
    <div className={styles.pliktPeriodeInput}>
      <Button type={'button'} size={'small'} variant={'secondary-neutral'} onClick={() => setIsVelgDatoÅpen((x) => !x)}>
        Endre periode
      </Button>
      <DatePicker
        today={new Date()}
        disabled={erAnnenDagEnnMandag}
        onSelect={(val) => {
          setValgtDato(val);
          setIsVelgDatoÅpen(false);
        }}
        open={isVelgDatoÅpen}
        onClose={() => setIsVelgDatoÅpen(false)}
      />
      <Table size={'small'}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            {fields?.map((pliktDag: PliktDag, j) => (
              <Table.HeaderCell key={j}>
                {pliktDag.dato ? format(pliktDag.dato, 'dd.MM.yyyy') : 'velg dato'}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>Arbeidstimer</Table.DataCell>
            {fields?.map((pliktDag: PliktDag, i) => (
              <Table.DataCell key={i}>
                <TextField
                  label={'Arbeidstimer'}
                  hideLabel={true}
                  type={'number'}
                  onChange={(event) => update(i, { ...pliktDag, arbeidsTimer: Number(event.target.value) })}
                  size={'small'}
                />
              </Table.DataCell>
            ))}
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
