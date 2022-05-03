/*
SQL.createTable('fruit', { name: 'string', quantity: 'int' }); 
const table = SQL.getTable('fruit');
table.insertRecords({ name: 'Apple', quantity: 20 });
table.insertRecords({ name: 'Orange', quantity: 20 });
table.printRecords();
console.log(table.getRecords({ name: 'Apple' }));
*/
//

let database = {};

const SQL = {
  //Create a table
  createTable: (tableName, tableData) => {
    if (
      SQL.validateString(tableName, "TableName") &&
      SQL.validateString(tableData.name, "name") &&
      SQL.validateNumber(tableData.quantity, "quantity")
    ) {
      database[tableName] = database[tableName]
        ? [...database[tableName], tableData]
        : [tableData];
    }
  },

  //set table name
  getTable: (tableName) => {
    if (SQL.validateString(tableName, "Table Name")) {
      if (!database[tableName]) {
        throw new Error('Table name "' + tableName + '" does not exist');
      } else {
        return {
          insertRecords: (tableData) => {
            if (
              SQL.validateString(tableData.name, "name") &&
              SQL.validateNumber(tableData.quantity, "quantity")
            ) {
              database[tableName].push(tableData);
            }
          },
          printRecords: () => {
            console.log(database[tableName]);
          },
          getRecords: ({ name }) => {
            if (SQL.validateString(name, "table name")) {
              if (database[name]) {
                return database[name];
              } else {
                return 'Table "' + name + '" does not exist';
              }
            }
          },
          findBy: (query) => {
            return database[tableName].filter((entry) => {
              if (query.name) {
                return entry.name === query.name;
              }
              if (query.quantity) {
                return entry.quantity === query.quantity;
              }
            });
          },
        };
      }
    }
  },

  deleteTable: ({ name }) => {
    if (!name || typeof name !== "string") {
      SQL.errorHandler("Name Should be type string");
    } else {
      delete database[name];
    }
  },

  validateString: (value, fieldName) => {
    if (!value || typeof value !== "string") {
      SQL.errorHandler(fieldName + " should be type String");
      return false;
    } else if (value.length > 20) {
      SQL.errorHandler("String cannot be longer than 20 characters");
      return false;
    } else {
      return value;
    }
  },

  validateNumber: (value, fieldName) => {
    if (!value || typeof value !== "number") {
      SQL.errorHandler(fieldName + " should be type Number");
      return false;
    } else if (value < -1024 || value > 1023) {
      SQL.errorHandler("Number must be less than 1023 and greater than -1024");
      return false;
    } else {
      return value;
    }
  },

  errorHandler: (text) => {
    throw new Error(text);
  },
};

SQL.createTable("Apple", { name: "seeds", quantity: 200 });
// console.log(database)
table = SQL.getTable("Apple");
table.insertRecords({ name: "Orange", quantity: 200 });
table.insertRecords({ name: "Orange", quantity: 22 });
SQL.createTable("RICE", { name: "seeds", quantity: 20 });
table = SQL.getTable("RICE");
table.insertRecords({ name: "Orange", quantity: 20 });
table.insertRecords({ name: "beans", quantity: 100 });

table = SQL.getTable("Apple");
table.printRecords();
// console.log(table.findBy({ quantity: 200 }));
console.log(table.findBy({ name: "Orange" }));
