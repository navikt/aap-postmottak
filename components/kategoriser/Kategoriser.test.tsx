import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Kategoriser } from './Kategoriser';
import { AvklarTemaGrunnlag } from 'lib/types/types';

describe('FinnSak', () => {
  const grunnlag: AvklarTemaGrunnlag = {
    vurdering: true,
    dokumenter: [],
  };
  it('Skal ha en tittel', () => {
    render(<Kategoriser behandlingsVersjon={1} journalpostId={'123'} />);
    const heading = screen.getByText('Kategoriser');
    expect(heading).toBeVisible();
  });
});
