import { httpClient, getPropertyResponse } from './http-client';
import mockData from "../tests/mock-data";

test('getValuation', async () => {
  httpClient.post = jest.fn().mockResolvedValue({
    data: mockData.propertyResponse
  });

  const result = await getPropertyResponse(mockData.propertyRequest);
  expect(result).toBeTruthy();
});
