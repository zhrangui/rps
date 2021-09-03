import assert from 'assert';
import PropertyAttributes from './types/property-attributes.type';
import ProperyResponse, { PropertyStyle } from './types/property-response.type';

const maptAttributes = (propertyResponse: ProperyResponse): PropertyAttributes => {

  const property = propertyResponse;

  function isHPT(): boolean {
    return !!property.hpt && ["Low"].includes(property.avm.confidenceScore);
  }

  if (isHPT()) {
    const hpt = property.hpt;
    return {
      valueEstimate: hpt.currentValue,
      lowerBound: hpt.valueLow,
      upperBound: hpt.valueHigh,
      currentMonthLower_SFD: hpt.currentNeighbourhoodMonthLower_SFD,
      currentMonthUpper_SFD: hpt.currentNeighbourhoodMonthUpper_SFD,
      currentMonthYoY_SFD: hpt.currentNeighbourhoodMonthYoY_SFD,
      currentMonthGeoName_SFD: hpt.currentNeighbourhoodMonthGeoName_SFD,
      currentMonthLower_SD: hpt.currentNeighbourhoodMonthLower_SD,
      currentMonthUpper_SD: hpt.currentNeighbourhoodMonthUpper_SD,
      currentMonthYoY_SD: hpt.currentNeighbourhoodMonthYoY_SD,
      currentMonthGeoName_SD: hpt.currentNeighbourhoodMonthGeoName_SD,
      currentMonthLower_ROW: hpt.currentNeighbourhoodMonthLower_ROW,
      currentMonthUpper_ROW: hpt.currentNeighbourhoodMonthUpper_ROW,
      currentMonthYoY_ROW: hpt.currentNeighbourhoodMonthUpper_ROW,
      currentMonthGeoName_ROW: hpt.currentNeighbourhoodMonthGeoName_ROW,
      currentMonthLower_CONDO: hpt.currentNeighbourhoodMonthLower_CONDO,
      currentMonthUpper_CONDO: hpt.currentNeighbourhoodMonthUpper_CONDO,
      currentMonthYoY_CONDO: hpt.currentNeighbourhoodMonthYoY_CONDO,
      currentMonthGeoName_CONDO: hpt.currentNeighbourhoodMonthGeoName_CONDO,
      address: hpt.address,
      confidenceScore: hpt.confidenceScore,
      neighbourhoodValues: hpt.neighbourhoodValues,
      neighbourhoodTrends: hpt.neighbourhoodTrends
    }
  } else {
    const avm = property.avm ?? {
      neighbourhoodData: {}
    };
    return {
      valueEstimate: avm.valueEstimate,
      lowerBound: avm.lowerBound,
      upperBound: avm.upperBound,
      currentMonthLower_SFD: avm.neighbourhoodData.currentMonthLower_SFD,
      currentMonthUpper_SFD: avm.neighbourhoodData.currentMonthUpper_SFD,
      currentMonthYoY_SFD: avm.neighbourhoodData.currentMonthYoY_SFD,
      currentMonthGeoName_SFD: avm.neighbourhoodData.currentMonthGeoName_SFD,
      currentMonthLower_SD: avm.neighbourhoodData.currentMonthLower_SD,
      currentMonthUpper_SD: avm.neighbourhoodData.currentMonthUpper_SD,
      currentMonthYoY_SD: avm.neighbourhoodData.currentMonthYoY_SD,
      currentMonthGeoName_SD: avm.neighbourhoodData.currentMonthGeoName_SD,
      currentMonthLower_ROW: avm.neighbourhoodData.currentMonthLower_ROW,
      currentMonthUpper_ROW: avm.neighbourhoodData.currentMonthUpper_ROW,
      currentMonthYoY_ROW: avm.neighbourhoodData.currentMonthYoY_ROW,
      currentMonthGeoName_ROW: avm.neighbourhoodData.currentMonthGeoName_ROW,
      currentMonthLower_CONDO: avm.neighbourhoodData.currentMonthLower_CONDO,
      currentMonthUpper_CONDO: avm.neighbourhoodData.currentMonthUpper_CONDO,
      currentMonthYoY_CONDO: avm.neighbourhoodData.currentMonthYoY_CONDO,
      currentMonthGeoName_CONDO: avm.neighbourhoodData.currentMonthGeoName_CONDO,
      address: `${avm.street_Num} ${avm.street_Name} ${avm.street_Type}, ${avm.unit_Num}, ${avm.city}, ${avm.province} ${avm.postalCode}`,
      confidenceScore: avm.confidenceScore,
      homogeneityScore: avm.homogeneityScore,
      neighbourhoodValues: avm.neighbourhoodData.neighbourhoodValues,
      neighbourhoodTrends: avm.neighbourhoodData.neighbourhoodTrends
    }
  }
}

const mapStyleMonth = (property: PropertyAttributes, style: PropertyStyle): [number, number, number] => {
  switch (style) {
    case (PropertyStyle.Detached): {
      return [
        property.currentMonthLower_SFD,
        property.currentMonthUpper_SFD,
        property.currentMonthYoY_SFD
      ]
    }
    case (PropertyStyle.SemiDetached): {
      return [
        property.currentMonthLower_SD,
        property.currentMonthUpper_SD,
        property.currentMonthYoY_SD
      ]
    }
    case (PropertyStyle.Condo): {
      return [
        property.currentMonthLower_CONDO,
        property.currentMonthUpper_CONDO,
        property.currentMonthYoY_CONDO
      ]
    }
    case (PropertyStyle.Townhome): {
      return [
        property.currentMonthLower_ROW,
        property.currentMonthUpper_ROW,
        property.currentMonthYoY_ROW]
    }
    case (PropertyStyle.Unknown): {
      return [0, 0, 0]
    }
    default: {
      assert(Object.values(PropertyStyle).includes(style), "PropertyStyle is wrong$")
      const _exhaustiveCheck: never = style;
      return [0, 0, 0]
    }
  }
}

export { maptAttributes, mapStyleMonth }