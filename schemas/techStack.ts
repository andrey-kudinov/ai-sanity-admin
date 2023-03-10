import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'techStack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    defineField({
      name: 'stackLogo',
      title: 'Stack logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'stackName',
      title: 'Stack name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'stackName',
      media: 'stackLogo',
    },
  },
})
