import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PropertyLegend from './PropertyLegend';

describe('PropertyLegend', () => {
  it('renders without errors', () => {
    render(<PropertyLegend />);
    expect(screen.getByText('Kauf')).toBeInTheDocument();
    expect(screen.getByText('Miete')).toBeInTheDocument();
  });

  it('renders the Kauf label with correct styling', () => {
    render(<PropertyLegend />);
    const kauf = screen.getByText('Kauf');
    expect(kauf).toHaveClass('text-buy');
  });

  it('renders the Miete label with correct styling', () => {
    render(<PropertyLegend />);
    const miete = screen.getByText('Miete');
    expect(miete).toHaveClass('text-rent');
  });
});
