import { VilkårsKort } from 'components/vilkårskort/VilkårsKort';

export const StegKolonne = ({ aktivtSteg }: { aktivtSteg: string }) => {
  // Det er her vi gjør datafetching og rendering av stegene
  return (
    <div>
      <VilkårsKort heading={aktivtSteg}>Litt innhold i vilkårskortet</VilkårsKort>
    </div>
  );
};
