import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sector',
  title: 'Sector',
  type: 'document',
  fields: [
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
    }),
  ],
})
