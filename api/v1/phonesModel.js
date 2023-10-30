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

      if (filters.cam2MP) {
        builder.whereBetween("cam2MP", [filters.cam2MP.$gte, filters.cam2MP.$lte]);
      }


      if (filters.cam1vidP) {
        builder.whereBetween("cam1vidP", [filters.cam1vidP.$gte, filters.cam1vidP.$lte]);
      }


      if (filters.cam2vidP) {
        builder.whereBetween("cam2vidP", [filters.cam2vidP.$gte, filters.cam2vidP.$lte]);
      }


      if (filters.storageGB) {
        builder.whereIn("storageGB", filters.storageGB);
      }

      if (filters.ramGB) {
        builder.whereIn("ramGB", filters.ramGB);
      }
     
      if (filters.batterymAH) {
        builder.whereBetween("batterymAH", [filters.batterymAH.$gte, filters.batterymAH.$lte]);
      }
      


     if (filters.usb) {
        builder.where("usb", filters.usb);
      }


      if (filters.memoryslot) {
        builder.where("memoryslot", filters.memoryslot);
      }

      if (filters.wirelesscharging) {
        builder.where("wirelesscharging", filters.wirelesscharging);
      }

      if (filters.fingerprint) {
        builder.where("fingerprint", filters.fingerprint);
      }
    })
    .select("*")
    .orderBy("fans", "desc") // order by the "fans" column in descending order
    .limit(10);
}

module.exports = {
    getfilteredPhones,
};
