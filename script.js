"use strict";

const btn = document.querySelector(".btn");
const inputDay = document.querySelector(".day");
const inputMonth = document.querySelector(".month");
const inputYear = document.querySelector(".year");

const outputDay = document.querySelector(".h2-day");
const outputMonth = document.querySelector(".h2-month");
const outputYear = document.querySelector(".h2-year");

const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

const labelDay = document.querySelector(".label-day");
const labelMonth = document.querySelector(".label-month");
const labelYear = document.querySelector(".label-year");

const emptyField = function () {
  if (inputDay.value === "") {
    errorDay.style.opacity = 100;
    labelDay.style.color = "var(--Light-red)";
    inputDay.style.borderColor = "var(--Light-red)";
  }
  if (inputMonth.value === "") {
    errorMonth.style.opacity = 100;
    labelMonth.style.color = "var(--Light-red)";
    inputMonth.style.borderColor = "var(--Light-red)";
  }
  if (inputYear.value === "") {
    errorYear.style.opacity = 100;
    labelYear.style.color = "var(--Light-red)";
    inputYear.style.borderColor = "var(--Light-red)";
  }
};
const test = function (e) {
  emptyField();
  const dayNum = Number(inputDay.value);
  const monthNum = Number(inputMonth.value);
  const yearNum = Number(inputYear.value);
  const now = new Date();
  let startCalculate = true;

  console.log(dayNum, monthNum, yearNum);

  if (dayNum < 0 || dayNum > 31) {
    errorDay.style.opacity = 100;
    errorDay.textContent = "Must be a valid date";
    startCalculate = false;
  }
  if (monthNum < 0 || monthNum > 12) {
    errorDay.style.opacity = 100;
    errorDay.textContent = "Must be a valid date";
    startCalculate = false;
  }

  if (yearNum < 0 || yearNum > now.getFullYear()) {
    errorYear.style.opacity = 100;
    errorYear.textContent = "Must be a valid date";
    startCalculate = false;
  }

  if (startCalculate) {
    const yourBirthday = new Date(yearNum, monthNum, dayNum);
    const age = new Date(now - yourBirthday);
    const ageYear = Math.abs(age.getFullYear() - 1970);
    const ageMonth = Math.abs(age.getMonth());
    const ageday = Math.abs(age.getDay());
    console.log(ageMonth, ageday, ageYear);
  }
};

btn.addEventListener("click", test);
