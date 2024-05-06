// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize the Prisma Client
const prisma = new PrismaClient();
const roundsOfHashing = 10;

async function main() {
  const email = 'test@test.com';
  const password = await bcrypt.hash('password', roundsOfHashing);
  const user = await prisma.user.upsert({
    where: { username:  email},
    update: {
      password: password,
    },
    create: {
      username: email,
      password: password,
    },
  });

  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
