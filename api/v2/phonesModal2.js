const fs = require('fs').promises;
const path = require('path');

async function getfilteredPhones(filters) {
  try {
    const data = await fs.readFile(path.join(__dirname, 'phones.json'), 'utf8');
    let phones = JSON.parse(data).phones;

    // Apply filters
    phones = phones.filter(phone => {
      let match = true;

      // if (filters.releaseDate) {
      //   match = match && new Date(phone.releaseDate) >= new Date(filters.releaseDate);
      // }

       // Modified release date logic
       if (filters.releaseDate) {
        const phoneDate = new Date(phone.releaseDate);
        const startDate = new Date('2012-01-01');
        const endDate = new Date(filters.releaseDate);
        match = match && phoneDate >= startDate && phoneDate <= endDate;
    }


      if (filters.price) {
        match = match && phone.price >= filters.price.$gte && phone.price <= filters.price.$lte;
      }
      if (filters.os) {
        match = match && phone.os === filters.os;
      }
      if (filters.screenRes) {
        match = match && filters.screenRes.includes(phone.screenres);
      }
      if (filters.cam1MP) {
        match = match && phone.cam1MP >= filters.cam1MP.$gte && phone.cam1MP <= filters.cam1MP.$lte;
      }
      if (filters.cam2MP) {
        match = match && phone.cam2MP >= filters.cam2MP.$gte && phone.cam2MP <= filters.cam2MP.$lte;
      }
      if (filters.cam1vidP) {
        match = match && phone.cam1vidP >= filters.cam1vidP.$gte && phone.cam1vidP <= filters.cam1vidP.$lte;
      }
      if (filters.cam2vidP) {
        match = match && phone.cam2vidP >= filters.cam2vidP.$gte && phone.cam2vidP <= filters.cam2vidP.$lte;
      }
      if (filters.storageGB) {
        match = match && filters.storageGB.includes(phone.storageGB.toString());
      }
      if (filters.ramGB) {
        match = match && filters.ramGB.includes(phone.ramGB.toString());
      }
      if (filters.batterymAH) {
        match = match && phone.batterymAH >= filters.batterymAH.$gte && phone.batterymAH <= filters.batterymAH.$lte;
      }
      if (filters.usb) {
        match = match && phone.usb === filters.usb;
      }
      if (filters.memoryslot !== undefined) {
        match = match && phone.memoryslot === filters.memoryslot;
      }
      if (filters.wirelesscharging !== undefined) {
        match = match && phone.wirelesscharging === filters.wirelesscharging;
      }
      if (filters.fingerprint !== undefined) {
        match = match && phone.fingerprint === filters.fingerprint;
      }

      return match;
    });

    // Sort by fans and limit to 10
    return phones.sort((a, b) => b.fans - a.fans).slice(0, 10);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getfilteredPhones
};
