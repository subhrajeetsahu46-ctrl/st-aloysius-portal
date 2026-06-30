import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'schoolName', title: 'School Name', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'email', title: 'Official Email', type: 'string' }),
    defineField({ name: 'address', title: 'Campus Address', type: 'text' }),
    defineField({ name: 'officeHours', title: 'Office Hours', type: 'string' }),
  ],
})