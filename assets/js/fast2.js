var sedano;
var sedanr;
var suvo; 
var suvr;

function calcRoute() {
	
    var strText = document.getElementById("name").value;
    var strText1 = document.getElementById("p").value;
    var strText2 = document.getElementById("location-1").value;
    var strText3 = document.getElementById("location-2").value;
    var strText4 = document.getElementById("pickupdate").value;
    var strText6 = document.getElementById("pickuptime").value;
    var strText7 = document.getElementById("cars").value;
    var strText8 = document.getElementById("ser").value;
   
	var Clink="https://taxibazzar.com";
	var CPh="9025961709";
	var Cname="Taxi Bazzar";
	//calcRoute()
    if((strText7=="Sedan") && (strText8=="One-Way"))
    {rate=sedano;}
    else if((strText7=="Sedan") && (strText8="Round"))
    {rate=sedanr;}
    else if((strText7=="SUV") && (strText8=="One-Way"))
    {rate=suvo;}
    else if((strText7=="SUV") && (strText8=="Round"))
    {rate=suvr;}
    else if(strText7=="Traveller")
    {rate=traveller;}
console.log("read successful");
    var result = 'Customer Name:  ' + strText + '%0APhone Number: ' + strText1 +'%0APickup Location: ' + strText2+  '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 + '%0APickup Time: ' + strText6 +'%0AService: ' + strText8 + '%0ACars: ' + strText7+"%0APrice:"+rate;

var finalMsg = encodeURI(result);
         document.getElementById("bookingForm").addEventListener("submit", (e) => {
e.preventDefault();
if(strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6=="")
        {
        console.log('error');
        }else
        {
            const request = new XMLHttpRequest();
		const url = 'https://api.telegram.org/bot1866181621:AAEOXk36TUuH-jk161k7-Vcq-GAxkBlszeE/sendMessage?chat_id=-590118042&text='+result;
        request.open("post", url);
        request.send();
		console.log("Sent Telegram successfully");
        fetch("https://www.fast2sms.com/dev/bulk?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&sender_id=FSTSMS&message="+Clink+"/%0AContact No: "+CPh+"%0AHello "+strText+",%0AThank you for Booking with "+Cname+".Your "+strText2+" Booking has been Confirmed on "+strText4+".&language=english&route=p&numbers="+strText1)
			.then(response=>{
			if(response.status==200)
			{
				console.log("Sent Message successfully");
				
				localStorage.setItem("result", strText);
				localStorage.setItem("result1", strText2);
				localStorage.setItem("result2", strText3);
				localStorage.setItem("result3", strText7);
				localStorage.setItem("result4", strText8);
				window.location.href = "bc.html";
			}
		})    			
        }

});
}       
   




var myLatLng = { lat: 13.0827, lng: 80.2707 };
var mapOptions = {
    center: myLatLng,
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// Hide result box
//document.getElementById("output").style.display = "none";
document.getElementById("output1").style.display = "block";
// Create/Init map
var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

// Create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

// Create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

// Bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);
var sedano;
var sedanr;
var suvo; 
var suvr;

// Define calcRoute function
function calcRoute1() {
     var y = document.getElementById("ma");
        y.style.display = "none";
     var z = document.getElementById("ma1");
        z.style.display = "block";
    //create request
    var request = {
        origin: document.getElementById("location-1").value,
        destination: document.getElementById("location-2").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }

    // Routing
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time            
            var d=result.routes[0].legs[0].distance.value/1000;
            var n = d.toFixed(0);
            sedano=((n*12)+350)+" - "+((n*12)+500);
            sedanr=2*((n*12)+350)+" - "+2*((n*12)+500);
            suvo=((n*16)+350)+" - "+((n*16)+500);
            suvr=2*((n*16)+350)+" - "+2*((n*16)+500);
            traveller=(2*((n*18)+350))+" - "+(2*((n*18)+500));
		localStorage.setItem("rate1", sedano);
		localStorage.setItem("rate2", sedanr);
		localStorage.setItem("rate3", suvo);
		localStorage.setItem("rate4", suvr);
		localStorage.setItem("rate5", traveller);
           
          //  $("#output").html("<div class='result-table'> Driving distance: " + result.routes[0].legs[0].distance.text + ".<br />SUV Rate: ₹" +((n)*12)+"-"+((n)*15)+".<br />Sedan Rate: ₹" +((n)*8)+"-"+((n)*11)+".<br />Hatchback Rate: ₹" +((n)*16)+"-"+((n)*19)+ ".<br />Duration: " + result.routes[0].legs[0].duration.text + ".</div>");
            //document.getElementById("output").style.display = "block";
            $("#output1").html("<div class='meta-item;'>  <span> Distance: " + result.routes[0].legs[0].distance.text + "</span><br /><span> One Way : ₹" +sedano+"</span><br /><span> Round Way : ₹" +sedanr+"</span></div>");
            document.getElementById("output1").style.display = "block";
            $("#output2").html("<div class='meta-item;'>  <span> Distance: " + result.routes[0].legs[0].distance.text + "</span><br /><span> One Way : ₹" +suvo+"</span><br /><span> Round Way : ₹" +suvr+"</span></div>");
            document.getElementById("output1").style.display = "block";
            $("#output3").html("<div class='meta-item;'>  <span> Distance: " + result.routes[0].legs[0].distance.text + "</span><br /><span> Round Way : ₹" +traveller+"</span><br /><span> One Way : Not available </span></div>");
            document.getElementById("output1").style.display = "block";
            //display route <span> Price  :  ₹13 / Km.</span>
            directionsDisplay.setDirections(result);
            testVariable();



        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //Show error message           
           
            alert("Can't find road! Please try again!");
            clearRoute();
        }
    });

}

// Clear results

function clearRoute(){
    document.getElementById("output").style.display = "none";
    document.getElementById("location-1").value = "";
    document.getElementById("location-2").value = "";
    directionsDisplay.setDirections({ routes: [] });
    
}

var options = {
    componentRestrictions: { country: "ind" }
}


var input1 = document.getElementById("location-1");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options); 

var input2 = document.getElementById("location-2");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
