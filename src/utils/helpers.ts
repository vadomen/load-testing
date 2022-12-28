import { CollectionModel } from '../models/collection.model';
import { TextResponse } from '../models/text-response.type';

export const parseBody = (res: TextResponse): CollectionModel => {
  try {
    return res.body && JSON.parse(res.body) as CollectionModel;
  } catch (e) {
    const { body, headers, ...rest } = res;
    throw new Error(`Can't parse body: ${rest}, Error: ${e}`);
  }
};
