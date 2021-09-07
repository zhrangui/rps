import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BrokerPortal from '../broker-portal';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/#/"
  })
}));

test('renders RealValue', () => {
  render(<BrokerPortal />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
