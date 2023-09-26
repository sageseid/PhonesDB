const db = require("../db-config.js");


async function getfilteredPhones(filters) {
  return await db("phonesdb")
    .where(builder => {
    //   if (filters.title) {
    //     builder.where("title", filters.title);
    //   }
      if (filters.releaseDate) {
        builder.where("releaseDate", ">=", filters.releaseDate);
      }
      if (filters.price) {
        builder.whereBetween("price", [filters.price.$gte, filters.price.$lte]);
      }
      if (filters.os) {
        builder.where("os", filters.os);
      }

      if (filters.screenRes) {
        builder.whereIn("screenres", filters.screenRes);
      }

      if (filters.cam1MP) {
        builder.whereBetween("cam1MP", [filters.cam1MP.$gte, filters.cam1MP.$lte]);
      }

      if (filters.storageGB) {
        builder.whereBetween("cam1", filters.storageGB);
      }

      if (filters.ramGB) {
        builder.whereBetween("cam1", filters.ramGB);
      }
     
      if (filters.batterymAH) {
        builder.whereBetween("batterymAH", [filters.batterymAH.$gte, filters.batterymAH.$lte]);
      }
      builder.where("status", true);
    })
    .select("*")
    .limit(7);
}

module.exports = {
    getfilteredPhones,
};
