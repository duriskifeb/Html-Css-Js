function chat() {
  let question = {
    wee: "opo cak",
    "Oleh a aku takon": "oleh ae, jenengmu sopo",
    "riski": "Khodam ga turu",
    ardi: "Khodam mari tibo",
    fahri: "Khodam abangkuhh",
    fahris: "Khodam si paling gemoy",
  };
  let user = document.getElementById("questionBox").value;
  document.getElementById("answerBox").innerHTML = user + "<br>";
  if (user in question) {
    document.getElementById("answerBox").innerHTML = question[user] + "<br>";
  } else {
    document.getElementById("answerBox").innerHTML =
      "Sepurane wamu gaiso delok khoddam";
  }
}
