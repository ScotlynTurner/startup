#!/usr/bin/env node

const SPACE_FACTS = [
    "The highest mountain in the solar system is on Mars, named Olympus Mons.",
    "Space is not completely empty; it contains cosmic dust particles.",
    "The largest known asteroid is Ceres, located in the asteroid belt.",
    "A day on Jupiter is the shortest among all planets, lasting less than 10 hours.",
    "The Voyager 1 spacecraft has entered interstellar space, beyond the influence of the Sun.",
    "The Moon is gradually drifting away from Earth at a rate of about 3.8 centimeters per year.",
    "Pluto's orbit is so eccentric that it sometimes comes closer to the Sun than Neptune.",
    "Dark matter, an invisible substance, makes up about 85% of the total mass of the universe.",
    "The nearest galaxy cluster to the Milky Way is the Virgo Cluster.",
    "Quasars are incredibly bright and distant celestial objects powered by supermassive black holes.",
    "The concept of a wormhole is a hypothetical shortcut through spacetime, potentially connecting distant parts of the universe.",
    "Jupiter's moon Io is the most volcanically active object in the solar system.",
    "The space between stars in a galaxy is not empty; it contains gas, dust, and stellar remnants.",
    "The Great Attractor is a gravitational anomaly affecting the motion of galaxies in our cosmic neighborhood.",
    "The cosmic microwave background radiation is residual heat from the Big Bang, observable throughout the universe.",
    "The asteroid belt between Mars and Jupiter is not as densely packed as often depicted in science fiction.",
    "The James Webb Space Telescope is set to be the most powerful telescope ever launched, exploring the universe in infrared wavelengths.",
    "Exoplanets, planets outside our solar system, are being discovered at an accelerating rate, hinting at the possibility of life beyond Earth.",
    "The Milky Way is home to over 100 billion stars.",
    "Neutron stars can spin up to 600 times per second.",
    "Venus rotates backward, opposite to most planets.",
    "Jupiter's Great Red Spot is a storm that has raged for centuries.",
    "The Sun makes a complete rotation every 25 days.",
    "Black holes can warp space and time around them.",
    "Saturn's rings are made mostly of ice particles.",
    "There are more possible iterations of a game of chess than atoms in the observable universe.",
    "A day on Mercury is longer than its year.",
    "Astronauts' spines can elongate in microgravity.",
    "Mars has the tallest volcano in the solar system, Olympus Mons.",
    "The largest volcano in the universe is on Mars's neighbor, Venus.",
    "A teaspoon of a neutron star would weigh six billion tons on Earth.",
    "The Moon is gradually moving away from Earth.",
    "Uranus rotates on its side, making it unique in the solar system.",
    "A day on Jupiter is less than 10 hours long.",
    "There are more moons in our solar system than planets.",
    "The Hubble Space Telescope can see 10,000 galaxies in a single glance.",
    "Astronauts experience 'space fever' due to their brains adapting to microgravity.",
    "The Sun contains 99.86% of the mass in the solar system.",
    "The International Space Station (ISS) travels at about 28,000 kilometers per hour.",
    "A day on Pluto is about the same length as a day on Earth.",
    "The largest volcano in our solar system is on Mars.",
    "Voyager 1 is the farthest human-made object from Earth.",
    "A year on Venus is shorter than its day.",
    "The first woman in space was Valentina Tereshkova from the Soviet Union in 1963.",
    "The sound can't travel through space because it needs a medium like air to propagate.",
    "One million Earths could fit inside the Sun.",
    "Jupiter has the strongest magnetic field of all the planets.",
    "Astronauts witness around 16 sunrises and sunsets each day in space.",
    "The largest asteroid in the asteroid belt is Ceres.",
    "The temperature on the Moon ranges from extremely hot to extremely cold.",
    "The closest galaxy to us is the Andromeda Galaxy.",
    "Pluto is smaller than some moons, including Ganymede and Titan.",
    "Halley's Comet returns to the inner solar system roughly every 76 years.",
    "The largest known star, UY Scuti, is over 1,700 times the size of the Sun.",
    "Astronauts wear spacesuits with built-in cooling systems to survive in space.",
    "The Oort Cloud is a vast region containing trillions of icy bodies, where comets originate.",
    "The Great Wall of China is not visible from space with the naked eye.",
    "The red color of Mars is due to iron oxide, or rust, on its surface.",
    "Space is not completely empty; it contains a low density of particles.",
    "The first living creatures in space were fruit flies aboard a U.S. V-2 rocket in 1947.",
    "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
    "The universe is expanding, and galaxies are moving away from each other.",
    "The core temperature of the Sun is about 15 million degrees Celsius.",
    "Astronauts' height can change in space due to spinal elongation.",
    "The concept of black holes was first proposed in the 18th century by John Michell.",
    "The farthest galaxy discovered is GN-z11, approximately 13.4 billion light-years away.",
    "The Earth's atmosphere is not perfectly transparent; it absorbs some wavelengths of light.",
    "Mars has the largest volcano in the solar system, Olympus Mons.",
    "The Sun will eventually expand into a red giant, consuming Mercury and Venus.",
    "A day on the dwarf planet Haumea lasts only 4 hours.",
    "The hottest planet in our solar system is Venus.",
    "The first human on the Moon was Neil Armstrong in 1969.",
    "There are more stars in the universe than grains of sand on Earth.",
    "The largest known galaxy, IC 1101, is over 6 million light-years across.",
    "The space between galaxies is not completely empty; it contains intergalactic gas.",
    "The first artificial satellite, Sputnik 1, was launched by the Soviet Union in 1957.",
    "The smallest planet in our solar system is Mercury.",
    "The concept of time dilation occurs in strong gravitational fields, as predicted by Einstein.",
    "A day on Venus is longer than a year on Venus.",
    "The Sun loses about 4 million tons of mass every second due to nuclear fusion.",
    "There is no sound in space because there is no air to carry sound waves.",
    "The coldest place in the universe is the Boomerang Nebula, at -272.15 degrees Celsius.",
    "The most common element in the universe is hydrogen.",
    "The Crab Nebula is the remnant of a supernova observed by Chinese astronomers in 1054.",
    "Astronauts experience 'space dust,' tiny particles that can damage spacecraft.",
    "The largest volcano on Earth is Mauna Loa in Hawaii.",
    "The International Space Station has been continuously inhabited since November 2000.",
    "Jupiter has more mass than all the other planets in the solar system combined.",
    "The Great Wall of China is not visible from the Moon without aid.",
    "Mars has the longest valley in the solar system, Valles Marineris.",
    "The closest star system to Earth is Alpha Centauri.",
    "Saturn's moon Titan has a thick atmosphere and lakes of liquid methane and ethane.",
    "The universe is estimated to be 13.8 billion years old.",
    "Astronauts experience 'space sickness' during the first few days in space.",
    "The speed of light is approximately 299,792 kilometers per second.",
    "Space is not completely silent; it contains faint background radiation called the cosmic microwave background.",
    "The largest volcano on Mars, Olympus Mons, is three times the height of Mount Everest.",
    "The Voyager probes carry a Golden Record with sounds and images representing Earth.",
    "There are more potential chess moves than atoms in the observable universe.",
    "The edge of the observable universe is about 46.5 billion light-years away.",
    `Space is incomprehensibly vast. The observable universe is estimated to be around 93 billion light-years in diameter.`,
    `The Milky Way, our home galaxy, contains approximately 200 billion stars.`,
    `Stars have a lifecycle, with larger stars burning out faster than smaller ones. Our sun, a medium-sized star, has an estimated lifespan of about 10 billion years.`,
    `Jupiter's Great Red Spot is a gigantic storm that has been raging for at least 350 years.`,
    `Footprints left by Apollo astronauts on the Moon are expected to last for at least 10 million years, as there is no wind or water to erode them.`,
    `The first human-made object to reach space was the Soviet satellite Sputnik 1, launched on October 4, 1957.`,
    `The Eagle Nebula's Pillars of Creation, a star-forming region, is located about 6,500 light-years from Earth.`,
    `There are over 500,000 pieces of space debris, posing a threat to satellites and spacecraft.`,
    `The fastest spacecraft ever launched was the Parker Solar Probe, which can reach speeds of up to 430,000 miles per hour.`,
    `Beyond Neptune lies the Kuiper Belt, a region of icy objects, including Pluto.`,
    `The habitable zone around a star, where conditions might support life as we know it, is often called the "Goldilocks Zone."`,
    `The Moon is unusually large compared to Earth's size. No other planet in our solar system has a moon that's such a significant fraction of its own size.`,
    `Beyond the Kuiper Belt lies the hypothetical Oort Cloud, a vast reservoir of icy objects.`,
    `The Sun releases an astonishing amount of energy, equivalent to about 600 million tons of nuclear explosions every second.`,
    `The Boomerang Nebula has the record for the lowest natural temperature ever recorded, about one degree Kelvin (-272.15°C).`,
    `Sirius, the brightest star in the night sky, is more than 20 times brighter than the Sun.`,
    `NASA's Pioneer 10 and 11 were the first spacecraft to travel through the asteroid belt and make direct observations of Jupiter.`,
    `In the Carina Nebula, massive stars are born, live, and die in a spectacular display of cosmic proportions.`,
    `Galaxies in our vicinity are moving toward a gravitational focal point called the Great Attractor.`,
    `In the vacuum of space, certain metals can bond together due to a phenomenon called "cold welding."`,
    `Mars is home to Olympus Mons, the largest volcano in the solar system, about three times the height of Mount Everest.`,
    `"Space Oddity" by David Bowie was the first music video ever filmed in space.`,
    `Light travels at an incredible speed of about 299,792 kilometers per second (186,282 miles per second).`,
    `Moonquakes, caused by the gravitational pull of Earth, make the Moon "ring" like a bell.`,
    `Voyager 1, launched in 1977, is the farthest human-made object from Earth, currently exploring interstellar space.`,
    `The Hubble Space Telescope, launched in 1990, has provided some of the most breathtaking images of distant galaxies and nebulae.`,
    `The cost to send one pound of payload into space is around $10,000.`,
    `The Cosmic Microwave Background is the afterglow of the Big Bang and is visible in every direction of the sky.`,
    `Virgin Galactic and Blue Origin are private companies working to make space tourism a reality.`,
    `The Sun is composed mainly of hydrogen (about 74.9%) and helium (about 23.8%).`,
    `The Space Age officially began on October 4, 1957, with the launch of Sputnik 1. The Apollo program put the first humans on the Moon.`,
    `One AU is the average distance between Earth and the Sun, about 93 million miles (150 million kilometers).`,
    `Jupiter is the largest planet in our solar system and is more massive than all the other planets combined.`,
    `Many technologies originally developed for space exploration have found applications in everyday life, including memory foam, scratch-resistant lenses, and cordless vacuums.`,
    `Neptune, like Jupiter, also has a Great Dark Spot, a storm system that comes and goes in its atmosphere.`,
    `The boundary where the Sun's influence ends is called the heliopause, marking the edge of our solar system.`,
    `Jupiter rotates on its axis so quickly that one day on Jupiter is only about 9.9 hours long.`,
    `Proxima Centauri b is the closest known exoplanet to our solar system and orbits the star Proxima Centauri, part of the Alpha Centauri star system.`,
    `Apart from NASA, other major space agencies include ESA (European Space Agency), Roscosmos (Russia), CNSA (China), and ISRO (India).`,
    `The European Space Agency is developing a space debris collector called ClearSpace-1 to remove defunct satellites from orbit.`,
    `The ultimate fate of the universe depends on its density and the strength of dark energy. It could continue expanding forever or end in a "Big Freeze" or a "Big Rip."`,
    `Sputnik 1, launched by the Soviet Union, was the first artificial satellite to orbit Earth.`,
    `As of now, astronomers have discovered over 4,000 exoplanets in our galaxy.`,
    `The ozone layer in Earth's atmosphere protects us from harmful ultraviolet (UV) radiation.`,
    `The longest spacewalk in history lasted 8 hours and 56 minutes, performed by NASA astronaut Susan Helms.`,
    `Uranus is the coldest planet in our solar system, with temperatures dropping as low as -224°C (-371°F).`,
    `The Sun's magnetic field flips approximately every 11 years in what is known as the solar cycle.`,
    `Valentina Tereshkova, a Soviet cosmonaut, was the first woman to travel to space on June 16, 1963.`,
    `The James Webb Space Telescope (JWST) is set to be the most powerful space telescope, designed to study exoplanets, stars, and galaxies.`,
    `Ganymede, a moon of Jupiter, is the largest moon in our solar system, even bigger than the planet Mercury.`,
    `In the Sun's core, nuclear fusion converts hydrogen into helium, releasing enormous amounts of energy.`,
    `Venus holds the record for the hottest planet, with surface temperatures hot enough to melt lead.`,
    `Alan Shepard was the first American astronaut to journey to space on May 5, 1961.`,
    `Earth has a magnetic field generated by its iron core, protecting us from the solar wind.`,
    `The Challenger Deep in the Mariana Trench is the deepest known point in Earth's oceans, reaching a depth of about 36,070 feet (10,994 meters).`,
    `The closest known black hole to Earth is V616 Monocerotis, about 3,000 light-years away.`,
    `In the constellation Sagittarius, about 26,000 light-years away, lies the supermassive black hole at the center of our galaxy.`,
    `There are over 2,500 active satellites orbiting Earth, along with countless defunct satellites and space debris.`,
    `The Voyager 1 and Voyager 2 spacecraft each carry a golden record containing sounds and images representing Earth, intended for any potential extraterrestrial civilization that might find them.`,
    `The Vredefort Dome in South Africa is the world's largest verified impact crater, approximately 300 kilometers (186 miles) in diameter.`,
    `The changing appearance of the Moon is due to its different phases as it orbits Earth.`,
    `There are over 100 billion stars in the Milky Way galaxy alone.`,
    `Mars gets its reddish hue from iron oxide, or rust, on its surface.`,
    `A teaspoon of neutron star material would weigh about 10 million tons on Earth.`,
    `Mercury rotates so slowly that one day on Mercury is about 176 Earth days.`,
    `Sound cannot travel in the vacuum of space, as it requires a medium like air or water to propagate.`,
    `Eugene Cernan, commander of Apollo 17, was the last person to walk on the Moon in December 1972.`,
    `The story that NASA spent millions to develop a pen that can write in space while the Soviet Union used pencils is a myth. Both countries eventually adopted space pens for their astronauts.`,
    `Jupiter experiences helium rain, where the helium in its atmosphere condenses into droplets as it descends towards the planet's core.`,
    `The Chicxulub impact, which occurred about 66 million years ago, is believed to have caused the mass extinction event that wiped out the dinosaurs.`,
    `Olympus Mons on Mars is the tallest mountain in the solar system, rising about 13.6 miles (22 kilometers) high.`,
    `The European Space Agency's Rosetta mission successfully landed the Philae spacecraft on comet 67P/Churyumov-Gerasimenko.`,
    `Earth's magnetosphere contains the Van Allen radiation belts, which trap charged particles from the solar wind.`,
    `Saturn experiences periodic storms called the Great White Spots, lasting for several months and spanning thousands of miles.`,
    `The geosynchronous graveyard is a region where defunct satellites are moved to avoid collision with active satellites.`,
    `NASA's Space Shuttle program operated from 1981 to 2011, with a total of 135 missions.`,
    `Apollo 13 was a near-disastrous mission that safely returned to Earth despite a major onboard explosion.`,
    `The Hubble Space Telescope captured the iconic Pillars of Creation in the Eagle Nebula in three dimensions.`,
    `Russian cosmonaut Alexei Leonov performed the first-ever spacewalk on March 18, 1965.`,
    `Mars experiences massive dust storms that can engulf the entire planet for months.`,
    `Valeri Polyakov holds the record for the longest single spaceflight, spending 437 days aboard the Russian space station Mir.`,
    `Scientists have achieved temperatures within a few billionths of a degree above absolute zero in laboratories.`,
    `A transit of Venus, where Venus passes directly between Earth and the Sun, occurs in pairs separated by about eight years and then not again for over a century.`,
    `NASA's New Horizons spacecraft flew past Pluto, making it the farthest explored planetary body from Earth.`,
    `Solar flares are explosive releases of energy on the Sun's surface, producing bursts of X-rays and charged particles.`,
    `Spacecraft and defunct satellites eventually re-enter Earth's atmosphere and burn up, though some larger pieces may survive and fall into the ocean.`,
    `To escape Earth's gravity and reach space, a spacecraft must achieve a velocity of about 11.2 kilometers per second (25,000 mph).`,
    `Auroras, or the Northern and Southern Lights, are beautiful light displays caused by solar wind interacting with Earth's magnetic field.`,
    `Space suits have come a long way from the first ones used in the 1960s, now incorporating advanced materials and life support systems.`,
    `The Kola Superdeep Borehole in Russia is the deepest artificial point on Earth, reaching a depth of about 7.5 miles (12 kilometers).`,
    `Meteorite impacts have shaped Earth's history, creating features like the Barringer Crater in Arizona.`,
    `Black holes warp space-time to an extreme degree, causing light and matter to behave in unusual ways near their event horizons.`,
    `Geomagnetic storms can disrupt power grids, satellite communications, and navigation systems on Earth.`,
    `PSR J1748-2446ad, a neutron star, rotates at an astonishing 716 times per second.`,
    `The Moon's surface temperatures can plummet to -153°C (-243°F) during its night.`,
    `Sally Ride made history on June 18, 1983, as the first American woman to fly in space.`,
    `Saturn's mesmerizing ring system is composed mostly of ice particles.`,
    `In the microgravity environment of the International Space Station, water behaves like a floating bubble, creating the "space fountain" effect.`,
    `The Outer Space Treaty, signed in 1967, established principles governing the exploration and use of outer space.`,
    `The search for extraterrestrial life continues with missions like the Mars rovers and the study of exoplanets in the habitable zone.`,
];

const generateColor = () => {
    return [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
    ];
};

const getLuminance = (color) => {
    const luminance =
        (0.299 * color[0] + 0.587 * color[1] + 0.114 * color[2]) / 255;
    return luminance > 0.5 ? "Light" : "Dark";
};

const printColouredFact = () => {
    const COLOR = generateColor();
    const resetCode = "\x1b[0m";
    const textColor =
        getLuminance(COLOR) === "Light" ? [0, 0, 0] : [255, 255, 255];
    const textColorCode = `\x1b[38;2;${textColor[0]};${textColor[1]};${textColor[2]}m`;
    const bgColorCode = `\x1b[48;2;${COLOR[0]};${COLOR[1]};${COLOR[2]}m`;
    const terminalWidth = process.stdout.columns;
    let fact = SPACE_FACTS[Math.floor(Math.random() * SPACE_FACTS.length)];

    if (
        fact.length > terminalWidth &&
        fact[terminalWidth - 1] !== " " &&
        fact[terminalWidth] !== " "
    ) {
        let index = terminalWidth - 2;
        while (fact[index] !== " ") {
            index--;
        }
        fact =
            fact.substring(0, index + 1) +
            " ".repeat(terminalWidth - index - 1) +
            fact.substring(index + 1);
    }

    console.log(
        `${bgColorCode}${textColorCode}${fact}${" ".repeat(
            fact.length % terminalWidth
                ? terminalWidth - (fact.length % terminalWidth)
                : 0
        )}${resetCode}`
    );
};

printColouredFact();

module.exports = printColouredFact;
