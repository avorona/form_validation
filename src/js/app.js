


function validateform(form) {

  var digits_reg = new RegExp('[^0-9]', 'g');
  form.elements['Lead[age]'].value = form.elements['Lead[age]'].value.replace(digits_reg, '');


  if (form.elements['Lead[name]'].value === '') {
    alert('Укажите Имя');
    return false;
  }

  if (form.elements['Lead[name]'].value.length < 2) {
    alert('Укажите Имя');
    return false;
  }

  if (form.elements['Lead[phone]'].value === '') {
    alert('Телефон не заполнен. Должен сождержать 10 цифр. Пример: 9123456789 или городской с кодом города 4951234567');
    return false;
  }

  var phone_reg = new RegExp('[^0-9]', 'g');
  form.elements['Lead[phone]'].value = form.elements['Lead[phone]'].value.replace(phone_reg, '');
  if (form.elements['Lead[phone]'].value.length < 10) {
    alert('Телефон не заполнен. Должен сождержать 10 цифр. Пример: 9123456789 или городской с кодом города 4951234567');
    return false;
  }
  if (form.elements['Lead[phone]'].value.length > 11) {
    alert('Телефон не заполнен. Должен сождержать 10 цифр. Пример: 9123456789 или городской с кодом города 4951234567');
    return false;
  }

  form.submit();
}
