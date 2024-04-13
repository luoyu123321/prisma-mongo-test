import prisma from '@/prisma';

export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);

    throw new Error("Failed to connect to database");
  }
};