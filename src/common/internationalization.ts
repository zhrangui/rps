import { loadCldr, Internationalization } from '@syncfusion/ej2-base';
import * as n1 from 'cldr-data/main/fr/currencies.json'
import * as n2 from 'cldr-data/main/fr/timeZoneNames.json';
import * as n3 from 'cldr-data/main/fr/numbers.json';
import * as n4 from 'cldr-data/main/fr/ca-gregorian.json';
import * as s from 'cldr-data/supplemental/currencyData.json';
import * as s2 from 'cldr-data/supplemental/numberingSystems.json';
loadCldr(n1, n2, n3, n4, s, s2);

const intl = new Internationalization();

enum DateFormat {
  yyyymm = 'yMM'
}

const formatCurrency = (amount: number): string => {
  return intl.formatNumber(amount, {
    format: 'C0'
  });
}


export default intl;

export { DateFormat, formatCurrency };