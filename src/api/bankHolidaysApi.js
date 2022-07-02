export const fetchBankHolidays = async () => {
  const response = await fetch('https://www.gov.uk/bank-holidays.json');
  const data = await response.json();
  return data;
};
