export default async function createClient() {
  const client = await prisma.client.create({
    data: {
      name: "Manuela",
    },
  });
  console.log(client);
}
