const requiredFieldsForIntegration26 = {
    "reservationList<array>.confirmationNumber.id": /^[A-Z0-9]+$/, // Alphanumeric uppercase
    "reservationList<array>.confirmationNumber.provider": /^[A-Z]+$/, // Uppercase letters only
    "reservationList<array>.confirmationNumber.value": /^(?=.*[A-Za-z])(?=.*\d)[A-Z0-9]+$/, // Alphanumeric uppercase with at least one letter and one digit
    "reservationList<array>.hotels<array>.propertyCode.code": /^[A-Z0-9]+$/, // Alphanumeric uppercase
    "reservationList<array>.reservationStatusEnum": /^[A-Za-z]+$/, // Letters only
    "reservationList<array>.segments<array>.id": /^[A-Z0-9]+$/, // Alphanumeric uppercase
    "reservationList<array>.segments<array>.timespan.startDate": /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD format
    "reservationList<array>.segments<array>.timespan.endDate": /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD format
    "reservationList<array>.segments<array>.consolidatedSegmentStatusEnum": /^[A-Za-z]+$/, // Letters only
    "reservationList<array>.segments<array>.propertyCode.code": /^[A-Z0-9]+$/, // Alphanumeric uppercase
    "reservationList<array>.segments<array>.lateArrivalTime": /^\d{2}:\d{2}:\d{2}$/, // HH:MM:SS format
    "reservationList<array>.segments<array>.offer.nightlyCorpMarketSegments.timespan.start": /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD format
    "reservationList<array>.segments<array>.offer.nightlyCorpMarketSegments.timespan.end": /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD format
    "reservationList<array>.segments<array>.offer.nightlyCorpMarketSegments.value": /^[A-Za-z]+$/, // Letters only
    "reservationList<array>.segments<array>.offer.nightlyCorpMarketSegments.dayUseInd": /^(true|false)$/, // Boolean string
    "reservationList<array>.sourceCRSEnum": /^[A-Z]+$/, // Uppercase letters only
    "reservationList<array>.totalOfActiveSegments<array>.rateAmount.amtBfTx.currencyCode": /^[A-Z]{3}$/, // 3 uppercase letters (currency code)
    "reservationList<array>.totalOfActiveSegments<array>.rateAmount.amtBfTx.value": /^\d+(\.\d+)?$/, // Number (integer or decimal)
    "reservationList<array>.totalOfActiveSegments<array>.rateAmount.amtBfTx.guestViewableInd": /^(true|false)$/, // Boolean string
    "reservationList<array>.totalOfActiveSegments<array>.rateAmount.amtBfTx.numberOfDecimals": /^\d+$/, // Integer
    "reservationList<array>.totalOfActiveSegments<array>.rateAmount.bsAmt.currencyCode": /^[A-Z]{3}$/, // 3 uppercase letters
    "reservationList<array>.totalOfActiveSegments<array>.rateAmount.bsAmt.value": /^\d+(\.\d+)?$/, // Number
    "reservationList<array>.totalOfActiveSegments<array>.rateAmount.bsAmt.guestViewableInd": /^(true|false)$/, // Boolean string
    "reservationList<array>.totalOfActiveSegments<array>.rateAmount.bsAmt.numberOfDecimals": /^\d+$/, // Integer
    "reservationList<array>.totalOfActiveSegments<array>.rateAmount.amtAfTx.currencyCode": /^[A-Z]{3}$/, // 3 uppercase letters
    "reservationList<array>.totalOfActiveSegments<array>.rateAmount.amtAfTx.value": /^\d+(\.\d+)?$/, // Number
    "reservationList<array>.totalOfActiveSegments<array>.rateAmount.amtAfTx.guestViewableInd": /^(true|false)$/, // Boolean string
    "reservationList<array>.totalOfActiveSegments<array>.rateAmount.amtAfTx.numberOfDecimals": /^\d+$/ // Integer
};

const requiredFieldsForIntegration3 = {
    // Folio validation patterns (from logSampleForIntegration3.json)
    "Folio.folioId": /^[A-Z0-9_]+$/, // Alphanumeric with underscores
    "Folio.folioType.folioTypeCode": /^[A-Z]+$/, // Uppercase letters only
    "Folio.folioType.folioTypeDesc": /^[A-Za-z\s]+$/, // Letters and spaces
    "Folio.source": /^[A-Za-z\s]+$/, // Letters and spaces
    "Folio.confirmationIds<array>.id": /^\d+$/, // Numeric string
    "Folio.confirmationIds<array>.provider": /^[A-Z]+$/, // Uppercase letters only
    "Folio.confirmationIds<array>.value": /^[A-Z0-9]+$/, // Alphanumeric uppercase
    "Folio.confirmationIds<array>.type": /^[A-Z]+$/, // Uppercase letters only
    "Folio.customerId": /^[\*]+$/, // Asterisks only (masked data)
    "Folio.bonvoyMemberFlag": /^(true|false)$/, // Boolean string
    "Folio.propertyCode": /^[A-Z0-9]+$/, // Alphanumeric uppercase
    "Folio.creationTS": /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, // ISO 8601 timestamp
    "Folio.folioNumber": /^\d+$/, // Numeric string
    "Folio.folioStatus": /^[A-Za-z]+$/, // Letters only
    "Folio.folioWindowId": /^\d{2}$/, // Two digits
    "Folio.invoiceFlag": /^(true|false)$/, // Boolean string
    "Folio.user.agentId": /^[\*]+$/, // Asterisks only (masked data)
    "Folio.user.firstName": /^[\*]+$/, // Asterisks only (masked data)
    "Folio.user.middleName": /^[\*]+$/, // Asterisks only (masked data)
    "Folio.user.lastName": /^[\*]+$/, // Asterisks only (masked data)
    "Folio.windowProfileId": /^[A-Z0-9_]+$/, // Alphanumeric with underscores
    "Folio.resState": /^[A-Za-z]+$/, // Letters only
    "Folio.folioTransactionDetails<array>.folioIdLineItemNo": /^[A-Z0-9_]+$/, // Alphanumeric with underscores
    "Folio.folioTransactionDetails<array>.lineItemNo": /^\d+$/, // Numeric string
    "Folio.folioTransactionDetails<array>.transType": /^[A-Z]+$/, // Uppercase letters only
    "Folio.folioTransactionDetails<array>.chargeCode": /^\d{4}$/, // Four digits
    "Folio.folioTransactionDetails<array>.roomNumber": /^\d+$/, // Numeric string
    "Folio.folioTransactionDetails<array>.transactionTS": /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, // ISO 8601 timestamp
    "Folio.folioTransactionDetails<array>.businessTS": /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, // ISO 8601 timestamp
    "Folio.folioTransactionDetails<array>.transDesc": /^[A-Za-z\s]+$/, // Letters and spaces
    "Folio.folioTransactionDetails<array>.transactionAmt.currencyCode": /^[A-Z]{3}$/, // 3 uppercase letters (currency code)
    "Folio.folioTransactionDetails<array>.transactionAmt.value": /^\d+(\.\d+)?$/, // Number (integer or decimal)
    "Folio.folioTransactionDetails<array>.transactionAmt.guestViewable": /^(true|false)$/, // Boolean string
    "Folio.folioTransactionDetails<array>.transactionAmt.numberOfDecimals": /^\d+$/, // Integer
    "Folio.folioTransactionDetails<array>.transPostingNotes": /^[A-Za-z\s]+$/, // Letters and spaces
    "Folio.folioTransactionDetails<array>.transPostingSrc": /^[A-Z0-9]+$/, // Alphanumeric uppercase
    "Folio.folioTransactionDetails<array>.summarizeFlag": /^(true|false)$/, // Boolean string
    "Folio.folioTransactionDetails<array>.suppressionFlag": /^(true|false)$/, // Boolean string
    "Folio.folioTransactionDetails<array>.transferFlag": /^(true|false)$/, // Boolean string
    "Folio.folioTransactionDetails<array>.banquetChkFlag": /^(true|false)$/, // Boolean string
    "Folio.folioTransactionDetails<array>.posFlag": /^(true|false)$/, // Boolean string
    "Folio.folioTransactionDetails<array>.postedBy.agentId": /^[\*]+$/, // Asterisks only (masked data)
    "Folio.folioTransactionDetails<array>.postedBy.firstName": /^[\*]+$/, // Asterisks only (masked data)
    "Folio.folioTransactionDetails<array>.postedBy.middleName": /^[\*]+$/, // Asterisks only (masked data)
    "Folio.folioTransactionDetails<array>.postedBy.lastName": /^[\*]+$/, // Asterisks only (masked data)
    "Folio.folioTransactionDetails<array>.taxInclusive": /^(true|false|null)$/, // Boolean string or null
    "Folio.folioTransactionDetails<array>.revenueType.revenueTypeCode": /^[A-Z]+$/, // Uppercase letters only
    "Folio.folioTransactionDetails<array>.revenueType.revenueTypeCodeDesc": /^[A-Za-z\s\-]+$/, // Letters, spaces, and hyphens
    "Folio.folioTransactionDetails<array>.revenueType.revenueTypeCodeParent": /^[A-Za-z\s]+$/ // Letters and spaces
};

// Export both variables using ES6 module syntax
export { requiredFieldsForIntegration26, requiredFieldsForIntegration3 };


