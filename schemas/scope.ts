import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'scope',
  title: 'Scope',
  type: 'document',
  fields: [
    defineField({
      name: 'scope',
      title: 'Scope',
      type: 'string',
    }),
  ],
})
