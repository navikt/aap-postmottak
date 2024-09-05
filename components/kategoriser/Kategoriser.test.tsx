import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Kategoriser } from './Kategoriser';
import { AvklarTemaGrunnlag, KategoriserGrunnlag } from 'lib/types/types';

describe('Kategoriser', () => {
  const grunnlag: KategoriserGrunnlag = {
    vurdering: { brevkode: 'SØKNAD' },
    dokumenter: [],
  };
  it('Skal ha en tittel', () => {
    render(<Kategoriser behandlingsVersjon={1} journalpostId={'123'} grunnlag={grunnlag} />);
    const heading = screen.getByText('Kategoriser');
    expect(heading).toBeVisible();
  });
});
