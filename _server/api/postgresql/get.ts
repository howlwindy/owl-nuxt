import {client} from './db'

export default defineEventHandler(async () => {
  // const result = await client.test.findMany()
  // console.log(result)
  // return { res: result }
  console.log('------')
  console.log(client.test.fields)
  console.log('------')
  return {res: [{id: 0, value: 10}]}
})