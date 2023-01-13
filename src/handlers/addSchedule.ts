import { ExcelJS, prisma } from "/home/devteteu/Desktop/PROJETO/src/iniciatedb";

export default async function addSchedule() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("Livro.xlsx");
  const sheet = workbook.getWorksheet(1);
  const time = sheet.getColumn(1).values;
  const date = sheet.getColumn(2).values;
  const x: { date: string; time: string }[] = [];
  console.log(date.length);
  date.map((e: string, index: number) => {
    x.push({
      date: e,
      time: time[index],
    });
  });

  x.shift();
  console.log(x);

  x.map(async (e) => {
    const match = await prisma.schedule.findFirst({
      where: {
        date: e.date,
        time: e.time,
      },
    });
    if (match === null) {
      const newSchedule = await prisma.schedule.create({
        data: { date: e.date, time: e.time },
      });
      console.log("adicionei", newSchedule);
    }
  });
}
