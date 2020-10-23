const { Text, Relationship, Integer} = require('@keystonejs/fields');
const RemoteImageRelationship = require('../fields/RemoteImageRelationship')

const { atTracking } = require('@keystonejs/list-plugins');

const RemoteImage = {
  fields: {
    remoteId: {
      type: Text
    },
    name: {
      type: Text
    }, 
    url: {
      type: Text,
      isRequired: true
    },
    // descripción
    resizedImages: {
      type: RemoteImageRelationship,
      ref: 'RemoteImage',
      many: true
    },
    sizeName: { type: Text },
    size: { type: Integer },
  },
  labelField: "url",
  plugins: [
    atTracking({
      createdAtField: 'createdAt',
      updatedAtField: 'updatedAt'
    }),
  ],
  // access: {
  //   read: true,
  //   create: esAdminOEsPersonalOEsUsuario,
  //   update: esAdminOEsPersonalOEsCreador,
  //   delete: esAdmin
  // },
}

module.exports = RemoteImage