// sanity/queries.ts
export const siteSettingsQuery = `*[_type == "siteSettings"][0]`
export const admissionQuery = `*[_type == "admission"] | order(_createdAt asc)`