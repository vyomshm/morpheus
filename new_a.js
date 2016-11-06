//for fetching data from vital screen and login screen


var playersRef = firebase.database().ref("patients/");
var age=$("#age").val();

//var name=$("#Name").val();
var heartbeat=document.getElementById("heartbeat").textContent;
var body_temp=document.getElementById("body_temp").textContent;
var blood_pressure_systolic=document.getElementById("blood_pressure_systolic").textContent.get;
var respiratory_rate=document.getElementById("respiratory_rate").textContent.get;
var blood_pressure_diastolic=document.getElementById("blood_pressure_diastolic").textContent.get;
var glucose_level=document.getElementById("glucose_level").textContent.get;
var room_temp=document.getElementById("room_temp").textContent.get;
var humidity=document.getElementById("humidity").textContent.get;

playersRef.set({
   
     
       'vitals':{
       'age':'age',
       'heartbeat': 'heartbeat',
       'respiratory_rate':'respiratory_rate',
       'blood_pressure':{ 'blood_pressure_systolic':'blood_pressure_systolic',
        
          'blood_pressure_diastolic': 'blood_pressure_diastolic'},
          'body_temp':'body_temp',
          'room_temp':'room_temp',
          'humidity':'humidity'
            }
   
	
   
}
/*var playersRef = firebase.database().ref("players/");

playersRef.set({
   John: {
      number: 1,
      age: 30
   },
	
   Amanda: {
      number: 2,
      age: 20
   }
});*/



);