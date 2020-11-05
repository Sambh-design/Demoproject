function showResponse(response) {
  var container = document.getElementById("response-container");
}
function addoned(element) {
  element.classList.add("oned");
}

function removeoned(element) {
  element.classList.remove("oned");
}

function lock() {
  var x = document.querySelector("#lock > span> status");
  if (x.innerHTML  === "Locked") {
    x.innerHTML = "Unlocked";
    document.getElementById('unlockico').style.display = "block";
    document.getElementById('lockico').style.display = "none";
    pywebview.api.lock("0:0");
  } else {
    x.innerHTML = "Locked";
    document.getElementById('unlockico').style.display = "none";
    document.getElementById('lockico').style.display = "block";
    pywebview.api.lock("0:1");
  }
}

function fan() {
  var x = document.querySelector("#fan > span > status");
  if (x.innerHTML  === "ON") {
    x.innerHTML = "OFF";
    pywebview.api.fan("1:0");
  } else {
    x.innerHTML = "ON";
    pywebview.api.fan("1:1");
  }
}


function clset1() {
  var x = document.querySelector("#sw-clset1 > span > status");
  if (x.innerHTML === "ON") {
    x.innerHTML = "OFF";
    removeoned(document.querySelector("#sw-clset1"));
    pywebview.api.switch2("2:0");
  } else {
    x.innerHTML = "ON";
    addoned(document.querySelector("#sw-clset1"));
    pywebview.api.switch2("2:1");
  }
}

function clset2() {
  var x = document.querySelector("#sw-clset2 > span > status");
  if (x.innerHTML === "ON") {
    x.innerHTML = "OFF";
    removeoned(document.querySelector("#sw-clset2"));
    pywebview.api.switch3("3:0");
  } else {
    x.innerHTML = "ON";
    addoned(document.querySelector("#sw-clset2"));
    pywebview.api.switch3("3:1");
  }
}

function bulb() {
  var x = document.querySelector("#sw-bulb > span > status");
  if (x.innerHTML === "ON") {
    x.innerHTML = "OFF";
    removeoned(document.querySelector("#sw-bulb"));
    pywebview.api.switch4("4:0");
  } else {
    x.innerHTML = "ON";
    addoned(document.querySelector("#sw-bulb"));
    pywebview.api.switch4("4:1");
  }
}

function nbulb() {
  var x = document.querySelector("#sw-nbulb > span > status");
  if (x.innerHTML === "ON") {
    x.innerHTML = "OFF";
    removeoned(document.querySelector("#sw-nbulb"));
    pywebview.api.switch5("5:0");
  } else {
    x.innerHTML = "ON";
    addoned(document.querySelector("#sw-nbulb"));
    pywebview.api.switch5("5:1");
  }
}

// function sw6() {
//   var x = document.getElementById("sw6");
//   if (x.innerHTML === "Switch 6 ON") {
//     x.innerHTML = "Switch 6 OFF";
//     pywebview.api.switch6("6:0");
//   } else {
//     x.innerHTML = "Switch 6 ON";
//     pywebview.api.switch6("6:1");
//   }
// }

// function sw7() {
//   var x = document.getElementById("sw7");
//   if (x.innerHTML === "Switch 7 ON") {
//     x.innerHTML = "Switch 7 OFF";
//     pywebview.api.switch7("7:0");
//   } else {
//     x.innerHTML = "Switch 7 ON";
//     pywebview.api.switch7("7:1");
//   }
// }

// function sw8() {
//   var x = document.getElementById("sw8");
//   if (x.innerHTML === "Switch 8 ON") {
//     x.innerHTML = "Switch 8 OFF";
//     pywebview.api.switch8("8:0");
//   } else {
//     x.innerHTML = "Switch 8 ON";
//     pywebview.api.switch8("8:1");
//   }
// }

// function sw9() {
//   var x = document.getElementById("sw9");
//   if (x.innerHTML === "Switch 9 ON") {
//     x.innerHTML = "Switch 9 OFF";
//     pywebview.api.switch9("9:0");
//   } else {
//     x.innerHTML = "Switch 9 ON";
//     pywebview.api.switch9("9:1");
//   }
// }

function startTime() {
  var today = new Date(),
  h = today.getHours(),
  m = today.getMinutes(),
  da = today.getDate()
  mo = today.getMonth();
  yr = today.getFullYear();
  mo = monthName(mo);
  //var s = today.getSeconds();
  var mer = checkMeridian (h);
  h = make12hr(h)
  m = checkTime(m);
  //s = checkTime(s);
  txt.innerHTML = "<big>" +h + ":" + m + "</big>" + "<small>" + mer + "</small>"; //":" + s + 
  var t = setTimeout(startTime, 500);
  mon.innerHTML = mo + ' ' + da + ',' + ' ' + yr;
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function monthName(mo) { //Function to return month Name
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[mo];
}

function make12hr(i) { //Converts time to 12hr format
  if (i>12) {
    i=i-12;
  }
  return i;
}

function checkMeridian (i) { //Checks Meridian
  if (i>12) {
    i="PM";
  } else {
    i = "AM";
  }
  return i;
}

// const themeMap = {
//   dark: "light",
//   light: "solar",
//   solar: "dark"
// };

// const theme = localStorage.getItem('theme')
//   || (tmp = Object.keys(themeMap)[0],
//       localStorage.setItem('theme', tmp),
//       tmp);
// const bodyClass = document.body.classList;
// bodyClass.add(theme);

// function toggleTheme() {
//   const current = localStorage.getItem('theme');
//   const next = themeMap[current];

//   bodyClass.replace(current, next);
//   localStorage.setItem('theme', next);
// }

// document.getElementById('themeButton').onclick = toggleTheme;


// const gaugeElement = document.querySelector(".gauge");

function setGaugeValue (value) {
  if (value < 0 || value > 1) {
    return;
  }

  document.querySelector(".gauge__fill").style.transform = `rotate(${value/2}turn)`;
  document.querySelector(".gauge__cover").innerHTML = `${Math.round(value * 100)}°C`;
}

setInterval(() => {
  setGaugeValue(0.3);  
  
}, 500);

const allbutton = Array.from(document.querySelector('.buttongrid').childNodes);

const count = 7;
console.log(allbutton);

allbutton.forEach(element => {
  console.log(element.classList);
})

const showlights = () => {
  allbutton.forEach (button => {
    if(button.classList != undefined) {
      if(button.classList.contains("switchLight")) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    }
  });
};

const showall = () => {
  console.log("showall");
  allbutton.forEach (button => {
    if(button.classList != undefined) {
      if(button.classList.contains("cbutton")) {
        button.style.display = "block";
      }
    }
  });
};

const showlock = () => {
  allbutton.forEach (button => {
    if(button.classList != undefined) {
      if(button.classList.contains("lock")) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    }
  });
};

const showsensor = () => {
  allbutton.forEach (button => {
    if(button.classList != undefined) {
      if(button.classList.contains("sensor")) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    }
  });
};