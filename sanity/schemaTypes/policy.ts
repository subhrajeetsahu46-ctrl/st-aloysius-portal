import { defineField, defineType } from 'sanity'

export const policy = defineType({
  name: 'policy',
  title: 'School Policy',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Policy Title', type: 'string' }),
    defineField({ 
      name: 'category', 
      title: 'Category', 
      type: 'string', 
      options: { list: ['Discipline', 'Uniform', 'Attendance', 'Library', 'Bus'] } 
    }),
    defineField({ name: 'content', title: 'Policy Content', type: 'array', of: [{ type: 'block' }] }),
  ],
})