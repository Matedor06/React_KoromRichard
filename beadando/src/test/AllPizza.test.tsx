
// @vitest-environment happy-dom

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AllPizza from '../pages/AllPizza';

describe('App (real API)', () => {
    it('igazi API-ból betölti és megjeleníti a Margheritát', async () => {
        render(<MemoryRouter><AllPizza /></MemoryRouter>);

        const el = await screen.findByText('Margherita', {}, { timeout: 10000 });
        expect(el).toBeTruthy();
    });
});