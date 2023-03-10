import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'tags' },
        },
      ],
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: { type: 'client' },
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'reference',
      to: { type: 'sector' },
    }),
    defineField({
      name: 'scope',
      title: 'Scope',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'scope' },
        },
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'techStack' },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'client.image',
    },
  },
})
