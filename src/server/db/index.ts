import * as mysql from "mysql";
import config from '../config';
import Blogs from "./blogs";
import Authors from "./authors";
import Tags from "./tags";

const Connection = mysql.createConnection(config.mysql);


export const Query = <T = any>(query: string, values?: any) => {
  return new Promise<T>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export default {
  Blogs,
  Authors,
  Tags
};
