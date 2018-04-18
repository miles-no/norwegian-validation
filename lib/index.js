"use strict";

// https://github.com/miles-no/no-validation

/* eslint no-underscore-dangle: off */

/* eslint no-plusplus: off */

/* eslint no-mixed-operators: off */
var _luhnValue = function _luhnValue(number) {
  var sum = 0;
  var dbl = 0;
  var i;

  for (i = number.length - 2; i >= 0; i -= 2) {
    dbl = (parseInt(number.charAt(i), 10) * 2).toString();
    sum += parseInt(dbl.charAt(0), 10) + parseInt(dbl.charAt(1) || 0, 10);
  }

  for (i = number.length - 3; i >= 0; i -= 2) {
    sum += parseInt(number.charAt(i), 10);
  }

  sum = sum.toString();
  return 10 - parseInt(sum.charAt(sum.length - 1), 10);
};

var _sum = function _sum(number, factors) {
  var sum = 0;

  for (var i = 0, l = factors.length; i < l; ++i) {
    sum += parseInt(number.charAt(i), 10) * factors[i];
  }

  return sum;
};

var _mod11OfNumberWithControlDigit = function _mod11OfNumberWithControlDigit(input) {
  var controlNumber = 2;
  var sumForMod = 0;
  var i;

  for (i = input.length - 2; i >= 0; --i) {
    sumForMod += input.charAt(i) * controlNumber;

    if (++controlNumber > 7) {
      controlNumber = 2;
    }
  }

  var result = 11 - sumForMod % 11;
  return result === 11 ? 0 : result;
};

var accountNumber = function accountNumber(accNumber) {
  if (!accNumber) {
    return false;
  }

  var validatedAccountNumber = accNumber.toString().replace(/\./g, '');

  if (validatedAccountNumber.length !== 11) {
    return false;
  }

  return parseInt(validatedAccountNumber.charAt(validatedAccountNumber.length - 1), 10) === _mod11OfNumberWithControlDigit(validatedAccountNumber);
};

var organizationNumber = function organizationNumber(orgNumber) {
  var validatedOrgNumber = orgNumber.toString();

  if (!validatedOrgNumber || validatedOrgNumber.length !== 9) {
    return false;
  }

  return parseInt(validatedOrgNumber.charAt(validatedOrgNumber.length - 1), 10) === _mod11OfNumberWithControlDigit(validatedOrgNumber);
};

var birthNumber = function birthNumber(number) {
  var validatedBirthNumber = number.toString();

  if (!validatedBirthNumber || validatedBirthNumber.length !== 11) {
    return false;
  }

  var checksum1 = 11 - _sum(validatedBirthNumber, [3, 7, 6, 1, 8, 9, 4, 5, 2]) % 11;

  if (checksum1 === 11) {
    checksum1 = 0;
  }

  var checksum2 = 11 - _sum(validatedBirthNumber, [5, 4, 3, 2, 7, 6, 5, 4, 3, 2]) % 11;

  if (checksum2 === 11) {
    checksum2 = 0;
  }

  return checksum1 === parseInt(validatedBirthNumber.charAt(9), 10) && checksum2 === parseInt(validatedBirthNumber.charAt(10), 10);
};

var kidNumber = function kidNumber(number) {
  var validatedKidNumber = number.toString();
  var controlDigit = validatedKidNumber.charAt(validatedKidNumber.length - 1);
  return parseInt(controlDigit, 10) === _mod11OfNumberWithControlDigit(validatedKidNumber) || parseInt(controlDigit, 10) === _luhnValue(validatedKidNumber);
};

module.exports = {
  accountNumber: accountNumber,
  organizationNumber: organizationNumber,
  birthNumber: birthNumber,
  kidNumber: kidNumber
};
//# sourceMappingURL=index.js.map