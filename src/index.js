// https://github.com/miles-no/no-validation

const _luhnValue = (number) => {
  let sum = 0;
  let dbl = 0;
  let i;
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

const _sum = (number, factors) => {
  let sum = 0;
  for (let i = 0, l = factors.length; i < l; ++i) {
    sum += parseInt(number.charAt(i), 10) * factors[i];
  }
  return sum;
};

const _mod11OfNumberWithControlDigit = (input) => {
  let controlNumber = 2;
  let sumForMod = 0;
  let i;

  for (i = input.length - 2; i >= 0; --i) {
    sumForMod += input.charAt(i) * controlNumber;
    if (++controlNumber > 7) {
      controlNumber = 2;
    }
  }
  const result = (11 - sumForMod % 11);
  return result === 11 ? 0 : result;
};

const accountNumber = (accNumber) => {
  if (!accNumber) {
    return false;
  }
  const validatedAccountNumber = accNumber.toString().replace(/\./g, '');
  if (validatedAccountNumber.length !== 11) {
    return false;
  }
  return parseInt(validatedAccountNumber.charAt(validatedAccountNumber.length - 1), 10) === _mod11OfNumberWithControlDigit(validatedAccountNumber);
};

const organizationNumber = (orgNumber) => {
  const validatedOrgNumber = orgNumber.toString();
  if (!validatedOrgNumber || validatedOrgNumber.length !== 9) {
    return false;
  }
  return parseInt(validatedOrgNumber.charAt(validatedOrgNumber.length - 1), 10) === _mod11OfNumberWithControlDigit(validatedOrgNumber);
};

const birthNumber = (number) => {
  const validatedBirthNumber = number.toString();
  if (!validatedBirthNumber || validatedBirthNumber.length !== 11) {
    return false;
  }
  let checksum1 = 11 - (_sum(validatedBirthNumber, [3, 7, 6, 1, 8, 9, 4, 5, 2]) % 11);
  if (checksum1 === 11) {
    checksum1 = 0;
  }
  let checksum2 = 11 - (_sum(validatedBirthNumber, [5, 4, 3, 2, 7, 6, 5, 4, 3, 2]) % 11);
  if (checksum2 === 11) {
    checksum2 = 0;
  }
  return checksum1 === parseInt(validatedBirthNumber.charAt(9), 10)
      && checksum2 === parseInt(validatedBirthNumber.charAt(10), 10);
};

const kidNumber = (number) => {
  const validatedKidNumber = number.toString();
  const controlDigit = validatedKidNumber.charAt(validatedKidNumber.length - 1);
  return parseInt(controlDigit, 10) === _mod11OfNumberWithControlDigit(validatedKidNumber) || parseInt(controlDigit, 10) === _luhnValue(validatedKidNumber);
};

module.exports = {
  accountNumber,
  organizationNumber,
  birthNumber,
  kidNumber,
};
