
import PrpertyRequest from '../services/types/property-request.type';
import ProperyResponse from '../services/types/property-response.type';

const mockData: { propertyRequest: PrpertyRequest, propertyResponse: ProperyResponse } = {
  propertyRequest: {
    address: {
      unitNumber: "509",
      streetNumber: "133",
      streetName: "Wynford",
      streetType: "Drive",
      streetDirection: "",
      city: "North York",
      province: "ON",
      postalCode: "M3C0J5"
    },
    hpt: {
      originalValue: 280000,
      originalDate: "201410",
      propertyStyle: 3,
      numMonthsTrend: 12,
      renovation: {
        type: "11",
        amount: 10000,
        date: "201510"
      }
    }
  },
  propertyResponse:{
    avm: {
      resultCode: 0,
      unit_Num: "509",
      street_Num: "133",
      street_Name: "WYNFORD",
      street_Type: "DR",
      street_Dir: "",
      city: "NORTH YORK",
      province: "ONTARIO",
      postalCode: "M3C0J5",
      valueDate: "202106     ",
      model: "LMA",
      valueEstimate: 780000,
      lowerBound: 500500,
      upperBound: 991600,
      confidenceScore: "Medium",
      homogeneityScore: 0.588,
      neighbourhoodData: {
        currentMonthLower_SFD: 1068500,
        currentMonthUpper_SFD: 2021600,
        currentMonthYoY_SFD: 15.19,
        currentMonthGeoName_SFD: "Toronto",
        currentMonthGeoType_SFD: "06_City",
        currentMonthLower_SD: 1060900,
        currentMonthUpper_SD: 1352600,
        currentMonthYoY_SD: 10.56,
        currentMonthGeoName_SD: "Flemington Park",
        currentMonthGeoType_SD: "07_FSA",
        currentMonthLower_CONDO: 500500,
        currentMonthUpper_CONDO: 991600,
        currentMonthYoY_CONDO: 5.77,
        currentMonthGeoName_CONDO: "Flemington Park",
        currentMonthGeoType_CONDO: "07_FSA",
        currentMonthLower_ROW: 743800,
        currentMonthUpper_ROW: 1042800,
        currentMonthYoY_ROW: 15.98,
        currentMonthGeoName_ROW: "Toronto",
        currentMonthGeoType_ROW: "06_City",
        date: "202106",
        provName: "Ontario",
        resultCode: 30,
        neighbourhoodValues: [
          {
            yearMonth: 202106,
            aggregate: 634500,
            sfd: 1517000,
            sd: 1191200,
            condo: 592400,
            row: 864400
          },
          {
            yearMonth: 202105,
            aggregate: 632600,
            sfd: 1504900,
            sd: 1181700,
            condo: 591000,
            row: 859400
          },
          {
            yearMonth: 202104,
            aggregate: 630800,
            sfd: 1484800,
            sd: 1172300,
            condo: 589800,
            row: 851200
          },
          {
            yearMonth: 202103,
            aggregate: 632300,
            sfd: 1456700,
            sd: 1162800,
            condo: 592200,
            row: 840300
          },
          {
            yearMonth: 202102,
            aggregate: 637400,
            sfd: 1428600,
            sd: 1153300,
            condo: 598400,
            row: 828300
          },
          {
            yearMonth: 202101,
            aggregate: 643000,
            sfd: 1405700,
            sd: 1143800,
            condo: 605100,
            row: 818900
          },
          {
            yearMonth: 202012,
            aggregate: 643300,
            sfd: 1389700,
            sd: 1134300,
            condo: 606200,
            row: 807000
          },
          {
            yearMonth: 202011,
            aggregate: 638600,
            sfd: 1377300,
            sd: 1124800,
            condo: 601800,
            row: 796400
          },
          {
            yearMonth: 202010,
            aggregate: 628400,
            sfd: 1366100,
            sd: 1115400,
            condo: 591600,
            row: 788800
          },
          {
            yearMonth: 202009,
            aggregate: 617600,
            sfd: 1356200,
            sd: 1105900,
            condo: 580700,
            row: 782100
          },
          {
            yearMonth: 202008,
            aggregate: 608600,
            sfd: 1345600,
            sd: 1096400,
            condo: 571700,
            row: 772200
          },
          {
            yearMonth: 202007,
            aggregate: 601800,
            sfd: 1333100,
            sd: 1086900,
            condo: 565100,
            row: 758400
          },
          {
            yearMonth: 202006,
            aggregate: 596500,
            sfd: 1316900,
            sd: 1077400,
            condo: 560100,
            row: 745300
          },
          {
            yearMonth: 202005,
            aggregate: 591100,
            sfd: 1303000,
            sd: 1067900,
            condo: 555000,
            row: 737800
          },
          {
            yearMonth: 202004,
            aggregate: 584300,
            sfd: 1289600,
            sd: 1058400,
            condo: 548400,
            row: 731600
          },
          {
            yearMonth: 202003,
            aggregate: 573300,
            sfd: 1274800,
            sd: 1049000,
            condo: 537300,
            row: 726600
          },
          {
            yearMonth: 202002,
            aggregate: 560000,
            sfd: 1258500,
            sd: 1039500,
            condo: 523700,
            row: 723300
          },
          {
            yearMonth: 202001,
            aggregate: 552100,
            sfd: 1241600,
            sd: 1030000,
            condo: 516000,
            row: 724900
          },
          {
            yearMonth: 201912,
            aggregate: 547700,
            sfd: 1226400,
            sd: 1020500,
            condo: 511900,
            row: 725200
          },
          {
            yearMonth: 201911,
            aggregate: 546600,
            sfd: 1211400,
            sd: 1011000,
            condo: 511400,
            row: 722300
          },
          {
            yearMonth: 201910,
            aggregate: 546600,
            sfd: 1199800,
            sd: 1001500,
            condo: 512100,
            row: 715800
          },
          {
            yearMonth: 201909,
            aggregate: 550400,
            sfd: 1194400,
            sd: 1002400,
            condo: 516200,
            row: 713200
          },
          {
            yearMonth: 201908,
            aggregate: 554400,
            sfd: 1191800,
            sd: 1003300,
            condo: 520500,
            row: 713600
          },
          {
            yearMonth: 201907,
            aggregate: 556800,
            sfd: 1188400,
            sd: 1004200,
            condo: 523000,
            row: 711900
          },
          {
            yearMonth: 201906,
            aggregate: 557900,
            sfd: 1179500,
            sd: 1005100,
            condo: 524000,
            row: 704200
          },
          {
            yearMonth: 201905,
            aggregate: 555800,
            sfd: 1171300,
            sd: 1006000,
            condo: 521700,
            row: 694200
          },
          {
            yearMonth: 201904,
            aggregate: 548600,
            sfd: 1162500,
            sd: 1006800,
            condo: 513900,
            row: 687200
          },
          {
            yearMonth: 201903,
            aggregate: 536800,
            sfd: 1155800,
            sd: 1007700,
            condo: 501200,
            row: 685800
          },
          {
            yearMonth: 201902,
            aggregate: 529200,
            sfd: 1148900,
            sd: 1008600,
            condo: 492900,
            row: 688100
          },
          {
            yearMonth: 201901,
            aggregate: 526500,
            sfd: 1141700,
            sd: 1009500,
            condo: 489900,
            row: 690300
          },
          {
            yearMonth: 201812,
            aggregate: 527400,
            sfd: 1135200,
            sd: 1010400,
            condo: 490800,
            row: 690000
          },
          {
            yearMonth: 201811,
            aggregate: 534700,
            sfd: 1129700,
            sd: 1011200,
            condo: 498700,
            row: 686800
          },
          {
            yearMonth: 201810,
            aggregate: 543500,
            sfd: 1130100,
            sd: 1012100,
            condo: 508000,
            row: 683300
          },
          {
            yearMonth: 201809,
            aggregate: 550900,
            sfd: 1138500,
            sd: 1013000,
            condo: 516000,
            row: 681800
          },
          {
            yearMonth: 201808,
            aggregate: 550000,
            sfd: 1147400,
            sd: 1013900,
            condo: 514900,
            row: 681700
          },
          {
            yearMonth: 201807,
            aggregate: 543600,
            sfd: 1151300,
            sd: 1014800,
            condo: 508000,
            row: 682100
          },
          {
            yearMonth: 201806,
            aggregate: 533400,
            sfd: 1149900,
            sd: 1015000,
            condo: 497000,
            row: 680200
          },
          {
            yearMonth: 201805,
            aggregate: 523400,
            sfd: 1144200,
            sd: 1014400,
            condo: 486200,
            row: 675000
          },
          {
            yearMonth: 201804,
            aggregate: 515900,
            sfd: 1138300,
            sd: 1013900,
            condo: 478200,
            row: 664200
          },
          {
            yearMonth: 201803,
            aggregate: 509200,
            sfd: 1131300,
            sd: 1013400,
            condo: 471100,
            row: 652300
          },
          {
            yearMonth: 201802,
            aggregate: 502400,
            sfd: 1124300,
            sd: 1012900,
            condo: 463700,
            row: 645200
          },
          {
            yearMonth: 201801,
            aggregate: 494600,
            sfd: 1122300,
            sd: 1012400,
            condo: 455400,
            row: 641400
          },
          {
            yearMonth: 201712,
            aggregate: 487300,
            sfd: 1121500,
            sd: 1011900,
            condo: 447600,
            row: 639100
          },
          {
            yearMonth: 201711,
            aggregate: 479900,
            sfd: 1124300,
            sd: 1005700,
            condo: 440100,
            row: 637800
          },
          {
            yearMonth: 201710,
            aggregate: 472600,
            sfd: 1131800,
            sd: 999400,
            condo: 432700,
            row: 639300
          },
          {
            yearMonth: 201709,
            aggregate: 464300,
            sfd: 1146500,
            sd: 993200,
            condo: 424200,
            row: 643500
          },
          {
            yearMonth: 201708,
            aggregate: 458100,
            sfd: 1164500,
            sd: 986900,
            condo: 418100,
            row: 646700
          },
          {
            yearMonth: 201707,
            aggregate: 454100,
            sfd: 1178600,
            sd: 980700,
            condo: 414200,
            row: 646800
          },
          {
            yearMonth: 201706,
            aggregate: 450900,
            sfd: 1183900,
            sd: 974500,
            condo: 411300,
            row: 643700
          },
          {
            yearMonth: 201705,
            aggregate: 448000,
            sfd: 1177200,
            sd: 954700,
            condo: 409700,
            row: 636600
          },
          {
            yearMonth: 201704,
            aggregate: 443800,
            sfd: 1156900,
            sd: 935000,
            condo: 406600,
            row: 625100
          },
          {
            yearMonth: 201703,
            aggregate: 439700,
            sfd: 1128200,
            sd: 915300,
            condo: 403700,
            row: 611600
          },
          {
            yearMonth: 201702,
            aggregate: 432900,
            sfd: 1099900,
            sd: 895600,
            condo: 397800,
            row: 599300
          },
          {
            yearMonth: 201701,
            aggregate: 426200,
            sfd: 1074800,
            sd: 881500,
            condo: 391700,
            row: 590600
          },
          {
            yearMonth: 201612,
            aggregate: 424200,
            sfd: 1052300,
            sd: 872600,
            condo: 390300,
            row: 582900
          },
          {
            yearMonth: 201611,
            aggregate: 420100,
            sfd: 1030500,
            sd: 866600,
            condo: 386300,
            row: 575300
          },
          {
            yearMonth: 201610,
            aggregate: 413400,
            sfd: 1012800,
            sd: 857500,
            condo: 379800,
            row: 567800
          },
          {
            yearMonth: 201609,
            aggregate: 402700,
            sfd: 998400,
            sd: 848500,
            condo: 369000,
            row: 560700
          },
          {
            yearMonth: 201608,
            aggregate: 391700,
            sfd: 985400,
            sd: 836300,
            condo: 358000,
            row: 554600
          },
          {
            yearMonth: 201607,
            aggregate: 380600,
            sfd: 971800,
            sd: 827500,
            condo: 346800,
            row: 547100
          }
        ],
        neighbourhoodTrends: [
          {
            yearMonth: 202106,
            neighbourhoodYoY: 6.4,
            neighbourhoodValue: 634500,
            cityYoY: 14.2,
            cityValue: 1111300,
            provinceYoY: 22.5,
            provinceValue: 854900
          },
          {
            yearMonth: 202105,
            neighbourhoodYoY: 7,
            neighbourhoodValue: 632600,
            cityYoY: 14.1,
            cityValue: 1100600,
            provinceYoY: 22.6,
            provinceValue: 845900
          },
          {
            yearMonth: 202104,
            neighbourhoodYoY: 8,
            neighbourhoodValue: 630800,
            cityYoY: 13.5,
            cityValue: 1084600,
            provinceYoY: 21.9,
            provinceValue: 831900
          },
          {
            yearMonth: 202103,
            neighbourhoodYoY: 10.3,
            neighbourhoodValue: 632300,
            cityYoY: 12.4,
            cityValue: 1062300,
            provinceYoY: 20.4,
            provinceValue: 811400
          },
          {
            yearMonth: 202102,
            neighbourhoodYoY: 13.8,
            neighbourhoodValue: 637400,
            cityYoY: 11.6,
            cityValue: 1044000,
            provinceYoY: 18.9,
            provinceValue: 790500
          },
          {
            yearMonth: 202101,
            neighbourhoodYoY: 16.5,
            neighbourhoodValue: 643000,
            cityYoY: 11.3,
            cityValue: 1033000,
            provinceYoY: 17.5,
            provinceValue: 773600
          },
          {
            yearMonth: 202012,
            neighbourhoodYoY: 17.5,
            neighbourhoodValue: 643300,
            cityYoY: 11.4,
            cityValue: 1025600,
            provinceYoY: 16.5,
            provinceValue: 760400
          },
          {
            yearMonth: 202011,
            neighbourhoodYoY: 16.8,
            neighbourhoodValue: 638600,
            cityYoY: 11.4,
            cityValue: 1017500,
            provinceYoY: 15.5,
            provinceValue: 748700
          },
          {
            yearMonth: 202010,
            neighbourhoodYoY: 15,
            neighbourhoodValue: 628400,
            cityYoY: 11.4,
            cityValue: 1009100,
            provinceYoY: 14.6,
            provinceValue: 737800
          },
          {
            yearMonth: 202009,
            neighbourhoodYoY: 12.2,
            neighbourhoodValue: 617600,
            cityYoY: 11,
            cityValue: 1001200,
            provinceYoY: 13.5,
            provinceValue: 727300
          },
          {
            yearMonth: 202008,
            neighbourhoodYoY: 9.8,
            neighbourhoodValue: 608600,
            cityYoY: 10.3,
            cityValue: 992800,
            provinceYoY: 12.4,
            provinceValue: 717000
          },
          {
            yearMonth: 202007,
            neighbourhoodYoY: 8.1,
            neighbourhoodValue: 601800,
            cityYoY: 9.7,
            cityValue: 983700,
            provinceYoY: 11.5,
            provinceValue: 707200
          },
          {
            yearMonth: 202006,
            neighbourhoodYoY: 6.9,
            neighbourhoodValue: 596500,
            cityYoY: 9.4,
            cityValue: 973500,
            provinceYoY: 10.9,
            provinceValue: 697900
          },
          {
            yearMonth: 202005,
            neighbourhoodYoY: 6.4,
            neighbourhoodValue: 591100,
            cityYoY: 9.4,
            cityValue: 964500,
            provinceYoY: 10.6,
            provinceValue: 690100
          },
          {
            yearMonth: 202004,
            neighbourhoodYoY: 6.5,
            neighbourhoodValue: 584300,
            cityYoY: 9.4,
            cityValue: 955300,
            provinceYoY: 10.2,
            provinceValue: 682200
          },
          {
            yearMonth: 202003,
            neighbourhoodYoY: 6.8,
            neighbourhoodValue: 573300,
            cityYoY: 9,
            cityValue: 945300,
            provinceYoY: 9.6,
            provinceValue: 673800
          },
          {
            yearMonth: 202002,
            neighbourhoodYoY: 5.8,
            neighbourhoodValue: 560000,
            cityYoY: 8.5,
            cityValue: 935700,
            provinceYoY: 8.7,
            provinceValue: 665200
          },
          {
            yearMonth: 202001,
            neighbourhoodYoY: 4.9,
            neighbourhoodValue: 552100,
            cityYoY: 7.9,
            cityValue: 928200,
            provinceYoY: 7.8,
            provinceValue: 658200
          },
          {
            yearMonth: 201912,
            neighbourhoodYoY: 3.9,
            neighbourhoodValue: 547700,
            cityYoY: 7.4,
            cityValue: 920900,
            provinceYoY: 7,
            provinceValue: 652800
          },
          {
            yearMonth: 201911,
            neighbourhoodYoY: 2.2,
            neighbourhoodValue: 546600,
            cityYoY: 6.9,
            cityValue: 913200,
            provinceYoY: 6.3,
            provinceValue: 648000
          },
          {
            yearMonth: 201910,
            neighbourhoodYoY: 0.6,
            neighbourhoodValue: 546600,
            cityYoY: 6.2,
            cityValue: 906100,
            provinceYoY: 5.6,
            provinceValue: 644000
          },
          {
            yearMonth: 201909,
            neighbourhoodYoY: -0.1,
            neighbourhoodValue: 550400,
            cityYoY: 5.5,
            cityValue: 902300,
            provinceYoY: 4.9,
            provinceValue: 640800
          },
          {
            yearMonth: 201908,
            neighbourhoodYoY: 0.8,
            neighbourhoodValue: 554400,
            cityYoY: 4.9,
            cityValue: 900200,
            provinceYoY: 4.2,
            provinceValue: 637700
          },
          {
            yearMonth: 201907,
            neighbourhoodYoY: 2.4,
            neighbourhoodValue: 556800,
            cityYoY: 4.3,
            cityValue: 896700,
            provinceYoY: 3.6,
            provinceValue: 634000
          },
          {
            yearMonth: 201906,
            neighbourhoodYoY: 4.6,
            neighbourhoodValue: 557900,
            cityYoY: 3.6,
            cityValue: 889700,
            provinceYoY: 3.1,
            provinceValue: 629200
          },
          {
            yearMonth: 201905,
            neighbourhoodYoY: 6.2,
            neighbourhoodValue: 555800,
            cityYoY: 3.2,
            cityValue: 881600,
            provinceYoY: 2.8,
            provinceValue: 624000
          },
          {
            yearMonth: 201904,
            neighbourhoodYoY: 6.3,
            neighbourhoodValue: 548600,
            cityYoY: 2.9,
            cityValue: 873500,
            provinceYoY: 2.6,
            provinceValue: 619000
          },
          {
            yearMonth: 201903,
            neighbourhoodYoY: 5.4,
            neighbourhoodValue: 536800,
            cityYoY: 3,
            cityValue: 867400,
            provinceYoY: 2.5,
            provinceValue: 614900
          },
          {
            yearMonth: 201902,
            neighbourhoodYoY: 5.3,
            neighbourhoodValue: 529200,
            cityYoY: 3,
            cityValue: 862700,
            provinceYoY: 2.5,
            provinceValue: 612100
          },
          {
            yearMonth: 201901,
            neighbourhoodYoY: 6.4,
            neighbourhoodValue: 526500,
            cityYoY: 2.9,
            cityValue: 859900,
            provinceYoY: 2.3,
            provinceValue: 610800
          },
          {
            yearMonth: 201812,
            neighbourhoodYoY: 8.2,
            neighbourhoodValue: 527400,
            cityYoY: 2.7,
            cityValue: 857100,
            provinceYoY: 2.1,
            provinceValue: 610000
          },
          {
            yearMonth: 201811,
            neighbourhoodYoY: 11.4,
            neighbourhoodValue: 534700,
            cityYoY: 2.2,
            cityValue: 854000,
            provinceYoY: 1.6,
            provinceValue: 609700
          },
          {
            yearMonth: 201810,
            neighbourhoodYoY: 15,
            neighbourhoodValue: 543500,
            cityYoY: 1.7,
            cityValue: 852900,
            provinceYoY: 1,
            provinceValue: 610000
          },
          {
            yearMonth: 201809,
            neighbourhoodYoY: 18.7,
            neighbourhoodValue: 550900,
            cityYoY: 1.2,
            cityValue: 854900,
            provinceYoY: 0.3,
            provinceValue: 610900
          },
          {
            yearMonth: 201808,
            neighbourhoodYoY: 20.1,
            neighbourhoodValue: 550000,
            cityYoY: 0.6,
            cityValue: 858400,
            provinceYoY: -0.5,
            provinceValue: 612000
          },
          {
            yearMonth: 201807,
            neighbourhoodYoY: 19.7,
            neighbourhoodValue: 543600,
            cityYoY: 0.1,
            cityValue: 860100,
            provinceYoY: -1.2,
            provinceValue: 611800
          },
          {
            yearMonth: 201806,
            neighbourhoodYoY: 18.3,
            neighbourhoodValue: 533400,
            cityYoY: 0,
            cityValue: 858400,
            provinceYoY: -1.4,
            provinceValue: 610000
          },
          {
            yearMonth: 201805,
            neighbourhoodYoY: 16.8,
            neighbourhoodValue: 523400,
            cityYoY: 0.5,
            cityValue: 854400,
            provinceYoY: -0.9,
            provinceValue: 607000
          },
          {
            yearMonth: 201804,
            neighbourhoodYoY: 16.3,
            neighbourhoodValue: 515900,
            cityYoY: 1.6,
            cityValue: 848500,
            provinceYoY: 0.4,
            provinceValue: 603400
          },
          {
            yearMonth: 201803,
            neighbourhoodYoY: 15.8,
            neighbourhoodValue: 509200,
            cityYoY: 3.1,
            cityValue: 842400,
            provinceYoY: 2.2,
            provinceValue: 599900
          },
          {
            yearMonth: 201802,
            neighbourhoodYoY: 16.1,
            neighbourhoodValue: 502400,
            cityYoY: 4.3,
            cityValue: 837300,
            provinceYoY: 4,
            provinceValue: 597400
          },
          {
            yearMonth: 201801,
            neighbourhoodYoY: 16.1,
            neighbourhoodValue: 494600,
            cityYoY: 5.6,
            cityValue: 835500,
            provinceYoY: 5.7,
            provinceValue: 597000
          },
          {
            yearMonth: 201712,
            neighbourhoodYoY: 14.9,
            neighbourhoodValue: 487300,
            cityYoY: 7.1,
            cityValue: 835000,
            provinceYoY: 7.2,
            provinceValue: 597700
          },
          {
            yearMonth: 201711,
            neighbourhoodYoY: 14.2,
            neighbourhoodValue: 479900,
            cityYoY: 8.7,
            cityValue: 835500,
            provinceYoY: 9.1,
            provinceValue: 600100
          },
          {
            yearMonth: 201710,
            neighbourhoodYoY: 14.3,
            neighbourhoodValue: 472600,
            cityYoY: 10.5,
            cityValue: 838300,
            provinceYoY: 11.2,
            provinceValue: 603800
          },
          {
            yearMonth: 201709,
            neighbourhoodYoY: 15.3,
            neighbourhoodValue: 464300,
            cityYoY: 12.6,
            cityValue: 844800,
            provinceYoY: 13.6,
            provinceValue: 609300
          },
          {
            yearMonth: 201708,
            neighbourhoodYoY: 17,
            neighbourhoodValue: 458100,
            cityYoY: 15,
            cityValue: 853100,
            provinceYoY: 16.2,
            provinceValue: 615200
          },
          {
            yearMonth: 201707,
            neighbourhoodYoY: 19.3,
            neighbourhoodValue: 454100,
            cityYoY: 17.4,
            cityValue: 858900,
            provinceYoY: 18.7,
            provinceValue: 619300
          },
          {
            yearMonth: 201706,
            neighbourhoodYoY: 21.3,
            neighbourhoodValue: 450900,
            cityYoY: 19.4,
            cityValue: 858400,
            provinceYoY: 20.7,
            provinceValue: 618700
          },
          {
            yearMonth: 201705,
            neighbourhoodYoY: 22.9,
            neighbourhoodValue: 448000,
            cityYoY: 20.5,
            cityValue: 850100,
            provinceYoY: 21.8,
            provinceValue: 612500
          },
          {
            yearMonth: 201704,
            neighbourhoodYoY: 22.7,
            neighbourhoodValue: 443800,
            cityYoY: 20.7,
            cityValue: 835000,
            provinceYoY: 21.8,
            provinceValue: 600900
          },
          {
            yearMonth: 201703,
            neighbourhoodYoY: 21,
            neighbourhoodValue: 439700,
            cityYoY: 20.3,
            cityValue: 817200,
            provinceYoY: 21.1,
            provinceValue: 586800
          },
          {
            yearMonth: 201702,
            neighbourhoodYoY: 18,
            neighbourhoodValue: 432900,
            cityYoY: 19.8,
            cityValue: 802500,
            provinceYoY: 20.1,
            provinceValue: 574200
          },
          {
            yearMonth: 201701,
            neighbourhoodYoY: 15.5,
            neighbourhoodValue: 426200,
            cityYoY: 19.2,
            cityValue: 790900,
            provinceYoY: 19.3,
            provinceValue: 564900
          },
          {
            yearMonth: 201612,
            neighbourhoodYoY: 14.7,
            neighbourhoodValue: 424200,
            cityYoY: 18.3,
            cityValue: 779900,
            provinceYoY: 18.4,
            provinceValue: 557400
          },
          {
            yearMonth: 201611,
            neighbourhoodYoY: 13.8,
            neighbourhoodValue: 420100,
            cityYoY: 17.5,
            cityValue: 768600,
            provinceYoY: 17.5,
            provinceValue: 550100
          },
          {
            yearMonth: 201610,
            neighbourhoodYoY: 11.6,
            neighbourhoodValue: 413400,
            cityYoY: 16.7,
            cityValue: 758400,
            provinceYoY: 16.5,
            provinceValue: 543200
          },
          {
            yearMonth: 201609,
            neighbourhoodYoY: 8.8,
            neighbourhoodValue: 402700,
            cityYoY: 15.9,
            cityValue: 750000,
            provinceYoY: 15.5,
            provinceValue: 536300
          },
          {
            yearMonth: 201608,
            neighbourhoodYoY: 6.1,
            neighbourhoodValue: 391700,
            cityYoY: 14.9,
            cityValue: 741700,
            provinceYoY: 14.5,
            provinceValue: 529400
          },
          {
            yearMonth: 201607,
            neighbourhoodYoY: 3.7,
            neighbourhoodValue: 380600,
            cityYoY: 13.8,
            cityValue: 731700,
            provinceYoY: 13.5,
            provinceValue: 521500
          }
        ]
      },
      providerData: null
    },
    hpt: {
      resultCode: 0,
      address: "133 Wynford Dr, unit 509, , North York, ON M3C0J5",
      neigh_Name: "Flemington Park",
      city_Name: "Toronto",
      provName: "Ontario",
      neighbourhoodValues: [
        {
          yearMonth: 202106,
          aggregate: 634500,
          sfd: 1517000,
          sd: 1191200,
          condo: 592400,
          row: 864400
        },
        {
          yearMonth: 202105,
          aggregate: 632600,
          sfd: 1504900,
          sd: 1181700,
          condo: 591000,
          row: 859400
        },
        {
          yearMonth: 202104,
          aggregate: 630800,
          sfd: 1484800,
          sd: 1172300,
          condo: 589800,
          row: 851200
        },
        {
          yearMonth: 202103,
          aggregate: 632300,
          sfd: 1456700,
          sd: 1162800,
          condo: 592200,
          row: 840300
        },
        {
          yearMonth: 202102,
          aggregate: 637400,
          sfd: 1428600,
          sd: 1153300,
          condo: 598400,
          row: 828300
        },
        {
          yearMonth: 202101,
          aggregate: 643000,
          sfd: 1405700,
          sd: 1143800,
          condo: 605100,
          row: 818900
        },
        {
          yearMonth: 202012,
          aggregate: 643300,
          sfd: 1389700,
          sd: 1134300,
          condo: 606200,
          row: 807000
        },
        {
          yearMonth: 202011,
          aggregate: 638600,
          sfd: 1377300,
          sd: 1124800,
          condo: 601800,
          row: 796400
        },
        {
          yearMonth: 202010,
          aggregate: 628400,
          sfd: 1366100,
          sd: 1115400,
          condo: 591600,
          row: 788800
        },
        {
          yearMonth: 202009,
          aggregate: 617600,
          sfd: 1356200,
          sd: 1105900,
          condo: 580700,
          row: 782100
        },
        {
          yearMonth: 202008,
          aggregate: 608600,
          sfd: 1345600,
          sd: 1096400,
          condo: 571700,
          row: 772200
        },
        {
          yearMonth: 202007,
          aggregate: 601800,
          sfd: 1333100,
          sd: 1086900,
          condo: 565100,
          row: 758400
        },
        {
          yearMonth: 202006,
          aggregate: 596500,
          sfd: 1316900,
          sd: 1077400,
          condo: 560100,
          row: 745300
        },
        {
          yearMonth: 202005,
          aggregate: 591100,
          sfd: 1303000,
          sd: 1067900,
          condo: 555000,
          row: 737800
        },
        {
          yearMonth: 202004,
          aggregate: 584300,
          sfd: 1289600,
          sd: 1058400,
          condo: 548400,
          row: 731600
        },
        {
          yearMonth: 202003,
          aggregate: 573300,
          sfd: 1274800,
          sd: 1049000,
          condo: 537300,
          row: 726600
        },
        {
          yearMonth: 202002,
          aggregate: 560000,
          sfd: 1258500,
          sd: 1039500,
          condo: 523700,
          row: 723300
        },
        {
          yearMonth: 202001,
          aggregate: 552100,
          sfd: 1241600,
          sd: 1030000,
          condo: 516000,
          row: 724900
        },
        {
          yearMonth: 201912,
          aggregate: 547700,
          sfd: 1226400,
          sd: 1020500,
          condo: 511900,
          row: 725200
        },
        {
          yearMonth: 201911,
          aggregate: 546600,
          sfd: 1211400,
          sd: 1011000,
          condo: 511400,
          row: 722300
        },
        {
          yearMonth: 201910,
          aggregate: 546600,
          sfd: 1199800,
          sd: 1001500,
          condo: 512100,
          row: 715800
        },
        {
          yearMonth: 201909,
          aggregate: 550400,
          sfd: 1194400,
          sd: 1002400,
          condo: 516200,
          row: 713200
        },
        {
          yearMonth: 201908,
          aggregate: 554400,
          sfd: 1191800,
          sd: 1003300,
          condo: 520500,
          row: 713600
        },
        {
          yearMonth: 201907,
          aggregate: 556800,
          sfd: 1188400,
          sd: 1004200,
          condo: 523000,
          row: 711900
        },
        {
          yearMonth: 201906,
          aggregate: 557900,
          sfd: 1179500,
          sd: 1005100,
          condo: 524000,
          row: 704200
        },
        {
          yearMonth: 201905,
          aggregate: 555800,
          sfd: 1171300,
          sd: 1006000,
          condo: 521700,
          row: 694200
        },
        {
          yearMonth: 201904,
          aggregate: 548600,
          sfd: 1162500,
          sd: 1006800,
          condo: 513900,
          row: 687200
        },
        {
          yearMonth: 201903,
          aggregate: 536800,
          sfd: 1155800,
          sd: 1007700,
          condo: 501200,
          row: 685800
        },
        {
          yearMonth: 201902,
          aggregate: 529200,
          sfd: 1148900,
          sd: 1008600,
          condo: 492900,
          row: 688100
        },
        {
          yearMonth: 201901,
          aggregate: 526500,
          sfd: 1141700,
          sd: 1009500,
          condo: 489900,
          row: 690300
        },
        {
          yearMonth: 201812,
          aggregate: 527400,
          sfd: 1135200,
          sd: 1010400,
          condo: 490800,
          row: 690000
        },
        {
          yearMonth: 201811,
          aggregate: 534700,
          sfd: 1129700,
          sd: 1011200,
          condo: 498700,
          row: 686800
        },
        {
          yearMonth: 201810,
          aggregate: 543500,
          sfd: 1130100,
          sd: 1012100,
          condo: 508000,
          row: 683300
        },
        {
          yearMonth: 201809,
          aggregate: 550900,
          sfd: 1138500,
          sd: 1013000,
          condo: 516000,
          row: 681800
        },
        {
          yearMonth: 201808,
          aggregate: 550000,
          sfd: 1147400,
          sd: 1013900,
          condo: 514900,
          row: 681700
        },
        {
          yearMonth: 201807,
          aggregate: 543600,
          sfd: 1151300,
          sd: 1014800,
          condo: 508000,
          row: 682100
        },
        {
          yearMonth: 201806,
          aggregate: 533400,
          sfd: 1149900,
          sd: 1015000,
          condo: 497000,
          row: 680200
        },
        {
          yearMonth: 201805,
          aggregate: 523400,
          sfd: 1144200,
          sd: 1014400,
          condo: 486200,
          row: 675000
        },
        {
          yearMonth: 201804,
          aggregate: 515900,
          sfd: 1138300,
          sd: 1013900,
          condo: 478200,
          row: 664200
        },
        {
          yearMonth: 201803,
          aggregate: 509200,
          sfd: 1131300,
          sd: 1013400,
          condo: 471100,
          row: 652300
        },
        {
          yearMonth: 201802,
          aggregate: 502400,
          sfd: 1124300,
          sd: 1012900,
          condo: 463700,
          row: 645200
        },
        {
          yearMonth: 201801,
          aggregate: 494600,
          sfd: 1122300,
          sd: 1012400,
          condo: 455400,
          row: 641400
        },
        {
          yearMonth: 201712,
          aggregate: 487300,
          sfd: 1121500,
          sd: 1011900,
          condo: 447600,
          row: 639100
        },
        {
          yearMonth: 201711,
          aggregate: 479900,
          sfd: 1124300,
          sd: 1005700,
          condo: 440100,
          row: 637800
        },
        {
          yearMonth: 201710,
          aggregate: 472600,
          sfd: 1131800,
          sd: 999400,
          condo: 432700,
          row: 639300
        },
        {
          yearMonth: 201709,
          aggregate: 464300,
          sfd: 1146500,
          sd: 993200,
          condo: 424200,
          row: 643500
        },
        {
          yearMonth: 201708,
          aggregate: 458100,
          sfd: 1164500,
          sd: 986900,
          condo: 418100,
          row: 646700
        },
        {
          yearMonth: 201707,
          aggregate: 454100,
          sfd: 1178600,
          sd: 980700,
          condo: 414200,
          row: 646800
        },
        {
          yearMonth: 201706,
          aggregate: 450900,
          sfd: 1183900,
          sd: 974500,
          condo: 411300,
          row: 643700
        },
        {
          yearMonth: 201705,
          aggregate: 448000,
          sfd: 1177200,
          sd: 954700,
          condo: 409700,
          row: 636600
        },
        {
          yearMonth: 201704,
          aggregate: 443800,
          sfd: 1156900,
          sd: 935000,
          condo: 406600,
          row: 625100
        },
        {
          yearMonth: 201703,
          aggregate: 439700,
          sfd: 1128200,
          sd: 915300,
          condo: 403700,
          row: 611600
        },
        {
          yearMonth: 201702,
          aggregate: 432900,
          sfd: 1099900,
          sd: 895600,
          condo: 397800,
          row: 599300
        },
        {
          yearMonth: 201701,
          aggregate: 426200,
          sfd: 1074800,
          sd: 881500,
          condo: 391700,
          row: 590600
        },
        {
          yearMonth: 201612,
          aggregate: 424200,
          sfd: 1052300,
          sd: 872600,
          condo: 390300,
          row: 582900
        },
        {
          yearMonth: 201611,
          aggregate: 420100,
          sfd: 1030500,
          sd: 866600,
          condo: 386300,
          row: 575300
        },
        {
          yearMonth: 201610,
          aggregate: 413400,
          sfd: 1012800,
          sd: 857500,
          condo: 379800,
          row: 567800
        },
        {
          yearMonth: 201609,
          aggregate: 402700,
          sfd: 998400,
          sd: 848500,
          condo: 369000,
          row: 560700
        },
        {
          yearMonth: 201608,
          aggregate: 391700,
          sfd: 985400,
          sd: 836300,
          condo: 358000,
          row: 554600
        },
        {
          yearMonth: 201607,
          aggregate: 380600,
          sfd: 971800,
          sd: 827500,
          condo: 346800,
          row: 547100
        }
      ],
      neighbourhoodTrends: [
        {
          yearMonth: 202106,
          neighbourhoodYoY: 6.4,
          neighbourhoodValue: 634500,
          cityYoY: 14.2,
          cityValue: 1111300,
          provinceYoY: 22.5,
          provinceValue: 854900
        },
        {
          yearMonth: 202105,
          neighbourhoodYoY: 7,
          neighbourhoodValue: 632600,
          cityYoY: 14.1,
          cityValue: 1100600,
          provinceYoY: 22.6,
          provinceValue: 845900
        },
        {
          yearMonth: 202104,
          neighbourhoodYoY: 8,
          neighbourhoodValue: 630800,
          cityYoY: 13.5,
          cityValue: 1084600,
          provinceYoY: 21.9,
          provinceValue: 831900
        },
        {
          yearMonth: 202103,
          neighbourhoodYoY: 10.3,
          neighbourhoodValue: 632300,
          cityYoY: 12.4,
          cityValue: 1062300,
          provinceYoY: 20.4,
          provinceValue: 811400
        },
        {
          yearMonth: 202102,
          neighbourhoodYoY: 13.8,
          neighbourhoodValue: 637400,
          cityYoY: 11.6,
          cityValue: 1044000,
          provinceYoY: 18.9,
          provinceValue: 790500
        },
        {
          yearMonth: 202101,
          neighbourhoodYoY: 16.5,
          neighbourhoodValue: 643000,
          cityYoY: 11.3,
          cityValue: 1033000,
          provinceYoY: 17.5,
          provinceValue: 773600
        },
        {
          yearMonth: 202012,
          neighbourhoodYoY: 17.5,
          neighbourhoodValue: 643300,
          cityYoY: 11.4,
          cityValue: 1025600,
          provinceYoY: 16.5,
          provinceValue: 760400
        },
        {
          yearMonth: 202011,
          neighbourhoodYoY: 16.8,
          neighbourhoodValue: 638600,
          cityYoY: 11.4,
          cityValue: 1017500,
          provinceYoY: 15.5,
          provinceValue: 748700
        },
        {
          yearMonth: 202010,
          neighbourhoodYoY: 15,
          neighbourhoodValue: 628400,
          cityYoY: 11.4,
          cityValue: 1009100,
          provinceYoY: 14.6,
          provinceValue: 737800
        },
        {
          yearMonth: 202009,
          neighbourhoodYoY: 12.2,
          neighbourhoodValue: 617600,
          cityYoY: 11,
          cityValue: 1001200,
          provinceYoY: 13.5,
          provinceValue: 727300
        },
        {
          yearMonth: 202008,
          neighbourhoodYoY: 9.8,
          neighbourhoodValue: 608600,
          cityYoY: 10.3,
          cityValue: 992800,
          provinceYoY: 12.4,
          provinceValue: 717000
        },
        {
          yearMonth: 202007,
          neighbourhoodYoY: 8.1,
          neighbourhoodValue: 601800,
          cityYoY: 9.7,
          cityValue: 983700,
          provinceYoY: 11.5,
          provinceValue: 707200
        },
        {
          yearMonth: 202006,
          neighbourhoodYoY: 6.9,
          neighbourhoodValue: 596500,
          cityYoY: 9.4,
          cityValue: 973500,
          provinceYoY: 10.9,
          provinceValue: 697900
        },
        {
          yearMonth: 202005,
          neighbourhoodYoY: 6.4,
          neighbourhoodValue: 591100,
          cityYoY: 9.4,
          cityValue: 964500,
          provinceYoY: 10.6,
          provinceValue: 690100
        },
        {
          yearMonth: 202004,
          neighbourhoodYoY: 6.5,
          neighbourhoodValue: 584300,
          cityYoY: 9.4,
          cityValue: 955300,
          provinceYoY: 10.2,
          provinceValue: 682200
        },
        {
          yearMonth: 202003,
          neighbourhoodYoY: 6.8,
          neighbourhoodValue: 573300,
          cityYoY: 9,
          cityValue: 945300,
          provinceYoY: 9.6,
          provinceValue: 673800
        },
        {
          yearMonth: 202002,
          neighbourhoodYoY: 5.8,
          neighbourhoodValue: 560000,
          cityYoY: 8.5,
          cityValue: 935700,
          provinceYoY: 8.7,
          provinceValue: 665200
        },
        {
          yearMonth: 202001,
          neighbourhoodYoY: 4.9,
          neighbourhoodValue: 552100,
          cityYoY: 7.9,
          cityValue: 928200,
          provinceYoY: 7.8,
          provinceValue: 658200
        },
        {
          yearMonth: 201912,
          neighbourhoodYoY: 3.9,
          neighbourhoodValue: 547700,
          cityYoY: 7.4,
          cityValue: 920900,
          provinceYoY: 7,
          provinceValue: 652800
        },
        {
          yearMonth: 201911,
          neighbourhoodYoY: 2.2,
          neighbourhoodValue: 546600,
          cityYoY: 6.9,
          cityValue: 913200,
          provinceYoY: 6.3,
          provinceValue: 648000
        },
        {
          yearMonth: 201910,
          neighbourhoodYoY: 0.6,
          neighbourhoodValue: 546600,
          cityYoY: 6.2,
          cityValue: 906100,
          provinceYoY: 5.6,
          provinceValue: 644000
        },
        {
          yearMonth: 201909,
          neighbourhoodYoY: -0.1,
          neighbourhoodValue: 550400,
          cityYoY: 5.5,
          cityValue: 902300,
          provinceYoY: 4.9,
          provinceValue: 640800
        },
        {
          yearMonth: 201908,
          neighbourhoodYoY: 0.8,
          neighbourhoodValue: 554400,
          cityYoY: 4.9,
          cityValue: 900200,
          provinceYoY: 4.2,
          provinceValue: 637700
        },
        {
          yearMonth: 201907,
          neighbourhoodYoY: 2.4,
          neighbourhoodValue: 556800,
          cityYoY: 4.3,
          cityValue: 896700,
          provinceYoY: 3.6,
          provinceValue: 634000
        },
        {
          yearMonth: 201906,
          neighbourhoodYoY: 4.6,
          neighbourhoodValue: 557900,
          cityYoY: 3.6,
          cityValue: 889700,
          provinceYoY: 3.1,
          provinceValue: 629200
        },
        {
          yearMonth: 201905,
          neighbourhoodYoY: 6.2,
          neighbourhoodValue: 555800,
          cityYoY: 3.2,
          cityValue: 881600,
          provinceYoY: 2.8,
          provinceValue: 624000
        },
        {
          yearMonth: 201904,
          neighbourhoodYoY: 6.3,
          neighbourhoodValue: 548600,
          cityYoY: 2.9,
          cityValue: 873500,
          provinceYoY: 2.6,
          provinceValue: 619000
        },
        {
          yearMonth: 201903,
          neighbourhoodYoY: 5.4,
          neighbourhoodValue: 536800,
          cityYoY: 3,
          cityValue: 867400,
          provinceYoY: 2.5,
          provinceValue: 614900
        },
        {
          yearMonth: 201902,
          neighbourhoodYoY: 5.3,
          neighbourhoodValue: 529200,
          cityYoY: 3,
          cityValue: 862700,
          provinceYoY: 2.5,
          provinceValue: 612100
        },
        {
          yearMonth: 201901,
          neighbourhoodYoY: 6.4,
          neighbourhoodValue: 526500,
          cityYoY: 2.9,
          cityValue: 859900,
          provinceYoY: 2.3,
          provinceValue: 610800
        },
        {
          yearMonth: 201812,
          neighbourhoodYoY: 8.2,
          neighbourhoodValue: 527400,
          cityYoY: 2.7,
          cityValue: 857100,
          provinceYoY: 2.1,
          provinceValue: 610000
        },
        {
          yearMonth: 201811,
          neighbourhoodYoY: 11.4,
          neighbourhoodValue: 534700,
          cityYoY: 2.2,
          cityValue: 854000,
          provinceYoY: 1.6,
          provinceValue: 609700
        },
        {
          yearMonth: 201810,
          neighbourhoodYoY: 15,
          neighbourhoodValue: 543500,
          cityYoY: 1.7,
          cityValue: 852900,
          provinceYoY: 1,
          provinceValue: 610000
        },
        {
          yearMonth: 201809,
          neighbourhoodYoY: 18.7,
          neighbourhoodValue: 550900,
          cityYoY: 1.2,
          cityValue: 854900,
          provinceYoY: 0.3,
          provinceValue: 610900
        },
        {
          yearMonth: 201808,
          neighbourhoodYoY: 20.1,
          neighbourhoodValue: 550000,
          cityYoY: 0.6,
          cityValue: 858400,
          provinceYoY: -0.5,
          provinceValue: 612000
        },
        {
          yearMonth: 201807,
          neighbourhoodYoY: 19.7,
          neighbourhoodValue: 543600,
          cityYoY: 0.1,
          cityValue: 860100,
          provinceYoY: -1.2,
          provinceValue: 611800
        },
        {
          yearMonth: 201806,
          neighbourhoodYoY: 18.3,
          neighbourhoodValue: 533400,
          cityYoY: 0,
          cityValue: 858400,
          provinceYoY: -1.4,
          provinceValue: 610000
        },
        {
          yearMonth: 201805,
          neighbourhoodYoY: 16.8,
          neighbourhoodValue: 523400,
          cityYoY: 0.5,
          cityValue: 854400,
          provinceYoY: -0.9,
          provinceValue: 607000
        },
        {
          yearMonth: 201804,
          neighbourhoodYoY: 16.3,
          neighbourhoodValue: 515900,
          cityYoY: 1.6,
          cityValue: 848500,
          provinceYoY: 0.4,
          provinceValue: 603400
        },
        {
          yearMonth: 201803,
          neighbourhoodYoY: 15.8,
          neighbourhoodValue: 509200,
          cityYoY: 3.1,
          cityValue: 842400,
          provinceYoY: 2.2,
          provinceValue: 599900
        },
        {
          yearMonth: 201802,
          neighbourhoodYoY: 16.1,
          neighbourhoodValue: 502400,
          cityYoY: 4.3,
          cityValue: 837300,
          provinceYoY: 4,
          provinceValue: 597400
        },
        {
          yearMonth: 201801,
          neighbourhoodYoY: 16.1,
          neighbourhoodValue: 494600,
          cityYoY: 5.6,
          cityValue: 835500,
          provinceYoY: 5.7,
          provinceValue: 597000
        },
        {
          yearMonth: 201712,
          neighbourhoodYoY: 14.9,
          neighbourhoodValue: 487300,
          cityYoY: 7.1,
          cityValue: 835000,
          provinceYoY: 7.2,
          provinceValue: 597700
        },
        {
          yearMonth: 201711,
          neighbourhoodYoY: 14.2,
          neighbourhoodValue: 479900,
          cityYoY: 8.7,
          cityValue: 835500,
          provinceYoY: 9.1,
          provinceValue: 600100
        },
        {
          yearMonth: 201710,
          neighbourhoodYoY: 14.3,
          neighbourhoodValue: 472600,
          cityYoY: 10.5,
          cityValue: 838300,
          provinceYoY: 11.2,
          provinceValue: 603800
        },
        {
          yearMonth: 201709,
          neighbourhoodYoY: 15.3,
          neighbourhoodValue: 464300,
          cityYoY: 12.6,
          cityValue: 844800,
          provinceYoY: 13.6,
          provinceValue: 609300
        },
        {
          yearMonth: 201708,
          neighbourhoodYoY: 17,
          neighbourhoodValue: 458100,
          cityYoY: 15,
          cityValue: 853100,
          provinceYoY: 16.2,
          provinceValue: 615200
        },
        {
          yearMonth: 201707,
          neighbourhoodYoY: 19.3,
          neighbourhoodValue: 454100,
          cityYoY: 17.4,
          cityValue: 858900,
          provinceYoY: 18.7,
          provinceValue: 619300
        },
        {
          yearMonth: 201706,
          neighbourhoodYoY: 21.3,
          neighbourhoodValue: 450900,
          cityYoY: 19.4,
          cityValue: 858400,
          provinceYoY: 20.7,
          provinceValue: 618700
        },
        {
          yearMonth: 201705,
          neighbourhoodYoY: 22.9,
          neighbourhoodValue: 448000,
          cityYoY: 20.5,
          cityValue: 850100,
          provinceYoY: 21.8,
          provinceValue: 612500
        },
        {
          yearMonth: 201704,
          neighbourhoodYoY: 22.7,
          neighbourhoodValue: 443800,
          cityYoY: 20.7,
          cityValue: 835000,
          provinceYoY: 21.8,
          provinceValue: 600900
        },
        {
          yearMonth: 201703,
          neighbourhoodYoY: 21,
          neighbourhoodValue: 439700,
          cityYoY: 20.3,
          cityValue: 817200,
          provinceYoY: 21.1,
          provinceValue: 586800
        },
        {
          yearMonth: 201702,
          neighbourhoodYoY: 18,
          neighbourhoodValue: 432900,
          cityYoY: 19.8,
          cityValue: 802500,
          provinceYoY: 20.1,
          provinceValue: 574200
        },
        {
          yearMonth: 201701,
          neighbourhoodYoY: 15.5,
          neighbourhoodValue: 426200,
          cityYoY: 19.2,
          cityValue: 790900,
          provinceYoY: 19.3,
          provinceValue: 564900
        },
        {
          yearMonth: 201612,
          neighbourhoodYoY: 14.7,
          neighbourhoodValue: 424200,
          cityYoY: 18.3,
          cityValue: 779900,
          provinceYoY: 18.4,
          provinceValue: 557400
        },
        {
          yearMonth: 201611,
          neighbourhoodYoY: 13.8,
          neighbourhoodValue: 420100,
          cityYoY: 17.5,
          cityValue: 768600,
          provinceYoY: 17.5,
          provinceValue: 550100
        },
        {
          yearMonth: 201610,
          neighbourhoodYoY: 11.6,
          neighbourhoodValue: 413400,
          cityYoY: 16.7,
          cityValue: 758400,
          provinceYoY: 16.5,
          provinceValue: 543200
        },
        {
          yearMonth: 201609,
          neighbourhoodYoY: 8.8,
          neighbourhoodValue: 402700,
          cityYoY: 15.9,
          cityValue: 750000,
          provinceYoY: 15.5,
          provinceValue: 536300
        },
        {
          yearMonth: 201608,
          neighbourhoodYoY: 6.1,
          neighbourhoodValue: 391700,
          cityYoY: 14.9,
          cityValue: 741700,
          provinceYoY: 14.5,
          provinceValue: 529400
        },
        {
          yearMonth: 201607,
          neighbourhoodYoY: 3.7,
          neighbourhoodValue: 380600,
          cityYoY: 13.8,
          cityValue: 731700,
          provinceYoY: 13.5,
          provinceValue: 521500
        }
      ],
      currentNeighbourhoodMonthLower: 500500,
      currentNeighbourhoodMonthUpper: 991600,
      currentNeighbourhoodMonthLower_SFD: 1068500,
      currentNeighbourhoodMonthUpper_SFD: 2021600,
      currentNeighbourhoodMonthYoY_SFD: 15.19,
      currentNeighbourhoodMonthGeoName_SFD: "Toronto",
      currentNeighbourhoodMonthGeoType_SFD: "06_City",
      currentNeighbourhoodMonthLower_SD: 1060900,
      currentNeighbourhoodMonthUpper_SD: 1352600,
      currentNeighbourhoodMonthYoY_SD: 10.56,
      currentNeighbourhoodMonthGeoName_SD: "Flemington Park",
      currentNeighbourhoodMonthGeoType_SD: "07_FSA",
      currentNeighbourhoodMonthLower_CONDO: 500500,
      currentNeighbourhoodMonthUpper_CONDO: 991600,
      currentNeighbourhoodMonthYoY_CONDO: 5.77,
      currentNeighbourhoodMonthGeoName_CONDO: "Flemington Park",
      currentNeighbourhoodMonthGeoType_CONDO: "07_FSA",
      currentNeighbourhoodMonthLower_ROW: 743800,
      currentNeighbourhoodMonthUpper_ROW: 1042800,
      currentNeighbourhoodMonthYoY_ROW: 15.98,
      currentNeighbourhoodMonthGeoName_ROW: "Toronto",
      currentNeighbourhoodMonthGeoType_ROW: "06_City",
      valueLow: 430400,
      valueHigh: 543100,
      currentValue: 489800,
      confidenceScore: "Medium",
      currentMonth: "202106",
      percentChange: 74.94,
      pctChangePerYear: 8.75,
      level: "07_FSA"
    }
  }
}

export default mockData;