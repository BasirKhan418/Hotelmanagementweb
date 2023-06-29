import connectDb from "../middleware/mongoose";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const startDate1 = new Date("2023-01-01");
  const endDate1= new Date("2023-02-01");
  const startDate2 = new Date("2023-02-01");
  const endDate2 = new Date("2023-03-01");
  const startDate3 = new Date("2023-03-01");
  const endDate3 = new Date("2023-04-01");
  const startDate4 = new Date("2023-04-01");
  const endDate4 = new Date("2023-05-01");
  const startDate5 = new Date("2023-05-01");
  const endDate5 = new Date("2023-06-01");
  const startDate6 = new Date("2023-06-01");
  const endDate6 = new Date("2023-07-01");
  const startDate7 = new Date("2023-07-01");
  const endDate7 = new Date("2023-08-01");
  const startDate8 = new Date("2023-08-01");
  const endDate8 = new Date("2023-09-01");
  const startDate9 = new Date("2023-09-01");
  const endDate9 = new Date("2023-10-01");
  const startDate10 = new Date("2023-10-01");
  const endDate10 = new Date("2023-11-01");
  const startDate11 = new Date("2023-11-01");
  const endDate11 = new Date("2023-12-01");
  const startDate12 = new Date("2023-12-01");
  const endDate12 = new Date("2023-12-30");

  try {
    const jan = await Order.find({
      createdAt: { $gte: startDate1, $lt: endDate1 }
    });
    const feb = await Order.find({
      createdAt: { $gte: startDate2, $lt: endDate2 }
    });
    const mar = await Order.find({
      createdAt: { $gte: startDate3, $lt: endDate3 }
    });
    const apr = await Order.find({
      createdAt: { $gte: startDate4, $lt: endDate4}
    });
    const may = await Order.find({
      createdAt: { $gte: startDate5, $lt: endDate5 }
    });
    const jun = await Order.find({
      createdAt: { $gte: startDate6, $lt: endDate6 }
    });
    const jul = await Order.find({
      createdAt: { $gte: startDate7, $lt: endDate7 }
    });
    const aug = await Order.find({
      createdAt: { $gte: startDate8, $lt: endDate8 }
    });
    const sept = await Order.find({
      createdAt: { $gte: startDate9, $lt: endDate9 }
    });
    const oct = await Order.find({
      createdAt: { $gte: startDate10, $lt: endDate10 }
    });
    const nov = await Order.find({
      createdAt: { $gte: startDate11, $lt: endDate11 }
    });
    const dec = await Order.find({
      createdAt: { $gte: startDate12, $lt: endDate12 }
    });
    res.status(200).json({jan,feb,mar,apr,may,jun,jul,aug,sept,oct,nov,dec});
  } catch (error) {
    console.error("Error retrieving orders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(handler);
