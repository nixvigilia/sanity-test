import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'test',
  title: 'Test',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
      }),
  ],
})
