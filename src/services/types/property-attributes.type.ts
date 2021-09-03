
import { NeighbourhoodValues, NeighbourhoodTrends } from './property-response.type'

enum Financing {
  Refinace,
  Purchase,
  Sale
}

export default interface PropertyAttributes {
  valueEstimate: number,
  lowerBound: number,
  upperBound: number,
  address: string,
  currentMonthLower_SFD: number,
  currentMonthUpper_SFD: number,
  currentMonthYoY_SFD: number,
  currentMonthGeoName_SFD: string,
  currentMonthLower_SD: number,
  currentMonthUpper_SD: number,
  currentMonthYoY_SD: number,
  currentMonthGeoName_SD: string,
  currentMonthLower_ROW: number,
  currentMonthUpper_ROW: number,
  currentMonthYoY_ROW: number,
  currentMonthGeoName_ROW: string,
  currentMonthLower_CONDO: number,
  currentMonthUpper_CONDO: number,
  currentMonthYoY_CONDO: number,
  currentMonthGeoName_CONDO: string,
  confidenceScore: string,
  homogeneityScore?: number,
  neighbourhoodValues: NeighbourhoodValues[],
  neighbourhoodTrends: NeighbourhoodTrends[]
}

export { Financing }