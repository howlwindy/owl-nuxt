// import {Pool} from 'pg'
// import {PrismaPg} from '@prisma/adapter-pg'
import {PrismaClient} from '@prisma/client'

// const connectionString = `${process.env.POSTGRESQL_URL}`

// const pool = new Pool({ connectionString })
// const adapter = new PrismaPg(pool)
// export const client = new PrismaClient({ adapter })
export const client = new PrismaClient()