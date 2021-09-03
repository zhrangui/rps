export interface Renovation {
  type: string;
  amount: number;
  date: string;
}

export interface Address {
  unitNumber: string;
  streetNumber: string;
  streetName: string;
  streetType: string;
  streetDirection: string;
  city: string;
  province: string;
  postalCode: string;
  fullAddress?: string
}

export default interface PropertyRequest {
  address: Address,
  hpt: {
    originalValue: number,
    originalDate: string,
    propertyStyle: number,
    numMonthsTrend: number,
    renovation?: Renovation
  }
}
