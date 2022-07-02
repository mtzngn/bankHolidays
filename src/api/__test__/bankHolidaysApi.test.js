import {fetchBankHolidays} from '../bankHolidaysApi';

global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      resolve({
        status: 201,
        json: () => {
          return Promise.resolve({});
        },
      });
    }),
);
describe('bankHolidaysApi', () => {
  it('should do', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({success: true}),
    });
    await fetchBankHolidays();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://www.gov.uk/bank-holidays.json',
    );
  });
});
