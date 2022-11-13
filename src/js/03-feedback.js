import { throttle } from "lodash";

const formEl = document.querySelector(".feedback-form");
const FORM_KEY = "feedback-form-state";

formEl.addEventListener("input", throttle(onFormInput, 500));
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  let finalData = {};
  const formData = new FormData(formEl);
  for (const [name, value] of formData.entries()) {
    if (!value) {
      return;
    }
    finalData[name] = value;
  }
  localStorage.removeItem(FORM_KEY);
  console.log(finalData);
  formEl.reset();
}

function onFormInput(event) {
  const { name, value } = event.target;
  let savedData = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {};
  savedData = {
    ...savedData,
    [name]: value,
  };
  localStorage.setItem(FORM_KEY, JSON.stringify(savedData));
}

const renderData = () => {
  let dataToRender = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {};
  const inputNames = Object.keys(dataToRender);
  inputNames.forEach((inputName) => {
    let input = formEl.elements[inputName];
    input.type = "value";
  });
};
renderData();
