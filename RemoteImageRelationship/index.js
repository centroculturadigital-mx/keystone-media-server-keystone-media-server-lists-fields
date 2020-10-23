const { ImageRelationship, MongoRelationshipInterface, KnexRelationshipInterface } = require('./Implementation');

const { Relationship } = require('@keystonejs/fields');
// const Controller  = require( "./views/Controller")
module.exports = {
  type: 'ImageRelationship',
  implementation: ImageRelationship,
  views: {
    // Controller,
    // Controller: require.resolve("./views/Controller"),
    Controller: Relationship.views.Controller,
    // Field: require.resolve('./views/Field'),
    Field: require.resolve('./views/Field'),
    Filter: Relationship.views.Filter,
    Cell: require.resolve('./views/Cell'),
  },
  adapters: {
    mongoose: MongoRelationshipInterface,
    knex: KnexRelationshipInterface,
  },
};