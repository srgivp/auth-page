const invalidHandler = formState => {
  const inputFieldsIds = ["email", "password"];
  inputFieldsIds.forEach(item => {
    if (formState.errors[item]) {
      if (
        !document.getElementById(`${item}`).classList.contains("inputInvalid")
      ) {
        document.getElementById(`${item}`).classList.add("inputInvalid");
      }
    } else {
      if (
        document.getElementById(`${item}`).classList.contains("inputInvalid")
      ) {
        document.getElementById(`${item}`).classList.remove("inputInvalid");
      }
    }
  });
};

export default invalidHandler;
