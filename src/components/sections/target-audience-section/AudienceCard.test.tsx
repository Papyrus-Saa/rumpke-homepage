import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AudienceCard from './AudienceCard';

import { ReactNode, AnchorHTMLAttributes } from 'react';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...props }: { href: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

jest.mock('lucide-react', () => ({
  ArrowRight: () => <svg data-testid="arrow-right" />,
}));

jest.mock('@/components/ui/badge', () => ({
  Badge: ({ children }: { children: ReactNode }) => <span data-testid="badge">{children}</span>,
}));

jest.mock('@/components/ui/card', () => ({
  Card: ({ children }: { children: ReactNode }) => <div data-testid="card">{children}</div>,
  CardHeader: ({ children }: { children: ReactNode }) => <div data-testid="card-header">{children}</div>,
  CardTitle: ({ children }: { children: ReactNode }) => <h3 data-testid="card-title">{children}</h3>,
  CardContent: ({ children }: { children: ReactNode }) => <div data-testid="card-content">{children}</div>,
  CardFooter: ({ children }: { children: ReactNode }) => <div data-testid="card-footer">{children}</div>,
}));

describe('AudienceCard', () => {
  const icon = <svg data-testid="icon" />;

  it('renders all main props', () => {
    render(
      <AudienceCard
        icon={icon}
        title="Test Title"
        text="Test description"
        number="01"
        linkHref="/test-link"
      />
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveTextContent('01');
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test-link');
    expect(screen.getByText(/Mehr erfahren/i)).toBeInTheDocument();
    expect(screen.getByTestId('arrow-right')).toBeInTheDocument();
  });

  it('uses default linkHref when not provided', () => {
    render(
      <AudienceCard
        icon={icon}
        title="Default Link"
        text="Description"
        number="02"
      />
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/kontakt');
  });

  it('sets aria-label on link', () => {
    render(
      <AudienceCard
        icon={icon}
        title="Eigentümer"
        text="Description"
        number="03"
      />
    );
    expect(screen.getByRole('link')).toHaveAttribute('aria-label', 'Eigentümer - Mehr erfahren');
  });

  it('renders with different numbers and titles', () => {
    render(
      <AudienceCard
        icon={icon}
        title="Käufer"
        text="Käufer text"
        number="99"
      />
    );
    expect(screen.getByText('Käufer')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveTextContent('99');
  });

  it('renders with custom icon', () => {
    const customIcon = <span data-testid="custom-icon">X</span>;
    render(
      <AudienceCard
        icon={customIcon}
        title="Icon Test"
        text="Icon description"
        number="10"
      />
    );
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });
});
