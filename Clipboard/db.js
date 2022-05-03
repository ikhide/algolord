class SQLDataBase {
  constructor() {
    this.dataBase = {};
  }

  createTable(tableName, types) {
    this.dataBase[tableName] = {
      rows: [],
      types: types,
    };
  }

  getTable(table) {
    const _this = this;
    const db = _this.dataBase[table];

    return {
      insertRecords: function (values) {
        const tableTypes = db.types;
        const errors = _this.validate(values, tableTypes);
        if (errors.length > 0) {
          return errors;
        }
        const dbValues = _this.sanitizeValues(values, tableTypes);
        db.rows.push(dbValues);
      },
      getRecords: function (query) {
        //get query key
        const key = Object.keys(query)[0];
        const record = db.rows.find((row) => row[key] === query[key]);
        if (!record) {
          return "record not found";
        }

        return record;
      },
      printRecords: function () {
        return db.rows;
      },
      findBy: function (query) {},
    };
  }
  validate(values, types) {
    let errors = [];
    for (let key in types) {
      if (!values[key]) {
        errors.push(key + " is required");
      }
      if (typeof values[key] !== types[key]) {
        errors.push(key + " should be a " + types[key]);
      }
    }
    return errors;
  }
  sanitizeValues(values, types) {
    let data = {};
    for (let key in types) {
      data[key] = values[key];
    }
    return data;
  }
}

const SQL = new SQLDataBase();
SQL.createTable("Apple", { name: "seeds", quantity: 200 });
table = SQL.getTable("Apple");
table.insertRecords({ name: 11, quantity: 200 });
table.insertRecords({ name: "Orange", quantity: 22 });
SQL.createTable("RICE", { name: "seeds", quantity: 20 });
table = SQL.getTable("RICE");
table.insertRecords({ name: "Orange", quantity: 20 });
table.insertRecords({ name: "beans", quantity: 100 });

table = SQL.getTable("Apple");
console.log(table.printRecords());
// // console.log(table.findBy({ quantity: 200 }));
// console.log(table.findBy({ name: "Orange" }));
