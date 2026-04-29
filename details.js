function openNav() {
    document.getElementById("mySidenav").style.width = "260px";

    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("overlay").style.visibility = "visible";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("overlay").style.visibility = "hidden";
}


let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    if (index >= slides.length) {
        currentSlide = 0;
    }

    if (index < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");
}

function changeSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}




const cars = {
    "911": {
        name: "Porsche 911",
        description: "Powerful elegance, timeless performance, pure prestige.",
        image: "images/p911.png",

        specs: {
            horsepower: "385 hp",
            maxPower: "640",
            acceleration: "4.2 sec",
            topSpeed: "293 Km/h",
            range: "~500 Km",
            efficiency: "~9L/100 Km",
            seating: "2+2",
            trunk: "132 L"
        },

        carvideo: "images/p911.mp4",
        
        // features: {
        //     feature1title: "Twin-Turbo Power",
        //     feature1text: "High-performance flat-six twin-turbo engine delivering thrilling acceleration.",
        //     feature2title: "Instant Acceleration",
        //     feature2text: "0–100 km/h in just seconds for pure adrenaline.",
        //     feature3title: "Premium Interior",
        //     feature3text: "Luxury leather finishes and digital cockpit displays.",
        //     feature4title: "Smart Suspension",
        //     feature4text: "Adaptive suspension for comfort and sharp handling.",
        //     feature5title: "Intelligent Safety",
        //     feature5text: "Lane assist, adaptive cruise, parking sensors.",
        //     feature6title: "Sport Exhaust Sound",
        //     feature6text: "Signature Porsche exhaust note full of emotion.",
        // }

        features: [
            ["Twin-Turbo Power", "High-performance flat-six twin-turbo engine delivering thrilling acceleration and unmatched driving excitement."],
            ["Instant Acceleration", "Accelerates from 0–100 km/h in just 3.4 seconds for pure adrenaline on every drive."],
            ["Premium Interior", "Luxury leather finishes and digital cockpit displays ,and advanced comfort technology throughout."],
            ["Smart Suspension", "Adaptive suspension system ensures maximum comfort and razor-sharp handling at every speed."],
            ["Intelligent Safety", "Lane assist, adaptive cruise control, parking sensors, and advanced driver protection systems."],
            ["Sport Exhaust Sound", "Experience the signature Porsche exhaust note engineered to deliver pure emotion and thrilling performance."]
        ]
    },
    
    "taycan": {
        name: "Porsche Taycan",
        description: "Electric power, breathtaking speed, and futuristic luxury in perfect harmony.",
        image: "images/taycan.png",

        specs: {
            horsepower: "402 hp",
            maxPower: "761 hp",
            acceleration: "5.4 sec",
            topSpeed: "230 Km/h",
            range: "~430 Km",
            efficiency: "~20 kWh/100 Km",
            seating: "4",
            trunk: "366 L"
        },


        carvideo: "images/taycan.mp4",


    features: [
        ["Electric Performance", "Instant electric torque with seamless acceleration that delivers silent yet powerful performance beyond expectations."],
        ["Fast Charging", "Ultra-fast charging technology designed to minimize downtime and keep you moving with maximum efficiency."],
        ["Luxury Cabin", "A futuristic interior with digital displays, premium materials, and a clean design focused on comfort and innovation."],
        ["Advanced Handling", "Low center of gravity and precision engineering provide outstanding stability and sharp cornering control."],
        ["Driver Assistance", "Smart driving systems that assist with lane control, adaptive cruise, and safety monitoring for relaxed driving."],
        ["Silent Power", "Delivers extreme acceleration with near-silent operation, redefining performance in a fully electric experience."]
    ]

        // features: {
        //     feature1title: "Electric Performance",
        //     feature1text: "Instant torque and powerful electric acceleration.",
        //     feature2title: "Fast Charging",
        //     feature2text: "Ultra-fast charging for daily convenience.",
        //     feature3title: "Luxury Cabin",
        //     feature3text: "Modern premium digital interior.",
        //     feature4title: "Advanced Handling",
        //     feature4text: "Low center of gravity for sport driving.",
        //     feature5title: "Driver Assistance",
        //     feature5text: "Advanced smart driving systems.",
        //     feature6title: "Silent Power",
        //     feature6text: "Quiet but aggressive electric performance.",
        // }



        // features: [
        //     ["Electric Performance", "Instant torque and powerful electric acceleration."],
        //     ["Fast Charging", "Ultra-fast charging for daily convenience."],
        //     ["Luxury Cabin", "Modern premium digital interior."],
        //     ["Advanced Handling", "Low center of gravity for sport driving."],
        //     ["Driver Assistance", "Advanced smart driving systems."],
        //     ["Silent Power", "Quiet but aggressive electric performance."]
        // ]
    },

    "macan": {
        name: "Porsche Macan",
        description: "Sporty SUV performance, everyday luxury, and bold Porsche spirit in every drive.",
        image: "images/Macan.png",

        specs: {
            horsepower: "265 hp",
            maxPower: "434 ",
            acceleration: "6.2 sec",
            topSpeed: "232 Km/h",
            range: "~600 Km",
            efficiency: "~10 L/100 Km",
            seating: "5",
            trunk: "488 L"
        },
        
        carvideo: "images/macan.mp4",
        
        features: [
            ["SUV Power", "A compact SUV with Porsche DNA, delivering strong acceleration and confident performance in every drive."],

            ["Comfort Drive", "Engineered for smooth everyday driving while maintaining sporty responsiveness and precise control."],

            ["Spacious Cabin", "Premium interior space designed for comfort, practicality, and luxury for both driver and passengers."],

            ["Smart Suspension", "Adaptive suspension that balances comfort and performance by adjusting instantly to road conditions."],

            ["Safety Tech", "Modern safety systems that actively assist the driver and enhance protection in all driving situations."],

            ["Bold Design", "A muscular and sporty SUV design that reflects strength, elegance, and unmistakable Porsche identity."]
        ]

        // features: {
        //     feature1title: "SUV Power",
        //     feature1text: "Strong SUV performance with Porsche spirit.",
        //     feature2title: "Comfort Drive",
        //     feature2text: "Smooth and sporty daily driving.",
        //     feature3title: "Spacious Cabin",
        //     feature3text: "Luxury with family practicality.",
        //     feature4title: "Smart Suspension",
        //     feature4text: "Balanced comfort and control.",
        //     feature5title: "Safety Tech",
        //     feature5text: "Modern protection systems.",
        //     feature6title: "Bold Design",
        //     feature6text: "Aggressive sporty SUV styling.",
        // }

        // features: [
        //     ["SUV Power", "Strong SUV performance with Porsche spirit."],
        //     ["Comfort Drive", "Smooth and sporty daily driving."],
        //     ["Spacious Cabin", "Luxury with family practicality."],
        //     ["Smart Suspension", "Balanced comfort and control."],
        //     ["Safety Tech", "Modern protection systems."],
        //     ["Bold Design", "Aggressive sporty SUV styling."]
        // ]
    },

    "panamera": {
        name: "Porsche Panamera",
        description: "Luxury sedan elegance, thrilling performance, and executive comfort without compromise.",
        image: "images/panamera.png",

        specs: {
            horsepower: "325 hp",
            maxPower: "620 ",
            acceleration: "5.6 sec",
            topSpeed: "270 Km/h",
            range: "~650 Km",
            efficiency: "~9.5 L/100 Km",
            seating: "4-5",
            trunk: "495 L"
        },


        carvideo: "images/panamera.mp4",


        features: [
            ["Luxury Performance", "A perfect blend of executive comfort and sports car dynamics, delivering smooth yet powerful driving in every situation."],

            ["Fast Response", "Instant throttle response with refined power delivery, giving effortless acceleration and confident highway performance."],

            ["Premium Interior", "A high-end cabin designed like a luxury business lounge, combining advanced technology with exceptional comfort and materials."],

            ["Adaptive Chassis", "Intelligent chassis system that continuously adjusts damping and stability for maximum comfort and precise handling."],

            ["Driver Assist", "Advanced driver assistance systems that enhance safety, awareness, and convenience for a relaxed driving experience."],

            ["Elegant Exhaust", "A refined Porsche exhaust note that balances sophistication and sportiness with a deep, controlled sound."]
        ]

        // features: {
        //     feature1title: "Luxury Performance",
        //     feature1text: "Executive comfort with sports performance.",
        //     feature2title: "Fast Response",
        //     feature2text: "Powerful acceleration and smooth control.",
        //     feature3title: "Premium Interior",
        //     feature3text: "Business-class luxury cabin.",
        //     feature4title: "Adaptive Chassis",
        //     feature4text: "Comfort and precision at every speed.",
        //     feature5title: "Driver Assist",
        //     feature5text: "Full intelligent driving support.",
        //     feature6title: "Elegant Exhaust",
        //     feature6text: "Refined Porsche sound signature.",
        // }
        //     ["Luxury Performance", "Executive comfort with sports performance."],
        //     ["Fast Response", "Powerful acceleration and smooth control."],
        //     ["Premium Interior", "Business-class luxury cabin."],
        //     ["Adaptive Chassis", "Comfort and precision at every speed."],
        //     ["Driver Assist", "Full intelligent driving support."],
        //     ["Elegant Exhaust", "Refined Porsche sound signature."]    
    }
};

const params = new URLSearchParams(window.location.search);
const carType = params.get("car");
const car = cars[carType];

if (car) {
    document.getElementById("car-name").textContent = car.name;
    document.getElementById("car-description").textContent = car.description;
    document.getElementById("main-car-image").src = car.image;

    document.getElementById("horsepower").textContent = car.specs.horsepower;
    document.getElementById("max-power").textContent = car.specs.maxPower;
    document.getElementById("acceleration").textContent = car.specs.acceleration;
    document.getElementById("top-speed").textContent = car.specs.topSpeed;
    document.getElementById("range").textContent = car.specs.range;
    document.getElementById("efficiency").textContent = car.specs.efficiency;
    document.getElementById("seating").textContent = car.specs.seating;
    document.getElementById("trunk").textContent = car.specs.trunk;


    document.getElementById("carvideo").src = car.carvideo;
    document.getElementById("carvideo").load();
    
    
    for (let i = 0; i < car.features.length; i++) {
    document.getElementById(`feature${i + 1}-title`).textContent =
        car.features[i][0];

    document.getElementById(`feature${i + 1}-text`).textContent =
        car.features[i][1];
}


    // document.getElementById("feature1-title").textContent = car.features.feature1title;
    // document.getElementById("feature1-text").textContent = car.features.feature1text;
    // document.getElementById("feature2-title").textContent = car.features.feature2title;
    // document.getElementById("feature2-text").textContent = car.features.feature2text;
    // document.getElementById("feature3-title").textContent = car.features.feature3title;
    // document.getElementById("feature3-text").textContent = car.features.feature3text;
    // document.getElementById("feature4-title").textContent = car.features.feature4title;
    // document.getElementById("feature4-text").textContent = car.features.feature4text;
    // document.getElementById("feature5-title").textContent = car.features.feature5title;
    // document.getElementById("feature5-text").textContent = car.features.feature5text;
    // document.getElementById("feature6-title").textContent = car.features.feature6title;
    // document.getElementById("feature6-text").textContent = car.features.feature6text;

}