import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FinnSak } from './FinnSak';

describe('FinnSak', () => {
  it('Skal ha en oversikt', () => {
    render(<FinnSak behandlingsVersjon={1} journalpostId={'123'} />);
    const heading = screen.getByText('Finn sak');
    expect(heading).toBeVisible();
  });
  it('Har et valg for å knytte dokumentet til sak', () => {
    render(<FinnSak behandlingsVersjon={1} journalpostId={'123'} />);
    expect(screen.getByRole('group', { name: 'Journalfør på sak' })).toBeVisible();
  });
});