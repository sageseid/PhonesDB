/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  await knex("phonesdb").insert([
  {
    id: 1,
    username: 'Acer Chromebook Tab 10',
    releaseDate: "2018, 08",
    price: 330,
    os: "Android",
    screenres: "1536x2048 pixels",
    cam1MP: 5,
    cam1vidP: 720,
    cam2MP: 8,
    cam2vidP: 1080,
    storageGB: 32,
    fans: 20,
    ramGB: 4,
    batterymAH: 4500,
    status: true,
    memoryslot: true,
    wirelesscharging: true,
    fingerprint: true,
    faceunlock: true,
    usb: "USB Type-C 3.1",
    radio: true,
    nfc: true
  },
  {
    id: 2,
    username: 'Acer Chromebook Tab Pro',
    releaseDate: "2020, 04",
    price: 400,
    os: "Chrome OS",
    screenres: "1920x1200 pixels",
    cam1MP: 8,
    cam1vidP: 1080,
    cam2MP: 13,
    cam2vidP: 4000,
    storageGB: 64,
    fans: 10,
    ramGB: 8,
    batterymAH: 5000,
    status: true,
    memoryslot: false,
    wirelesscharging: false,
    fingerprint: true,
    faceunlock: true,
    usb: "USB Type-C 3.2",
    radio: false,
    nfc: false
  }])
};

