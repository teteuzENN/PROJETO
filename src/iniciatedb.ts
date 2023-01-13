import { PrismaClient } from "@prisma/client";

const ExcelJS = require("exceljs");

const prisma = new PrismaClient();

export { ExcelJS, prisma };
