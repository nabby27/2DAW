'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('user', {
    id: {
      type: 'int',
      primaryKey: true,
      notNull: true,
      unique: true
    },
    name: {
      type: 'string',
      length: 40
    },
    first_surname: {
      type: 'string',
      length: 100
    },
    second_surname: {
      type: 'string',
      length: 100
    },
    birthday: {
      type: 'date',
    },
    email: {
      type: 'string',
      length: 100,
      notNull: true,
      unique: true
    },
    address: {
      type: 'string',
      length: 150
    },
    phone: {
      type: 'string',
      length: 50,
      notNull: true,
      unique: true
    },
  }, function(err) {
    if (err) return callback(err);
    return callback();
  });
};

exports.down = function(db, callback) {
  db.dropTable('user', callback);
};

exports._meta = {
  "version": 1
};
