export default async function createProvider() {
  const provider = await prisma.provider.create({
    data: {
      name: "Matheus",
    },
  });
  console.log(provider);
}
