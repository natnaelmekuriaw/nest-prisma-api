import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const blog1 = await prisma.blog.upsert({
    where: { title: 'Project Management Life Cycle in Five Steps' },
    update: {},
    create: {
      title: 'Project Management Life Cycle in Five Steps ',
      body: 'The ultimate goal of the five phases of the project management cycle that we’ll describe further is to help the team get the job done, keeping in mind the following main constraints: time, scope, quality, risks, and cost. Balancing between them is a vital task that requires due diligence from every company that wants to deliver a product successfully. To help businesses stay within the necessary boundaries and accept the best practices in the smoothest way possible, the Project Management Institute has developed the model of ideal project management life cycle. The central concept behind the developed framework is to help project management teams meet their goals without wasting all resources along the way. ',
      image:
        'https://xbsoftware.com/wp-content/uploads/2023/08/Project-Management-Life-Cycle-and-Its-Phases-1.png',
    },
  });

  const blog2 = await prisma.blog.upsert({
    where: {
      title: '7 JavaScript Concepts to Keep in Mind in 2023 and Beyond',
    },
    update: {},
    create: {
      title: '7 JavaScript Concepts to Keep in Mind in 2023 and Beyond',
      body: 'Stack Overflow developer survey 2023 just dropped, and for the eleventh year in a row, JavaScript holds the top spot of the most commonly-used programming language. It’s a breathtaking achievement, but it’s hard to say that no one expected this. Statistics show that it is used on 98.7% of websites as a client-side technology nowadays. Moreover, it can take care of the server-side code as well, and by the way, Node.js ranks first among the most common web frameworks and technologies in the same survey.',
      image:
        'https://xbsoftware.com/wp-content/uploads/2023/07/stackoverflow_2023_survey_v_02.png',
    },
  });
}

main()
  .catch((err) => {
    console.log('Error while seeding', err);
  })
  .finally(async () => {
    console.log('Seeding completed successfully');
    await prisma.$disconnect();
  });
