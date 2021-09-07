import { useTheme } from '@material-ui/core';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import theme from '../../theme';
import Home from '../home';

import Test from '../../test/test';
import mockData from '../../test/mock-data';

const mockStore = {
  address: {
    city: "St. John's",
    fullAddress: "1 Roberts Pl, St. John's, NL, A1C 2H9",
    postalCode: "A1C 2H9",
    province: "NL",
    streetDirection: "",
    streetName: "Roberts Pl",
    streetNumber: "1",
    streetType: ""
  },

  originalValue: '5678788',
  originalDate: '2020-08-05T15:32:53.648Z',
  propertyStyle: '3',
  numMonthsTrend: 12,
  renovationChecked: '',
  renovationType: 11,
  renovationAmount: '12112',
  renovationDate: ''
};

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));
const useSelectorMock = useSelector as jest.MockedFunction<typeof useSelector>;

const mockTheme = theme;
jest.mock('@material-ui/core', () => ({
  useTheme: jest.fn()
}));

const useThemeMock = useTheme as jest.MockedFunction<typeof useTheme>;

jest.mock('../services/canada-post-map');

beforeEach(() => {
  useSelectorMock.mockReturnValue(mockStore);
  useThemeMock.mockReturnValue(mockTheme)
});

test('renders Home', async () => {
  render(
    <Test>
      <div>Home</div>
    </Test>
  );
  screen.getByText('Home');
});
