import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe2@gmail.com',
      avatarUrl: 'https://github.com/jonathatargino.png'

    }
  })

  const pool = await prisma.pool.create({
    data: {
      title: 'Example Pool',
      code: 'BOL124',
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id
        }
      }
    }
  })


  await prisma.game.create({
    data: {
      date: '2022-11-20T15:00:19.927Z',
      firstTeamCountryCode: 'AR',
      secondTeamCountryCode: 'DE',
    }
  })
}

main()