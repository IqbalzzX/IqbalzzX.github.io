function updateClock() {
 var now = new Date();
 var hours = now.getHours();
 var minutes = now.getMinutes();
 var seconds = now.getSeconds();
 var formattedTime = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
 document.getElementById('waktu').innerText = formattedTime;
}

function padZero(number) {
 return number < 10 ? '0' + number : number;
}
setInterval(updateClock, 1000);
updateClock();


// Runtime akurat


function runtime() {
 
$.getJSON(`https://${window.location.hostname}/runtime`, function(response) {
    $("#runtime").text(`${response.runtime}`)  
  })
}

setInterval(runtime, 1000);
runtime();

//Visitor 

function visit() {
$.getJSON("https://visitor-counter.kentodlahh11.workers.dev/visit?url=sakura-jade.vercel.app", function(response) {
  $("#visits").text(`${response.today} / ${response.total}`)  
})
}
  setInterval(visit, 100000);
visit();

//baterai abc ygy

function batteryStatus() {
      navigator.getBattery().then(battery => {
        const status = battery.charging ? 'Charging': 'Discharging'
        const percentage = Math.round(battery.level * 100) + '%'
        document.getElementById('baterai').innerText = `${percentage}`
        document.getElementById('statusnya').innerText = `${status}`
      })
    }

    batteryStatus()

