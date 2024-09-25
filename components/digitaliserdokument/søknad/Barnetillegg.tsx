import {VilkårsKort} from "../../vilkårskort/VilkårsKort";
import {Button, HStack, Select, Table, TextField} from "@navikt/ds-react";
import {useFieldArray, UseFormReturn} from "react-hook-form";
import {SøknadFormFields, Barn} from "./DigitaliserSøknad";
import {useState} from "react";
import {SelectWrapper, TextFieldWrapper} from "@navikt/aap-felles-react";
import {TrashIcon} from "@navikt/aksel-icons";

interface Props {
    form: UseFormReturn<SøknadFormFields>;
}
export const Barnetillegg = ({form}: Props) => {
    const {fields, append, remove} = useFieldArray({ control: form.control, name: 'oppgitteBarn'});
    const [nyttBarn, setNyttBarn] = useState<Barn | undefined>();
    function updateNyttBarn(data: Partial<Barn>) {
        setNyttBarn({...nyttBarn, ...data})
    }
   return (
       <VilkårsKort heading={'Barnetillegg'}>
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
                   {fields.map(({fornavn, etternavn, fnr, relasjon}, i) => {
                       return (
                           <Table.Row key={fnr}>
                               <Table.DataCell>
                                   <TextFieldWrapper type={'text'} name={`oppgitteBarn.${i}.fnr`} control={form.control} />
                               </Table.DataCell>
                               <Table.DataCell>
                                   <TextFieldWrapper type={'text'} name={`oppgitteBarn.${i}.fornavn`} control={form.control} />
                               </Table.DataCell>
                               <Table.DataCell>
                                   <TextFieldWrapper type={'text'} name={`oppgitteBarn.${i}.etternavn`} control={form.control} />
                               </Table.DataCell>
                               <Table.DataCell>
                                   <SelectWrapper name={`oppgitteBarn.${i}.relasjon`} control={form.control}>
                                       <option value={'FORELDER'}>Forelder</option>
                                       <option value={'FOSTERFORELDER'}>Fosterforelder</option>
                                   </SelectWrapper>
                               </Table.DataCell>
                               <Table.DataCell>
                                   <Button size={"small"} icon={<TrashIcon />} variant={"secondary-neutral"} onClick={() => remove(i)}/>
                               </Table.DataCell>
                           </Table.Row>
                   )
                   ;
                   })}
                   </Table.Body>
                   </Table>
               <Button size={'small'} type={'button'} onClick={() => append({})}>Legg til</Button>
       </VilkårsKort>
   )
}