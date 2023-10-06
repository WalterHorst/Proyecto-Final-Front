export const validateRegister = (data) => {
  let errors = {};

  if (data.name === "" || data.name.length > 20 || data.name.length < 3) {
    errors.name = "Ingresa un nombre de mínimo 3 y máximo 20 caracteres";
  }

  if (!/(?=.*[a-z])/.test(data.password)) {
    errors.password = "Requiere una letra minúscula";
  } else if (!/(?=.*[A-Z])/.test(data.password)) {
    errors.password = "Requiere una letra mayúscula";
  } else if (data.password.length < 6 || data.password.length > 10) {
    errors.password = "Requiere entre 6 y 10 caracteres";
  } 

  if( data.password !== data.passwordConfirmation) {
    errors.passwordConfirmation = 'Las contraseñas no coinciden'
  }

  if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)) {
    errors.email = "Ingresa un email valido - ejemplo@correo.com";
  }

  if (data.celular === "" || isNaN(Number(data.celular)) || data.celular.length < 11 || data.celular.length > 11) {
    errors.celular = "Ingresa un número celular válido de 11 dígitos";
  }
  

   return errors;
};


export const validateLogin = (data) => {
  let errors = {};

  // if (!/(?=.*[a-z])/.test(data.password)) {
  //   errors.password = "Requiere una letra minúscula";
  // } else if (!/(?=.*[A-Z])/.test(data.password)) {
  //   errors.password = "Requiere una letra mayúscula";
  // } else if (data.password.length < 6 || data.password.length > 10) {
  //   errors.password = "Requiere entre 6 y 10 caracteres";
  // } 

  if( data.password !== data.passwordConfirmation) {
    errors.passwordConfirmation = 'Las contraseñas no coinciden'
  }

  if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)) {
    errors.email = "Ingresa un email valido - ejemplo@correo.com";
  }

   return errors;
};

export const validateProduct = (data) => {
  let errors = {};

  if (data.name === "" || data.name.length > 20 || data.name.length < 3) {
    errors.name = "Ingrese un nombre de minimo 3 y máximo 20 caracteres";
  }

  if (!/https?:\/\/.*\.(?:png|jpg|gif|bmp|svg|jpeg)/i.test(data.image)) {
    errors.image = "Escribe la URL de la imagen con formato valido";
  }
  if (data.brand || data.brand === "" || data.brand.length > 20) {
    errors.brand = "Ingese marca menor a 20 caracteres";
  }
  if (data.category === "Seleccione") {
    errors.category = "Seleccione una categoria";
  }
  if (data.detail === "" || data.detail.length < 10) {
    errors.detail = "Ingese detalle de producto mayor a 10 caracteres";
  }
  if (data.price.trim() === "") {
    errors.price = "Ingrese precio";
  } else if (isNaN(Number(data.price))) {
    errors.price = "Stock debe ser un número";
  }
  if (data.stock.trim() === "") {
    errors.stock = "Ingrese stock";
  } else if (isNaN(Number(data.stock))) {
    errors.stock = "Stock debe ser un número";
  }

   return errors;
};
