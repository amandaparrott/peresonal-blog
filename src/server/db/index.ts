import * as mysql from "mysql";
import config from '../config';
import Blogs from "./blogs";
import Authors from "./authors";
import Tags from "./tags";
import AccessTokens from './accesstokens'

export const pool = mysql.createPool(config.mysql);


export const Query = <T = any>(query: string, values?: any) => {
  return new Promise<T>((resolve, reject) => {
    pool.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        return resolve(results);
      }
    });
  });
};

export default {
  Blogs,
  Authors,
  Tags,
  AccessTokens
};
