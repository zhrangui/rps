import { loadCldr } from '@syncfusion/ej2-base';
import * as n1 from  'cldr-data/main/de/currencies.json'
import * as n2 from 'cldr-data/main/de/timeZoneNames.json';
import * as n3 from 'cldr-data/main/de/numbers.json';
import * as n4 from 'cldr-data/main/de/ca-gregorian.json';
import * as s from 'cldr-data/supplemental/currencyData.json';
import * as s2 from 'cldr-data/supplemental/numberingSystems.json';
loadCldr(n1, n2, n3, n4, s, s2);