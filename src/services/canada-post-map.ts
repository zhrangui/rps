import { saveAddress } from "../stores/client-reducer";
import store from "../stores/store";
import { Address } from "./types/property-request.type";

declare var pca: any;

export default function CanadaPostMap(elementID = 'address-complete') {
  const lang = "en";
  const options = {
    key: 'zj26-cy47-rz54-pg93',
    culture: lang === 'en' ? 'en-ca' : 'fr-ca',
  };

  const fields = [
    { element: elementID, field: 'FormattedAddress', mode: pca.fieldMode.SEARCH }
  ];

  const control = new pca.Address(fields, options);
  control.listen('populate', (address: any) => {
    mapCanadaPostAddress(address);
  });

  function mapCanadaPostAddress(canadaPostAddress: any): Address {
    const address = {
      unitNumber: canadaPostAddress.SubBuilding,
      streetNumber: canadaPostAddress.BuildingNumber,
      streetName: canadaPostAddress.Street,
      streetType: '',
      streetDirection: canadaPostAddress.StreetDirection || '',
      city: canadaPostAddress.City,
      province: canadaPostAddress.Province,
      postalCode: canadaPostAddress.PostalCode,
      fullAddress: `${canadaPostAddress.Line1}, ${canadaPostAddress.City}, ${canadaPostAddress.Province}, ${canadaPostAddress.PostalCode}`
    }

    store.dispatch(saveAddress(address));

    return address;
  }
}
