import { customAxios } from '../constants/request.constant';

export class APIHelper {
  public static request = async (method, url: string, data?: object) => {
    const response = await customAxios.request({
      method,
      url,
      data,
    });

    return response;
  };
}
