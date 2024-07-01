function scuberGreetingForFeet(feet) {
  // Write your code here!

  if (feet <= 400) {
    return 'This one is on me!'
  }

  else if (feet > 400 && feet < 2000) {

    return 'That will be twenty bucks.'
  }

  else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }

  else if (feet >= 2500) {
    return 'No can do.'
  }
}

console.log(scuberGreetingForFeet(4000))

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return 'Ok, sounds good.'

  } else {
    return "No go."
  } // Write your code here!
}


console.log(ternaryCheckCity("Pittsburgh"));

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break
    default:
    return 'Bye.'
      break;
  }
  // Write your code here!
}
console.log(switchOnCharmFromTip("generous"));