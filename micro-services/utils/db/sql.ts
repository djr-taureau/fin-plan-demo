// import { Connection, Request } from 'tedious'
import sql  from 'mssql';

const config = {
  user: 'lifeworks_main',
  password: 'zj8ErmFJVMN1v9g585nbt',
  server: 'lifeworkssql.database.windows.net',
  database: 'lifeworks',
  options: {
    encrypt: true,
  }
}

export class SQL {
  // public logger;

  constructor() {
    // this.logger = logger;
  }

  /*
  * @param table <String> : Valid SQL Satement DB table name
  * @param columns <String> : comma separated string of column names defaults to all
  * @return promise
  */
  getRows(table, columns = '*') {
    return new sql.connect(config).then(connection => {
      return connection.request()
        .query(`SELECT ${columns} FROM ${table}`);
    })
    .then(res => {
      sql.close();
      return res.recordset;
    })
    .catch((err) => {
      sql.close();
      return err;
    })
  }

  /*
  * @param table <String> : Valid SQL Satement DB table name
  * @param id <Int> : id of specific record in the DB
  * @param columns <String> : comma separated string of column names defaults to all
  * @return promise
  */
  getRowById(table, id, columns = '*') {
    return new sql.connect(config).then(connection => {
      return connection.request()
        .input('record_id', sql.Int, id)
        .query(`SELECT ${columns} FROM ${table} WHERE GUID = @record_id`)
    })
    .then(res => {
      return res.recordset;
    })
    .catch(err => {
      sql.close();
      return err;
    })
  }

  /*
  * @param table <String> : Valid SQL DB table
  * @param values <Array> : Array of column values matching the order of table schema
  * @return promise
  */
  insertRow(table, values) {
    return new sql.connect(config).then(connection => {
      if(!Array.isArray(values)) {
        return 'Error: Values must be an array of values for columns'
      }
      const columns = values.join("','");
      
      return connection.request()
        .query(`INSERT INTO ${table} VALUES ('${columns}')`);
    })
    .then(res => {
      sql.close();
      return res;
    })
    .catch(err => {
      sql.close();
      return err;
    });
  }
}