import { defineField, defineType } from 'sanity'

export const noticeType = defineType({
  name: 'notice',
  title: 'School Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Notice Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publish Date',
      type: 'date',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'text',
    }),
  ],
})