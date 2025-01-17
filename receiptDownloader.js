//////////////////////
// QUERIES
//////////////////////
const Query = (function() {
    const receiptsWithCounts = {
      name: 'receiptsWithCounts',
      query: `{"query":"query 
        receiptsWithCounts($startDate: String!, $endDate: String!, $documentType: String!, $documentSubType: String!) {
            receiptsWithCounts(startDate: $startDate, endDate: $endDate, documentType: $documentType, documentSubType: $documentSubType) {
                receipts {
                    warehouseName
                    receiptType
                    documentType
                    transactionDateTime
                    transactionDate
                    companyNumber
                    warehouseNumber
                    operatorNumber
                    warehouseName
                    warehouseShortName
                    registerNumber
                    transactionNumber
                    transactionType
                    transactionBarcode
                    total
                    warehouseAddress1
                    warehouseAddress2
                    warehouseCity
                    warehouseState
                    warehouseCountry
                    warehousePostalCode
                    totalItemCount
                    subTotal
                    taxes
                    total
                    invoiceNumber
                    sequenceNumber
                    itemArray {
                        itemNumber
                        itemDescription01
                        unit
                        amount
                        taxFlag
                        fuelUnitQuantity
                        itemUnitPriceAmount
                        fuelUomCode
                        ${/*
                        frenchItemDescription1
                        itemDescription02
                        frenchItemDescription2
                        itemIdentifier
                        itemDepartmentNumber
                        merchantID
                        entryMethod
                        transDepartmentNumber
                        fuelGradeCode
                        fuelUomDescription
                        fuelUomDescriptionFr
                        fuelGradeDescription
                        fuelGradeDescriptionFr
                        */''}
                    }
                    tenderArray {
                        tenderTypeCode
                        tenderSubTypeCode
                        tenderDescription
                        amountTender
                        displayAccountNumber
                        sequenceNumber
                        approvalNumber
                        responseCode
                        tenderTypeName
                        transactionID
                        merchantID
                        entryMethod
                        tenderAcctTxnNumber
                        tenderAuthorizationCode
                        tenderTypeName
                        tenderTypeNameFr
                        tenderEntryMethodDescription
                    }
                    subTaxes {
                        tax1
                        tax2
                        tax3
                        tax4
                        aTaxPercent
                        aTaxLegend
                        aTaxAmount
                        aTaxPrintCode
                        aTaxPrintCodeFR
                        aTaxIdentifierCode
                        bTaxPercent
                        bTaxLegend
                        bTaxAmount
                        bTaxPrintCode
                        bTaxPrintCodeFR
                        bTaxIdentifierCode
                        cTaxPercent
                        cTaxLegend
                        cTaxAmount
                        cTaxIdentifierCode
                        dTaxPercent
                        dTaxLegend
                        dTaxAmount
                        dTaxPrintCode
                        dTaxPrintCodeFR
                        dTaxIdentifierCode
                        uTaxLegend
                        uTaxAmount
                        uTaxableAmount
                    }
                    instantSavings
                    membershipNumber
                }
            }
        }","variables":{"startDate":"1/01/2019","endDate":"12/31/2026","documentType":"all","documentSubType":"all"}}`
    };

    const getOnlineOrders = {
    name: 'getOnlineOrders',
    query: `{"query":"query 
        getOnlineOrders($startDate: String!, $endDate: String!, $pageNumber: Int , $pageSize: Int, $warehouseNumber: String!) {
            getOnlineOrders(startDate: $startDate, endDate: $endDate, pageNumber: $pageNumber, pageSize: $pageSize, warehouseNumber: $warehouseNumber) {
              pageNumber
              pageSize
              totalNumberOfRecords
              bcOrders {
                orderHeaderId
                orderPlacedDate : orderedDate
                orderNumber : sourceOrderNumber 
                orderTotal
                warehouseNumber
                status
                emailAddress
                orderCancelAllowed
                orderPaymentFailed : orderPaymentEditAllowed
                orderReturnAllowed
                orderLineItems {
                  orderLineItemCancelAllowed
                  orderLineItemId
                  orderReturnAllowed
                  itemId
                  itemNumber
                  itemTypeId
                  lineNumber
                  itemDescription
                  deliveryDate
                  warehouseNumber
                  status
                  orderStatus
                  parentOrderLineItemId
                  isFSAEligible
                  shippingType
                  shippingTimeFrame
                  isShipToWarehouse
                  carrierItemCategory
                  carrierContactPhone
                  programTypeId
                  isBuyAgainEligible
                  scheduledDeliveryDate
                  scheduledDeliveryDateEnd
                  configuredItemData
                  shipment {
                    shipmentId             
                    orderHeaderId
                    orderShipToId 
                    lineNumber 
                    orderNumber
                    shippingType 
                    shippingTimeFrame 
                    shippedDate 
                    packageNumber 
                    trackingNumber 
                    trackingSiteUrl 
                    carrierName         
                    estimatedArrivalDate 
                    deliveredDate 
                    isDeliveryDelayed 
                    isEstimatedArrivalDateEligible 
                    statusTypeId 
                    status 
                    pickUpReadyDate
                    pickUpCompletedDate
                    reasonCode
                    trackingEvent {
                      event
                      carrierName
                      eventDate
                      estimatedDeliveryDate
                      scheduledDeliveryDate
                      trackingNumber
                    }
                  }
                }
              }
            }
        }","variables":{"pageNumber":1,"pageSize":10,"startDate":"2019-1-01","endDate":"2026-12-31","warehouseNumber":"894"}}`
    };

    const getOrderDetails = {
      name: 'getOrderDetails',
      query: `{"query":"query 
        getOrderDetails($orderNumbers: [String]) {
              getOrderDetails(orderNumbers:$orderNumbers) {
                warehouseNumber
                orderNumber : sourceOrderNumber 
                orderPlacedDate : orderedDate
                status
                locale
                orderReturnAllowed
                shopCardAppliedAmount
                giftOfMembershipAppliedAmount
                orderCancelAllowed
                orderPaymentFailed : orderPaymentEditAllowed
                orderShippingEditAllowed
                merchandiseTotal
                retailDeliveryFee
                shippingAndHandling
                grocerySurcharge
                frozenSurchargeFee
                uSTaxTotal1
                foreignTaxTotal1
                foreignTaxTotal2
                foreignTaxTotal3
                foreignTaxTotal4  
                orderTotal
                firstName
                lastName
                line1
                line2
                line3
                city
                state
                postalCode
                countryCode
                companyName
                emailAddress
                phoneNumber
                membershipNumber
                nonMemberSurchargeAmount
                discountAmount
                retailDeliveryFees {
                  key
                  value
                }
                orderPayment {
                  paymentType
                  totalCharged
                  cardExpireMonth
                  cardExpireYear
                  nameOnCard
                  cardNumber
                  isGOMPayment
                  storedValueBucket
                }
                shipToAddress : orderShipTos {
                  referenceNumber
                  firstName
                  lastName
                  line1
                  line2
                  line3
                  city
                  state
                  postalCode
                  countryCode
                  companyName
                  emailAddress
                  phoneNumber : contactPhone
                  isShipToWarehouse
                  addressWarehouseName
                  giftMessage
                  giftToFirstName
                  giftToLastName
                  giftFromName
                  orderLineItems {
                    shipToWarehousePackageStatus
                    orderStatus
                    orderNumber
                    orderedDate
                    itemTypeId
                    isFeeItem
                    orderLineItemCancelAllowed
                    estimatedDeliveryDate
                    supplierAvailabilityDate
                    fulfilledBy  
                    itemNumber
                    itemDescription : sourceItemDescription
                    price : unitPrice
                    quantity : orderedTotalQuantity
                    merchandiseTotalAmount
                    lineItemId
                    sourceLineItemId
                    parentOrderLineItemId
                    itemId
                    isBuyAgainEligible
                    sequenceNumber : sourceSequenceNumber
                    parentOrderNumber
                    lineNumber
                    itemTypeId
                    replaceStatus
                    returnType
                    itemType
                    programType
                    minOrderDate
                    maxOrderDate
                    fSADescription
                    odsJobId
                    orderedShipMethodDescription
                    shippingChargeAmount
                    preferredArrivalDate
                    requestedDeliveryDate
                    returnStatus
                    productSerialNumber
                    configuredItemData
                    orderedShipMethod
                    isRescheduleEligible
                    deliveryReschedulingSite
                    scheduledDeliveryDate
                    scheduledDeliveryDateEnd
                    limitedReturnPolicyRule
                    isLimitedReturnPolicyExceeded
                    itemWeight
                    itemGroupNumber
                    isPerishable
                    carrierItemCategory
                    carrierContactPhone
                    isUPSMILabelEligible
                    parentLineNumber
                    isExchangeBlock
                    shipToAddressReferenceNumber
                    isVerificationRequired
                    isDept24
                    returnableQuantity
                    totalReturnedQuantity
                    exchangeOrderNumber
                    returnType
                    isGiftMessageSupported
                    isReturnCalendarEligible
                    programTypeId
                    bundleParentNumber, freightSavings, freightAdditionalSavings
                    configuredItemData
                    itemStatus {
                      orderPlaced {
                        quantity
                        transactionDate
                        orderLineItemId
                        lineItemStatusId
                        orderLineItemCancelAllowed
                        orderLineItemReturnAllowed
                      }
                      shipped {
                        quantity
                        transactionDate
                        orderLineItemId
                        lineItemStatusId
                        orderLineItemCancelAllowed
                        orderLineItemReturnAllowed
                      }
                      cancelled {
                        quantity
                        transactionDate
                        orderLineItemId
                        lineItemStatusId
                        orderLineItemCancelAllowed
                        orderLineItemReturnAllowed
                      }
                      returned {
                        quantity
                        transactionDate
                        orderLineItemId
                        lineItemStatusId
                        orderLineItemCancelAllowed
                        orderLineItemReturnAllowed
                      }
                      delivered {
                        quantity
                        transactionDate
                        orderLineItemId
                        lineItemStatusId
                        orderLineItemCancelAllowed
                        orderLineItemReturnAllowed
                      }
                      cancellationRequested {
                        quantity
                        transactionDate
                        orderLineItemId
                        lineItemStatusId
                        orderLineItemCancelAllowed
                        orderLineItemReturnAllowed
                      }
                    }
                    shipment {
                      lineNumber
                      orderNumber                    
                      packageNumber
                      trackingNumber
                      pickUpCompletedDate
                      pickUpReadyDate
                      carrierName
                      trackingSiteUrl
                      shippedDate
                      estimatedArrivalDate
                      deliveredDate
                      isDeliveryDelayed
                      isEstimatedArrivalDateEligible
                      reasonCode
                      trackingEvent {
                        event
                        carrierName
                        eventDate
                        estimatedDeliveryDate
                        scheduledDeliveryDate
                        trackingNumber
                      }
                    }
                  }
                }
              }
            }","variables":{"orderNumbers":["1234567890"]}}`
      };

  return {receiptsWithCounts, getOnlineOrders, getOrderDetails};
})();

//////////////////////
// XHR
//////////////////////
const queryCostcoOrders = (query) => fetch("https://ecom-api.costco.com/ebusiness/order/v1/orders/graphql", {
  "headers": {
    "accept": "*/*",
    "client-identifier": "481b1aec-aa3b-454b-b81b-48187e28f205",
    "content-type": "application/json-patch+json",
    "costco-x-authorization": `Bearer ${localStorage.idToken}`,
    "costco-x-wcs-clientid": localStorage.clientID,
    "costco.env": "ecom",
    "costco.service": "restOrders",
  },
  "referrer": "https://www.costco.ca/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": query.query.replaceAll(/\s+/g, ' '),
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
})
    .then(r => r.json())
    .then(json => json.data[query.name]);

// create functions for each query
Object.keys(Query)
  .forEach(queryName => 
    window[queryName] = () => queryCostcoOrders(Query[queryName]));

//////////////////////
// PARSING
//////////////////////
let receiptsJson = await receiptsWithCounts();
let receipts = receiptsJson.receipts;
let items = receipts
    .flatMap(receipt => receipt.itemArray)
    .map(({fuelUnitQuantity, unit, ...item}) => 
        (item.unit = item.fuelUomCode ? fuelUnitQuantity : unit, 
         item));

//////////////////////
// UTILITY FUNCTIONS
//////////////////////
const logReceiptItems = () => 
    console.table(items);

const getReceiptsTotal = () =>
    receipts.reduce((sum, {total}) => sum += total, 0);

//////////////////////
// SUMMARY
//////////////////////
console.log(`Supported query functions: ${Object.keys(Query).join(', ')}`);
console.log(`Loaded ${receipts.length} receipts with ${items.length} items`);


