import { defineField, defineType } from 'sanity'

export const admission = defineType({
  name: 'admission',
  title: 'Admission Policy',
  type: 'document',
  fields: [
    defineField({ name: 'stepTitle', title: 'Process Step', type: 'string' }),
    defineField({ name: 'description', title: 'Details', type: 'text' }),
    defineField({ name: 'requiredDocuments', title: 'Required Documents', type: 'array', of: [{ type: 'string' }] }),
  ],
})