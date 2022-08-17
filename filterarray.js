'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});

const resources = [
    {name: "University Fitness Center-Penn State", county: "Hershey/Hummelstown", address:"30 Conference Dr., Hershey, PA 17033", note:"	Exclusive health and wellness facility, serving our Penn State Health affiliates.Membership https://ufc.pennstatehealth.org/membership/.Staffed by exercise physiologists who can assist  with designing custom workout programs, weight training routines, improving your physical health, helping you recover from a sports injury or just providing motivation for a health, exercise and fitness goal"},
    {name: "Movement as Medicine Dance Class", county: "Hershey/Hummelstown", address:"Contact Alexandra De La Plante", note:"delaplante@pennstatehealth.psu.edu.Free adaptive dance classes for people living with disabilities .Need to fill out attached form"},
    {name: "East Shore Branch YMCA", county: "Harrisburg", address:"701 N Front Street, Harrisburg, PA ", note:"Full gym with ellipticals, treadmills, bikes, rowing machines, and pool access.Membership needed but will have full access to any YMCA in the area"},
    {name: "Strava: Run, Ride, Swim", county: "Universal", address:"Download App", note:"	- Free app compatible with Apple and Samsung consumers.Tracks and logs workouts.Receive kudos from friends and family who can see your workout activity "},
    {name: "Fitness Blender", county: "Universal", address:"https://www.fitnessblender.com/", note:"Free full-length workout videos, workout programs, meal plans, nutrition information and fitness information. Accessible to everyone with over 500+ free workouts - you just need to make an account and need access to a computer/mobile device and internet  "},
    {name: "SilverSneakers", county: "Universal", address:"To find a participating location: https://tools.silversneakers.com/LocationSearch ", note:"Free for adults 65+ through select Medicare plans. Must check if you have SilverSneakers with your Medicare plan. Create an online account and download the membership card. Find nearest locations to join a fitness class or exercise via online classes "},
    {name: "SmartGym: Gym & Home Workouts", county: "Universal", address:"https://smartgymapp.com/", note:"	Free app compatible with Apple consumers "},
    {name: "Dauphin County Parks and Recreation Department ", county: "Harrisburg", address:"100 Fort Hunter Road, Harrisburg, PA 17110 ", note:"Recreational activities including jogging, festivals, concerts, historic mansion tours; environmental education; parks; maintenance and development technical assistance; recreation technical assistance "},
    {name: "Lebanon Valley Family YMCA - Fitness and Wellness", county: "Lebanon", address:"201 North 7th Street Lebanon, PA 17046 ", note:"Facilities and programs include state-of-the-art wellness center, 3 group fitness studios including a cycling studio, group fitness classes including kids fitness classes, over 80 group fitness classes for all levels, kids corner babysitting while you exercise, water fitness classes, swim lessons, camp, sports, indoor pool, personal training, indoor track, wellness coaching, indoor basketball court, racquetball courts, two gymnasiums, healthy habits seminars, and wi-fi throughout facility. "},
    {name: "West Shore Branch YMCA", county: "West Shore", address:"410 Fallowfield Rd, Camp Hill, PA 17011, United States", note:"Full gym with ellipticals, treadmills, bikes, rowing machines, and pool access. Membership needed but will have full access to any YMCA in the area"},
];


//console.log(carItems);
function functiona() {
    const carItems =  resources.filter(function(resource) {
        return resource.county == "Hershey/Hummelstown";
       });
    document.getElementById("demo").innerHTML = JSON.stringify(carItems);
};

function universal() {
    const carItems =  resources.filter(function(resource) {
        return resource.county == "Universal";
       });
    document.getElementById("demo").innerHTML = JSON.stringify(carItems);
};

function lebanon() {
    const carItems =  resources.filter(function(resource) {
        return resource.county == "Lebanon";
       });
    document.getElementById("demo").innerHTML = JSON.stringify(carItems);
};

function harrisburg() {
    const carItems =  resources.filter(function(resource) {
        return resource.county == "Harrisburg";
       });
    document.getElementById("demo").innerHTML = JSON.stringify(carItems);
};

function westshore() {
    const carItems =  resources.filter(function(resource) {
        return resource.county == "West Shore";
       });
    document.getElementById("demo").innerHTML = JSON.stringify(carItems);
};
