export const checkValidData = (email, password, name) => {
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPassValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  const isNameValid = /^[a-zA-Z\s-]+$/.test(name);

  if (!isEmailValid) return "Email isn't valid";
  if (!isPassValid) return "Password isn't valid";
  if (!isNameValid) return "Name isn't valid";

  return null;
};
