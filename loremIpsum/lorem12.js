const text = [
    `The bat smashed into my face with such force that it crushed my
    nose into a distorted U-shape. The collision sent the soft tissue of my
    brain slamming into the inside of my skull. Immediately, a wave of
    swelling surged throughout my head. In a fraction of a second, I had a
    broken nose, multiple skull fractures, and two shattered eye sockets.
    When I opened my eyes, I saw people staring at me and running
    over to help. I looked down and noticed spots of red on my clothes.
    One of my classmates took the shirt off his back and handed it to me. I
    used it to plug the stream of blood rushing from my broken nose.
    Shocked and confused, I was unaware of how seriously I had been
    injured`,
    `My teacher looped his arm around my shoulder and we began the
    long walk to the nurse’s office: across the field, down the hill, and back
    into school. Random hands touched my sides, holding me upright. We
    took our time and walked slowly. Nobody realized that every minute
    mattered.That is the last question I remember. My body was unable to handle
    the rapid swelling in my brain and I lost consciousness before the
    ambulance arrived. Minutes later, I was carried out of school and taken
    to the local hospital.Shortly after arriving, my body began shutting down. I struggled
    with basic functions like swallowing and breathing. I had my first
    seizure of the day. Then I stopped breathing entirely. As the doctors
    hurried to supply me with oxygen, they also decided the local hospital
    was unequipped to handle the situation and ordered a helicopter to fly
    me to a larger hospital in Cincinnati.`,
    `I was rolled out of the emergency room doors and toward the
    helipad across the street. The stretcher rattled on a bumpy sidewalk as
    one nurse pushed me along while another pumped each breath into me
    by hand. My mother, who had arrived at the hospital a few moments
    before, climbed into the helicopter beside me. I remained unconscious
    and unable to breathe on my own as she held my hand during the
    flight.While my mother rode with me in the helicopter, my father went
    home to check on my brother and sister and break the news to them.
    He choked back tears as he explained to my sister that he would miss
    her eighth-grade graduation ceremony that night. After passing my
    siblings off to family and friends, he drove to Cincinnati to meet my
    mother.`,
    `When my mom and I landed on the roof of the hospital, a team of
    nearly twenty doctors and nurses sprinted onto the helipad and
    wheeled me into the trauma unit. By this time, the swelling in my brain
    had become so severe that I was having repeated post-traumatic
    seizures. My broken bones needed to be fixed, but I was in no
    condition to undergo surgery. After yet another seizure—my third of
    the day—I was put into a medically induced coma and placed on a
    ventilator While I slipped into a coma, the hospital sent a priest and a social
    worker to comfort my parents. It was the same priest who had met
    with them a decade earlier on the evening they found out my sister had
    cancer.`,
    `As day faded into night, a series of machines kept me alive. My
    parents slept restlessly on a hospital mattress—one moment they
    would collapse from fatigue, the next they would be wide awake with
    worry. My mother would tell me later, “It was one of the worst nights
    I have ever had.Mercifully, by the next morning my breathing had rebounded to the
    point where the doctors felt comfortable releasing me from the coma.
    When I finally regained consciousness, I discovered that I had lost my
    ability to smell. As a test, a nurse asked me to blow my nose and sniff
    an apple juice box. My sense of smell returned, but—to everyone’s
    surprise—the act of blowing my nose forced air through the fractures
    in my eye socket and pushed my left eye outward. My eyeball bulged
    out of the socket, held precariously in place by my eyelid and the optic
    nerve attaching my eye to my brain.`,
    `The ophthalmologist said my eye would gradually slide back into
    place as the air seeped out, but it was hard to tell how long this would
    take. I was scheduled for surgery one week later, which would allow me
    some additional time to heal. I looked like I had been on the wrong end
    of a boxing match, but I was cleared to leave the hospital. I returned
    home with a broken nose, half a dozen facial fractures, and a bulging
    left eye.`,
    `The following months were hard. It felt like everything in my life
    was on pause. I had double vision for weeks; I literally couldn’t see
    straight. It took more than a month, but my eyeball did eventually
    return to its normal location. Between the seizures and my visionproblems, it was eight months before I could drive a car again. At
    physical therapy, I practiced basic motor patterns like walking in a
    straight line. I was determined not to let my injury get me down, but
    there were more than a few moments when I felt depressed and
    overwhelmed.`,
    `I became painfully aware of how far I had to go when I returned to
    the baseball field one year later. Baseball had always been a major part
    of my life. My dad had played minor league baseball for the St. Louis
    Cardinals, and I had a dream of playing professionally, too. After
    months of rehabilitation, what I wanted more than anything was to get
    back on the field.But my return to baseball was not smooth. When the season rolled
    around, I was the only junior to be cut from the varsity baseball team. I
    was sent down to play with the sophomores on junior varsity. I had
    been playing since age four, and for someone who had spent so much
    time and effort on the sport, getting cut was humiliating. I vividly
    remember the day it happened. I sat in my car and cried as I flipped
    through the radio, desperately searching for a song that would make
    me feel better.`,
    `A habit is a routine or behavior that is performed regularly—and, in
    many cases, automatically. As each semester passed, I accumulated
    small but consistent habits that ultimately led to results that were
    unimaginable to me when I started. For example, for the first time in
    my life, I made it a habit to lift weights multiple times per week, and in
    the years that followed, my six-foot-four-inch frame bulked up from afeatherweight 170 to a lean 200 pounds.
    When my sophomore season arrived, I earned a starting role on the pitching staff. By my junior year, 
    I was voted team captain and at the end of the season, I was selected for the all-conference team. But it was
    not until my senior season that my sleep habits, study habits, and
    strength-training habits really began to pay off.Six years after I had been hit in the  
    face with a baseball bat, flown to the hospital, and placed into a coma, 
    I was selected as the top male athlete at Denison University and named to the
    ESPN Academic All-America Team—an honor given to just thirty-three players across the
    country. By the time I graduated, I was listed in the school record
    books in eight different categories. That same year, I was awarded the
    university’s highest academic honor, the President’s Medal.`
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e){
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);

    //empty
    //-1
    //>9
    if (isNaN(value) || value < 0 || value > 9){
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    }
    else{
        let tempText = text.slice(0, value);
        tempText = tempText
            .map(function(item){
                return `<p class="result">${item}</p>`;
            })
            .join("");
        result.innerHTML = tempText


    }
});