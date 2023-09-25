const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const run = async () => {
  try {
    // //  Create
    // const result = await prisma.user.create({
    //   data: {
    //     username: "John",
    //     password: "chowrai",
    //   },
    // });

    // const result = await prisma.category.createMany({
    //   data: [{ name: "food" }, { name: "transport" }, { name: "rank" }],
    // });

    // const result = await prisma.transaction.create({
    //   data: {
    //     payee: "7-11",
    //     amount: 20,
    //     date: new Date("2023-09-02"),
    //     userId: 1,
    //     categoryId: 1,
    //   },
    // });

    // const result = await prisma.transaction.create({
    //   data: {
    //     payee: "Lawson",
    //     amount: 100,
    //     date: new Date("2023-09-03"),
    //     user: {
    //       create: {
    //         username: "Jack",
    //         password: "bobogago",
    //       },
    //     },
    //     category: {
    //       create: {
    //         name: "grocery",
    //       },
    //     },
    //   },
    // });

    // const result = await prisma.transaction.create({
    //   data: {
    //     payee: "Safari",
    //     amount: 99,
    //     date: new Date("2023-09-03"),
    //     user: {
    //       create: {
    //         username: "Joe",
    //         password: "Fu",
    //       },
    //     },
    //     category: {
    //       create: {
    //         name: "travel",
    //       },
    //     },
    //   },
    //   include: {
    //     user: true,
    //     category: true,
    //   },
    // });

    // const result = await prisma.user.create({
    //   data: {
    //     username: "Momo",
    //     password: "235r34tga",
    //     transactions: {
    //       create: [
    //         {
    //           payee: "7-11",
    //           amount: 44,
    //           date: new Date("2023-9-04"),
    //           categoryId: 3,
    //         },
    //         {
    //           payee: "ฺBig-d",
    //           amount: 20,
    //           date: new Date("2023-9-04"),
    //           categoryId: 1,
    //         },
    //       ],
    //     },
    //   },
    //   include: {
    //     transactions: true,
    //   },
    // });

    // const result = prisma.user.create({
    //   data: {
    //     username: "manudl",
    //     password: "3wr24352341324",
    //     transaation: {
    //       create: {
    //         payee: "7-11",
    //         amount: 86,
    //         date: new Date("2023-09-05"),
    //         category: {
    //           create: {
    //             name: "Beverage",
    //           },
    //         },
    //       },
    //     },
    //   },
    //   include: { transation: true },
    // });

    // Update
    // const result = await prisma.user.update({
    //   data: {
    //     password: "654321",
    //   },
    //   where: {   // ต้องมี where
    //     id: 1,
    //   },
    // });

    // const result = prisma.user.updateMany({
    //   data: {
    //     password: "1azdrgbadsr",
    //   },
    //   where: {
    //     username: {
    //       startsWith: "J",
    //     },
    //   },
    // });

    // const result = await prisma.user.upsert({
    //   create: {
    //     username: "Hoias",
    //     password: "123456",
    //   },
    //   update: {
    //     password: "123456",
    //   },
    //   where: {
    //     username: "hoias", ถ้ามีชื่อนี้ให้ ไปอัพเดตใน hoias ถ้าไม่มีให้สร้าง
    //   },
    // });

    // delete

    // const result = await prisma.user.delete({
    //   where: {
    //     username: "Hoias",
    //   },
    // });

    // const result = await prisma.transaction.deleteMany({
    //   where: {
    //     payee: "7-11",
    //   },
    // });

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

run();
