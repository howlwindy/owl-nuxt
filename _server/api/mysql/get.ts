import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

// export const get = defineEventHandler((evt) => {
//   const id = getQuery(evt)
// })

export default defineEventHandler(async () => {
  const result = await client.test.findMany()
  console.log(result)
  return { res: result }
})
