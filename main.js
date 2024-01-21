const resources = [
    {name: "University Fitness Center-Penn State", county: "Hershey/Hummelstown", address:"30 Conference Dr., Hershey, PA 17033", note:"	Exclusive health and wellness facility, serving our Penn State Health affiliates.Membership https://ufc.pennstatehealth.org/membership/.Staffed by exercise physiologists who can assist  with designing custom workout programs, weight training routines, improving your physical health, helping you recover from a sports injury or just providing motivation for a health, exercise and fitness goal", contact:"(717) 531-7075"},
    {name: "Movement as Medicine Dance Class", county: "Hershey/Hummelstown", address:"Contact Alexandra De La Plante", note:"delaplante@pennstatehealth.psu.edu.Free adaptive dance classes for people living with disabilities .Need to fill out attached form", contact:"delaplante@pennstatehealth.psu.edu"},
    {name: "East Shore Branch YMCA", county: "Harrisburg", address:"701 N Front Street, Harrisburg, PA ", note:"Full gym with ellipticals, treadmills, bikes, rowing machines, and pool access. Membership needed but will have full access to any YMCA in the area", contact:"(717) 232-9622"},
    {name: "Strava: Run, Ride, Swim", county: "Universal", address:"Download App", note:"	- Free app compatible with Apple and Samsung consumers. Tracks and logs workouts.Receive kudos from friends and family who can see your workout activity ", contact:"https://www.strava.com/"},
    {name: "Fitness Blender", county: "Universal", address:"https://www.fitnessblender.com/", note:"Free full-length workout videos, workout programs, meal plans, nutrition information and fitness information. Accessible to everyone with over 500+ free workouts - you just need to make an account and need access to a computer/mobile device and internet  "},
    {name: "SilverSneakers", county: "Universal", address:"To find a participating location: https://tools.silversneakers.com/LocationSearch ", note:"Free for adults 65+ through select Medicare plans. Must check if you have SilverSneakers with your Medicare plan. Create an online account and download the membership card. Find nearest locations to join a fitness class or exercise via online classes "},
    {name: "SmartGym: Gym & Home Workouts", county: "Universal", address:"https://smartgymapp.com/", note:"	Free app compatible with Apple consumers "},
    {name: "Dauphin County Parks and Recreation Department ", county: "Harrisburg", address:"100 Fort Hunter Road, Harrisburg, PA 17110 ", note:"Recreational activities including jogging, festivals, concerts, historic mansion tours; environmental education; parks; maintenance and development technical assistance; recreation technical assistance ", contact:"(717) 599-5188"},
    {name: "Lebanon Valley Family YMCA - Fitness and Wellness", county: "Lebanon", address:"201 North 7th Street Lebanon, PA 17046 ", note:"Facilities and programs include state-of-the-art wellness center, 3 group fitness studios including a cycling studio, group fitness classes including kids fitness classes, over 80 group fitness classes for all levels, kids corner babysitting while you exercise, water fitness classes, swim lessons, camp, sports, indoor pool, personal training, indoor track, wellness coaching, indoor basketball court, racquetball courts, two gymnasiums, healthy habits seminars, and wi-fi throughout facility. ", contact:"(717) 273-2691"},
    {name: "West Shore Branch YMCA", county: "West Shore", address:"410 Fallowfield Rd, Camp Hill, PA 17011, United States", note:"Full gym with ellipticals, treadmills, bikes, rowing machines, and pool access. Membership needed but will have full access to any YMCA in the area", contact:"(717) 737-9622"},
    {name: "Dauphin County Area Agency on Aging - Hershey", county: "Hershey/Hummelstown", address:"410 Fallowfield Rd, Camp Hill, PA 17011, United States", note:"Eligible to Dauphin County residents 60 years old and up and their spouses. Recreational and social activities which may include board games, cards, exercise, dance, trips, special events and health programs. A hot, nutritious noon meal is available free of charge, with a reservation. Monday-Friday 8:00am-4:00pm ", contact:"(717) 533-2002"},
    {name: "B'nai B'rith Senior Center", county: "Harrisburg", address:"130 South 3rd Street, Harrisburg, PA 17102 ", note:"Recreational and social activities which may include board games, cards, exercise, dance, trips, special events and health programs.", contact:"717-232-7516"},
    {name: "West Shore Recreation Commission", county: "West Shore", address:"507 Fishing Creek Road, Lewisberry, PA  17339", note:"Variety of activities for adult wellness and youth such as martial arts, cardio step, yoga, barre, Pilates, tai chi, and more", contact:"717-920-9515"},
    {name: "Lenker Park ", county: "West Shore", address:"7555 Manor Dr, West Hanover Township, PA 17112 ", contact:"(717) 724-0083", note:"Nice walking path, basketball courts, tennis courts and exercise equipment for adults"},
    {name: "Pulpit Rock and the Pinnacle Loop", county: "West Shore", address:"https://www.alltrails.com/trail/us/pennsylvania/appalachian-trail-pinnacle-trail-valley-rim-and-pulpit-rock", note:"Start at Hamburg Reservoir parking lot and follow the gravel road (blue blazed) uphill, looking for the white AT blazes crossing the road. Take the white blazed AT (aka the Valley Rim Trail) to the right. After crossing the creek, you'll see a blue blazed road heading off to the left—this will be your return route. - From the Hiking Project", contact:"https://www.hikingproject.com/trail/7052643/pulpit-rock-and-the-pinnacle"},
    // Add more resource objects as needed


];

const buttons = document.querySelectorAll('button');
const resourceList = document.getElementById('resource-list');
const resourceItems = document.getElementById('resource-items');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const county = button.textContent;

        // Filter resources by county
        const countyResources = resources.filter(resource => resource.county === county);

        if (countyResources.length > 0) {
            const resourceItemsHTML = countyResources.map((resource) => {
                return `<li>
                    <strong>${resource.name}</strong><br>
                    County: ${resource.county}<br>
                    Address: ${resource.address}<br>
                    Contact: ${resource.contact}
                </li>`;
            }).join('');
            
            resourceItems.innerHTML = resourceItemsHTML;
            resourceList.classList.remove('hidden');
        }
    });
});

