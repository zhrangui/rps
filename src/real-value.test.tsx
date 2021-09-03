import { render, screen } from '@testing-library/react';
import RealVaue from './real-value';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/#/"
  })
}));

test('renders RealValue', () => {
  render(<RealVaue />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
