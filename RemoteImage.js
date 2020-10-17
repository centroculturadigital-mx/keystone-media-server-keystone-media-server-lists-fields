const { Text, Relationship } = require('@keystonejs/fields');

const { atTracking } = require('@keystonejs/list-plugins');

const RemoteImage = {
  fields: {
    url: { type: Text },
    // descripción
    resizedImages: {
      type: Relationship,
      ref: 'RemoteImage'
    },
    sizeName: { type: Text },
    size: { type: Text },
  },
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