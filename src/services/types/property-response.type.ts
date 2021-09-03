enum PropertyStyle {
  Detached = 1,
  SemiDetached,
  Condo,
  Townhome,
  Unknown
}

interface NeighbourhoodValues {
  yearMonth: number,
  aggregate: number,
  sfd: number,
  sd: number,
  condo: number,
  row: number
}

interface NeighbourhoodTrends {
  yearMonth: number,
  neighbourhoodYoY: number,
  neighbourhoodValue: number,
  cityYoY: number,
  cityValue: number,
  provinceYoY: number,
  provinceValue: number
}

interface NeighbourhoodData {
  currentMonthLower_SFD: number,
  currentMonthUpper_SFD: number,
  currentMonthYoY_SFD: number,
  currentMonthGeoName_SFD: string,
  currentMonthGeoType_SFD: string,
  currentMonthLower_SD: number,
  currentMonthUpper_SD: number,
  currentMonthYoY_SD: number,
  currentMonthGeoName_SD: string,
  currentMonthGeoType_SD: string,
  currentMonthLower_CONDO: number,
  currentMonthUpper_CONDO: number,
  currentMonthYoY_CONDO: number,
  currentMonthGeoName_CONDO: string,
  currentMonthGeoType_CONDO: string,
  currentMonthLower_ROW: number,
  currentMonthUpper_ROW: number,
  currentMonthYoY_ROW: number,
  currentMonthGeoName_ROW: string,
  currentMonthGeoType_ROW: string,
  date: string,
  provName: string,
  resultCode: number,
  neighbourhoodValues: NeighbourhoodValues[],
  neighbourhoodTrends: NeighbourhoodTrends[]
}

interface HPT {
  resultCode: number,
  address: string,
  neigh_Name: string,
  city_Name: string,
  provName: string,
  neighbourhoodValues:NeighbourhoodValues[],
  neighbourhoodTrends: NeighbourhoodTrends[]
  currentNeighbourhoodMonthLower: number,
  currentNeighbourhoodMonthUpper: number,
  currentNeighbourhoodMonthLower_SFD: number,
  currentNeighbourhoodMonthUpper_SFD: number,
  currentNeighbourhoodMonthYoY_SFD: number,
  currentNeighbourhoodMonthGeoName_SFD: string,
  currentNeighbourhoodMonthGeoType_SFD: string,
  currentNeighbourhoodMonthLower_SD: number,
  currentNeighbourhoodMonthUpper_SD: number,
  currentNeighbourhoodMonthYoY_SD: number,
  currentNeighbourhoodMonthGeoName_SD: string,
  currentNeighbourhoodMonthGeoType_SD: string,
  currentNeighbourhoodMonthLower_CONDO: number,
  currentNeighbourhoodMonthUpper_CONDO: number,
  currentNeighbourhoodMonthYoY_CONDO: number,
  currentNeighbourhoodMonthGeoName_CONDO: string,
  currentNeighbourhoodMonthGeoType_CONDO: string,
  currentNeighbourhoodMonthLower_ROW: number,
  currentNeighbourhoodMonthUpper_ROW: number,
  currentNeighbourhoodMonthYoY_ROW: number,
  currentNeighbourhoodMonthGeoName_ROW: string,
  currentNeighbourhoodMonthGeoType_ROW: string,
  valueLow: number,
  valueHigh: number,
  currentValue: number,
  confidenceScore: string,
  currentMonth: string,
  percentChange: number,
  pctChangePerYear: number,
  level: string
}

interface AVM {
  resultCode: number,
  unit_Num: string,
  street_Num: string,
  street_Name: string,
  street_Type: string,
  street_Dir: string,
  city: string,
  province: string,
  postalCode: string,
  valueDate: string,
  model: string,
  valueEstimate: number,
  lowerBound: number,
  upperBound: number,
  confidenceScore: string,
  homogeneityScore: number,
  neighbourhoodData: NeighbourhoodData,
  providerData: string | null
}

export default interface ProperyResponse {
  avm: AVM,
  hpt: HPT
}

export type { NeighbourhoodValues, NeighbourhoodTrends }

export { PropertyStyle }