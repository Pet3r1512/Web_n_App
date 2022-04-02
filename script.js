const submitBtn = $(`input[type="submit"]`);//lấy ra nút Submit

function submit() {
  let error = false;
  $(`input`).each(function () {
    if ($(this).val() === "") {//val = value
      error = true;
    }
  });
  $("textarea").each(function () {
    if ($(this).val() === "") {
      error = true;
    }
  });
  return error;
}

submitBtn.addEventlistener('click', function() {
  
})

submitBtn.click(function (e) {
  e.preventDefault();
  if (submit() === true) {
    alert("Please fill in all information");
  } else {
    alert("Your information has been recorded successfully!!!");
  }
});
