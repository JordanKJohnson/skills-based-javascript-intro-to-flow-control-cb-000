function basicTeenager(age) {
  if (age > 12 && age < 20){
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (age > 12 && age < 20){
    return "You are a teenager!";
  }
  else{
    return "You are not a teenager!";
  }
}

function ageChecker(age) {
  if (age > 12 && age < 20){
    return "You are a teenager!";
  }
  else if (age < 13) {
    return "You are a kid";
  }
  else if (age > 19) {
    return "You are a grownup";
  }
  else{
    return "You are not a teenager!";
  }
}

function ternaryTeenager(age) {
return (age < 20 && age > 12) ? "You are a teenager!" : "You are not a teenager"
}

function switchAge(age) {
switch (age){
case 13,14,15,16,17,18,19:
return "You are a teenager!";
}

}
