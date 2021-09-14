const mockData = {
  dashboard: {
    "orders": [["", "3992769", "09/09/2021 14:50 PM", "", "ter", " 110 DORSET RD, Scarborough ON M1M2T1", "100000.0000", "Refinance", "NPX", "Full Appraisal", "Unassigned", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992768", "09/09/2021 14:10 PM", "", "terri", " 90 DORSET RD, Scarborough ON M1M2T1", "100000.0000", "Refinance", "ADAPT", "Full Appraisal", "Unassigned", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992712", "08/09/2021 10:43 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992712/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992704", "08/09/2021 10:31 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "Full Appraisal", "Unassigned", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992703", "08/09/2021 10:29 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "Full Appraisal", "In Progress", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992702", "08/09/2021 10:25 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992702/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992701", "08/09/2021 10:14 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992701/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992700", "08/09/2021 09:54 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992700/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992699", "08/09/2021 09:42 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992699/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992691", "08/09/2021 03:59 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "600000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992691/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992682", "07/09/2021 17:46 PM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992682/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992681", "07/09/2021 17:42 PM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "540000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992681/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992680", "07/09/2021 17:24 PM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992680/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992679", "07/09/2021 16:47 PM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992679/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992678", "07/09/2021 16:28 PM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992678/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992677", "07/09/2021 15:11 PM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992677/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["557400", "3992676", "07/09/2021 15:05 PM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Refinance", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992676/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992675", "07/09/2021 11:00 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "500000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992675/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992674", "07/09/2021 10:52 AM", "987456321", "laura.forester@icloud.com", " 2083 Sprucedale Dr, Oakville ON L6H5W3", "1200000.0000", "Sale/Purchase", "MANULIFE-B", "Full Appraisal", "Payment Required", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992673", "07/09/2021 10:14 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "500000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992673/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992670", "07/09/2021 09:35 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "300000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992670/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992668", "07/09/2021 07:36 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "500000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992668/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992667", "07/09/2021 07:32 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "550000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992667/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992664", "07/09/2021 06:54 AM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "500000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992664/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992645", "03/09/2021 17:17 PM", "", "test", "509 133 WYNFORD DR, North York ON M3C0J5", "200000.0000", "Sale/Purchase", "B2B", "AVM - Teranet", "Complete", null, "AVM - Teranet", "", "", "", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992645/AppraisalReportPDF", "", "", "1", "0", "0", "0", ""], ["", "3992439", "02/09/2021 15:29 PM", "", "terri", " 108 DORSET RD, Scarborough ON M1M2T1", "100000.0000", "Refinance", "ATB", "Full Appraisal", "In Progress", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["$99000 as is and $100000 as completed", "3992522", "01/09/2021 15:21 PM", "", "tester", " 32 Givins St, Toronto ON M6J2X7", "100000.0000", "Refinance", "NPX", "Full Appraisal", "Complete", null, "Full Appraisal", "", "", "https://access-qa.rpsrealsolutions.com//api/reports/3992522/PaymentReceipt/30597", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992522/AppraisalReportPDF", "https://access-qa.rpsrealsolutions.com//api/reports/3992522/OrderReportsLatestCARPDF", "", "1", "3", "0", "0", ""], ["99000-101000", "3992578", "01/09/2021 15:08 PM", "", "terri", " 12 Bayport Pvt, Ottawa ON K1V0Z3", "100000.0000", "Refinance", "NPX", "Desk Review", "Complete", null, "Desk Review", "", "", "https://access-qa.rpsrealsolutions.com//api/reports/3992578/PaymentReceipt/30596", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992578/AppraisalReportPDF", "https://access-qa.rpsrealsolutions.com//api/reports/3992578/OrderReportsLatestCARPDF", "", "1", "11", "0", "0", ""], ["99000-101000", "3992577", "01/09/2021 14:52 PM", "", "terri", " 696 45TH AVE W, Vancouver BC V5Z2P8", "100000.0000", "Refinance", "NPX", "Drive By", "Complete", null, "Drive By", "", "", "https://access-qa.rpsrealsolutions.com//api/reports/3992577/PaymentReceipt/30595", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992577/AppraisalReportPDF", "https://access-qa.rpsrealsolutions.com//api/reports/3992577/OrderReportsLatestCARPDF", "", "1", "12", "0", "0", ""], ["100000 ", "3992576", "01/09/2021 14:37 PM", "", "terri", " 23 Feltham Rd, Markham ON L3P6T3", "100000.0000", "Refinance", "NPX", "Full Appraisal", "Complete", null, "Full Appraisal", "", "", "https://access-qa.rpsrealsolutions.com//api/reports/3992576/PaymentReceipt/30594", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992576/AppraisalReportPDF", "https://access-qa.rpsrealsolutions.com//api/reports/3992576/OrderReportsLatestCARPDF", "", "1", "5", "0", "0", ""], ["100000 ", "3992540", "31/08/2021 11:52 AM", "", "terri", " 90 Givins St, Toronto ON M6J2X8", "100000.0000", "Refinance", "NPX", "Full Appraisal", "Complete", null, "Full Appraisal", "", "", "https://access-qa.rpsrealsolutions.com//api/reports/3992540/PaymentReceipt/30593", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992540/AppraisalReportPDF", "https://access-qa.rpsrealsolutions.com//api/reports/3992540/OrderReportsLatestCARPDF", "", "1", "5", "0", "0", ""], ["", "3992524", "31/08/2021 10:39 AM", "", "terri", " 38 Givins St, Toronto ON M6J2X7", "100000.0000", "Refinance", "MERIX", "Full Appraisal", "In Progress", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["$99000 as is and $100000 as completed", "3992517", "31/08/2021 10:37 AM", "", "terri", " 101 Givins St, Toronto ON M6J2Y1", "100000.0000", "Refinance", "NPX", "Full Appraisal", "Complete", null, "Full Appraisal", "", "", "https://access-qa.rpsrealsolutions.com//api/reports/3992517/PaymentReceipt/30592", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992517/AppraisalReportPDF", "https://access-qa.rpsrealsolutions.com//api/reports/3992517/OrderReportsLatestCARPDF", "", "1", "3", "0", "0", ""], ["", "3992523", "31/08/2021 10:33 AM", "", "terri", " 36 Givins St, Toronto ON M6J2X7", "100000.0000", "Refinance", "TD", "Full Appraisal", "Payment Required", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992518", "31/08/2021 10:29 AM", "", "terri 2", " 103 Givins St, Toronto ON M6J2Y1", "100000.0000", "Refinance", "BRIDGEWATER", "Full Appraisal", "Payment Required", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992519", "31/08/2021 10:28 AM", "", "terri", " 105 Givins St, Toronto ON M6J2Y1", "100000.0000", "Refinance", "NPX", "Full Appraisal", "In Progress", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992511", "30/08/2021 18:11 PM", "", "npx test", " 3051 Battleford Rd, Mississauga ON L5N5Z9", "600000.0000", "Sale/Purchase", "NPX", "Full Appraisal", "Unassigned", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992510", "30/08/2021 17:39 PM", "", "Gokul npx test", " 19 AUGUSTA CRES, St Thomas ON N5R6J7", "300000.0000", "Refinance", "NPX", "Full Appraisal", "Unassigned", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["$99000 as is and $100000 as completed", "3992508", "30/08/2021 17:07 PM", "", "Terri", " 3550 Adanac St, Vancouver BC V5K4Y6", "100000.0000", "Refinance", "NPX", "Full Appraisal", "Complete", null, "Full Appraisal", "", "", "https://access-qa.rpsrealsolutions.com//api/reports/3992508/PaymentReceipt/30591", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992508/AppraisalReportPDF", "https://access-qa.rpsrealsolutions.com//api/reports/3992508/OrderReportsLatestCARPDF", "", "1", "3", "0", "0", ""], ["", "3992509", "30/08/2021 17:03 PM", "", "terri", " 62 Givins St, Toronto ON M6J2X8", "100000.0000", "Refinance", "NPX", "Drive By", "In Progress", null, "Drive By", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["100000 ", "3992504", "30/08/2021 16:20 PM", "", "Terri", " 8 Heathfield Dr, Scarborough ON M1M3A7", "100000.0000", "Refinance", "NPX", "Full Appraisal", "Complete", null, "Full Appraisal", "", "", "https://access-qa.rpsrealsolutions.com//api/reports/3992504/PaymentReceipt/30590", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992504/AppraisalReportPDF", "https://access-qa.rpsrealsolutions.com//api/reports/3992504/OrderReportsLatestCARPDF", "", "1", "4", "0", "0", ""], ["100000 ", "3992459", "26/08/2021 18:52 PM", "", "terri", " 6 LAURELEAF RD S, North York ON M2M3A2", "100000.0000", "Refinance", "NPX", "Full Appraisal", "Complete", null, "Full Appraisal", "", "", "https://access-qa.rpsrealsolutions.com//api/reports/3992459/PaymentReceipt/30589", "", "", "0", "1", "https://access-qa.rpsrealsolutions.com//api/reports/3992459/AppraisalReportPDF", "https://access-qa.rpsrealsolutions.com//api/reports/3992459/OrderReportsLatestCARPDF", "", "1", "4", "0", "0", ""], ["", "3992461", "26/08/2021 17:41 PM", "", "erwe", "M1 1000 GERRARD ST E, Toronto ON M4M3G6", "100000.0000", "Refinance", "NPX", "Desk Review", "Unassigned", null, "Desk Review", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992460", "26/08/2021 17:39 PM", "", "rere", " 4 Duncombe Blvd, Scarborough ON M1M3A3", "100000.0000", "Sale/Purchase", "NPX", "Drive By", "Unassigned", null, "Drive By", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992445", "26/08/2021 15:09 PM", "", "terri", "   4 Baker St, Iron Bridge ON P0R1H0", "100000.0000", "Refinance", "FRACTION", "Full Appraisal", "Unassigned", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992444", "26/08/2021 14:49 PM", "", "Terri", " 2320 40TH AVE W, Vancouver BC V6M4H6", "100000.0000", "Refinance", "NPX", "Full Appraisal - 2-4 plex", "Unassigned", null, "Full Appraisal - 2-4 plex", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992443", "26/08/2021 13:42 PM", "", "Terri", " 98 EILEEN AVE, York ON M6N1V4", "100000.0000", "Refinance", "NPX", "Full Appraisal", "Unassigned", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3991815", "26/08/2021 11:45 AM", "dfsfsf", "sdfsf", "1 842 Richmond Place, MONTRÉAL QC H3J1V7", "789000.0000", "Transfer-In", "B2B", "Drive By", "In Progress", null, "Drive By", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3991814", "18/08/2021 13:06 PM", "fdgdfg", "ssaaa", " 229 CHARTLAND BLVD S, Scarborough ON M1S2S4", "789000.0000", "Refinance", "B2B", "Full Appraisal - By Plans/New Constr.", "In Progress", null, "Full Appraisal - By Plans/New Constr.", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""], ["", "3992106", "10/08/2021 09:33 AM", "", "terri", " 29 Olga St, Scarborough ON M1M0A5", "100000.0000", "Refinance", "MERIX", "Full Appraisal", "In Progress", null, "Full Appraisal", "", "", "", "", "", "0", "0", "", "", "", "", "0", "0", "0", ""]],
    "ordersCount": {
      "OrderCount": 100
    },
    "selectedFields": [{
      "FieldName": "AppraisalValue",
      "DisplayName": "Appraisal Value",
      "Type": "S",
      "FieldID": 17,
      "isDefault": false,
      "Operator": "=",
      "JobCatID": 0,
      "PropertyInfo": {
        "Name": "AppraisalValue",
        "AssemblyName": "Client Portal Web, Version=1.2.0.26803, Culture=neutral, PublicKeyToken=null",
        "ClassName": "Client_Portal_Web.Models.Caps.Order",
        "Signature": "System.String AppraisalValue",
        "Signature2": "System.String AppraisalValue",
        "MemberType": 16,
        "GenericArguments": null
      }
    }, {
      "FieldName": "OrderID",
      "DisplayName": "Order ID",
      "Type": "S         ",
      "FieldID": 1,
      "isDefault": false,
      "Operator": "=",
      "JobCatID": 0,
      "PropertyInfo": {
        "Name": "OrderID",
        "AssemblyName": "Client Portal Web, Version=1.2.0.26803, Culture=neutral, PublicKeyToken=null",
        "ClassName": "Client_Portal_Web.Models.Caps.Order",
        "Signature": "System.String OrderID",
        "Signature2": "System.String OrderID",
        "MemberType": 16,
        "GenericArguments": null
      }
    }, {
      "FieldName": "LastModifiedDate",
      "DisplayName": "Last Modified Date",
      "Type": "D",
      "FieldID": 7,
      "isDefault": false,
      "Operator": "=",
      "JobCatID": 0,
      "PropertyInfo": {
        "Name": "LastModifiedDate",
        "AssemblyName": "Client Portal Web, Version=1.2.0.26803, Culture=neutral, PublicKeyToken=null",
        "ClassName": "Client_Portal_Web.Models.Caps.Order",
        "Signature": "System.Nullable`1[System.DateTime] LastModifiedDate",
        "Signature2": "System.Nullable`1[[System.DateTime, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]] LastModifiedDate",
        "MemberType": 16,
        "GenericArguments": null
      }
    }, {
      "FieldName": "RequesterRefNo",
      "DisplayName": "Internal Reference #",
      "Type": "S",
      "FieldID": 10,
      "isDefault": false,
      "Operator": "=",
      "JobCatID": 0,
      "PropertyInfo": {
        "Name": "RequesterRefNo",
        "AssemblyName": "Client Portal Web, Version=1.2.0.26803, Culture=neutral, PublicKeyToken=null",
        "ClassName": "Client_Portal_Web.Models.Caps.Order",
        "Signature": "System.String RequesterRefNo",
        "Signature2": "System.String RequesterRefNo",
        "MemberType": 16,
        "GenericArguments": null
      }
    }, {
      "FieldName": "ApplicantFullName",
      "DisplayName": "Applicant",
      "Type": "S",
      "FieldID": 4,
      "isDefault": true,
      "Operator": "like",
      "JobCatID": 0,
      "PropertyInfo": {
        "Name": "ApplicantFullName",
        "AssemblyName": "Client Portal Web, Version=1.2.0.26803, Culture=neutral, PublicKeyToken=null",
        "ClassName": "Client_Portal_Web.Models.Caps.Order",
        "Signature": "System.String ApplicantFullName",
        "Signature2": "System.String ApplicantFullName",
        "MemberType": 16,
        "GenericArguments": null
      }
    }, {
      "FieldName": "FullAddress",
      "DisplayName": "Address",
      "Type": "S",
      "FieldID": 2,
      "isDefault": true,
      "Operator": "like",
      "JobCatID": 0,
      "PropertyInfo": {
        "Name": "FullAddress",
        "AssemblyName": "Client Portal Web, Version=1.2.0.26803, Culture=neutral, PublicKeyToken=null",
        "ClassName": "Client_Portal_Web.Models.Caps.Order",
        "Signature": "System.String FullAddress",
        "Signature2": "System.String FullAddress",
        "MemberType": 16,
        "GenericArguments": null
      }
    }, {
      "FieldName": "EstimatedMarketValue",
      "DisplayName": "Estimated Market Value",
      "Type": "S",
      "FieldID": 15,
      "isDefault": false,
      "Operator": "=",
      "JobCatID": 0,
      "PropertyInfo": {
        "Name": "EstimatedMarketValue",
        "AssemblyName": "Client Portal Web, Version=1.2.0.26803, Culture=neutral, PublicKeyToken=null",
        "ClassName": "Client_Portal_Web.Models.Caps.Order",
        "Signature": "System.Decimal EstimatedMarketValue",
        "Signature2": "System.Decimal EstimatedMarketValue",
        "MemberType": 16,
        "GenericArguments": null
      }
    }, {
      "FieldName": "TransactionType",
      "DisplayName": "Transaction Type",
      "Type": "L",
      "FieldID": 22,
      "isDefault": false,
      "Operator": "=",
      "JobCatID": 0,
      "PropertyInfo": {
        "Name": "TransactionType",
        "AssemblyName": "Client Portal Web, Version=1.2.0.26803, Culture=neutral, PublicKeyToken=null",
        "ClassName": "Client_Portal_Web.Models.Caps.Order",
        "Signature": "System.String TransactionType",
        "Signature2": "System.String TransactionType",
        "MemberType": 16,
        "GenericArguments": null
      }
    }, {
      "FieldName": "GP_CustomerID",
      "DisplayName": "Lender Name",
      "Type": "S",
      "FieldID": 5,
      "isDefault": true,
      "Operator": "like",
      "JobCatID": 0,
      "PropertyInfo": {
        "Name": "GP_CustomerID",
        "AssemblyName": "Client Portal Web, Version=1.2.0.26803, Culture=neutral, PublicKeyToken=null",
        "ClassName": "Client_Portal_Web.Models.Caps.Order",
        "Signature": "System.String GP_CustomerID",
        "Signature2": "System.String GP_CustomerID",
        "MemberType": 16,
        "GenericArguments": null
      }
    }, {
      "FieldName": "ServiceType",
      "DisplayName": "Appraisal Type",
      "Type": "L",
      "FieldID": 12,
      "isDefault": false,
      "Operator": "=",
      "JobCatID": 0,
      "PropertyInfo": {
        "Name": "ServiceType",
        "AssemblyName": "Client Portal Web, Version=1.2.0.26803, Culture=neutral, PublicKeyToken=null",
        "ClassName": "Client_Portal_Web.Models.Caps.Order",
        "Signature": "System.String ServiceType",
        "Signature2": "System.String ServiceType",
        "MemberType": 16,
        "GenericArguments": null
      }
    }, {
      "FieldName": "OrderStatus",
      "DisplayName": "Order Status",
      "Type": "L",
      "FieldID": 3,
      "isDefault": true,
      "Operator": "=",
      "JobCatID": 0,
      "PropertyInfo": {
        "Name": "OrderStatus",
        "AssemblyName": "Client Portal Web, Version=1.2.0.26803, Culture=neutral, PublicKeyToken=null",
        "ClassName": "Client_Portal_Web.Models.Caps.Order",
        "Signature": "System.String OrderStatus",
        "Signature2": "System.String OrderStatus",
        "MemberType": 16,
        "GenericArguments": null
      }
    }
    ],
    "gpLenderId": "BW-CENTTEST"
  }
}


export default mockData;