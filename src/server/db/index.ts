import * as mysql from "mysql";
import Blogs from "./blogs";
import Authors from "./authors";
import Tags from "./tags";

export const Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "blogsapp",
  password: "pwmade",
  database: "blogs",
});

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
