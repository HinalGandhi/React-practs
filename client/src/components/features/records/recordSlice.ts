import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    email: "batz.mortimer@yahoo.com",
    first_name: "Jana",
    last_name: "Strassman",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 2,
    email: "ullrich.owen@kristin.biz",
    first_name: "Jube ",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 3,
    email: "kale_lehner@yahoo.com",
    first_name: "Kwak ",
    last_name: "Seong Min",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 4,
    email: "ullrich.owen@kristin.biz",
    first_name: "Leon ",
    last_name: "Hunt",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 5,
    email: "ullrich.owen@kristin.biz",
    first_name: "Nitithron Prinya",
    last_name: "Prinya",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 6,
    email: "kale_lehner@yahoo.com",
    first_name: "Nombeko Mabandia",
    last_name: "Mabandia",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
  {
    id: 7,
    email: "ullrich.owen@kristin.biz",
    first_name: "Nwoye ",
    last_name: "Akachi",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 8,
    email: "kale_lehner@yahoo.com",
    first_name: "Paulina ",
    last_name: "Gayoso",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 9,
    email: "ullrich.owen@kristin.biz",
    first_name: "Phawta ",
    last_name: "Tuntayakul",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
  {
    id: 10,
    email: "ullrich.owen@kristin.biz",
    first_name: "Siri ",
    last_name: "Jakobsson",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
];
const recordSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default recordSlice.reducer;
