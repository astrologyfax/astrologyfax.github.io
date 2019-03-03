$(document).ready(function() {
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    		$('#fact-body').css("font-size", "25px");
		$('#fact-body').css("width", "calc(60% - 30px)");
		$('#news').css("width", "40%");
	}
	var y = new Date().getFullYear();
	var m = new Date().getMonth();
	var d = new Date().getDate();
	var h = new Date().getHours();
        var m = new Date().getMinutes();
	if (d == 18 && m == 1 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: The longest astrological drought at 206 years and counting is currently being endured by Aries. Thomas Jefferson (April 13) is the last and only elected president born under the sign of The Ram, when he was reelected in 1804.";
		document.getElementById("fact-source").href = "http://editions.lib.umn.edu/smartpolitics/2010/02/15/presidents-day-special-the-ast/";
		document.getElementById("new1").textContent = "It's President's Day.";
	}
	if (d == 19 && m == 1 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: Pisces hate when they get a text saying \"Wussup stranger\"... Like for real!!! phones work both ways";
		document.getElementById("fact-source").href = "https://21facts.net/interesting-facts-about-pisces/";
		document.getElementById("new1").textContent = "Happy Birthday Michelle!";
	}
	if (d == 20 && m == 1 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: Although astrology was never embraced by Christianity, that didn’t stop Pope Sixtus IV from becoming the first pope to draw and interpret a horoscope for himself in the 15th century.";
		document.getElementById("fact-source").href = "https://bestlifeonline.com/crazy-horoscope-facts/";
		document.getElementById("new1").textContent = "Nothing for today. How are you?";
	}
	if (d == 21 && m == 1 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: You are probably used to the Western zodiac, and maybe know your year in the Chinese zodiac, but horoscopes are huge in India, where vedic astrology has been practiced for over 2,000 years.";
		document.getElementById("fact-source").href = "https://bestlifeonline.com/crazy-horoscope-facts/";
		document.getElementById("new1").textContent = "New Day, new fact.";
	}
	if (d == 22 && m == 1 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: There are 6,000 – 8,000 professional astrologers in the USA.";
		document.getElementById("fact-source").href = "https://www.wishingmoon.com/interesting-facts-about-astrology/";
		document.getElementById("new1").textContent = "That's too many astrologers.";
	}
	if (d == 23 && m == 1 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: What you probably assume is your only sign, based only on your date of birth, is actually your sun sign. But there are several others, including ones for each planet and 12 different “house cusps,” all of which you will discover once a chart has been made for you.";
		document.getElementById("fact-source").href = "https://www.littlethings.com/astrology-facts/1";
		document.getElementById("new1").textContent = "oof?";
	}
	if (d == 24 && m == 1 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: Astrology dates back to around 3000 BC Mesopotamia.";
		document.getElementById("fact-source").href = "https://consciousreminder.com/2017/07/10/9-fascinating-facts-astrology-thatll-make-think-twice/";
		document.getElementById("new1").textContent = "it's a day";
	}
	if (d == 25 && m == 1 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: Former White House Chief of Staff Donald Regan said: \"It's common knowledge that a large percentage of Wall Street brokers use astrology.\"";
		document.getElementById("fact-source").href = "https://www.telegraph.co.uk/culture/3573123/Twenty-facts-about-astrology.html";
		document.getElementById("new1").textContent = "hi";
	}
	if (d == 26 && m == 1 && y == 2019 && h == 9 && m == 13) {
		document.getElementById("fact").textContent = "Verifiable Fact: Astrologers predicted Obama's victory. I mean, they had a 50/50 chance of being right, but it's still pretty neat. The prediction was made at the United Astrology Conference, which is the largest gathering of astrologers and meets every four years. They also predict natural disasters, explore the impact of lunar cycles on the stock market, and use planetary charts to find a job.";
		document.getElementById("fact-source").href = "https://www.onlygood.tv/8-facts-about-astrology-you-want-to-know-2078279126.html";
		document.getElementById("new1").textContent = "9:13";
	}
	if (d == 27 && m == 1 && y == 2019 && h == 9 && m == 13) {
		document.getElementById("fact").textContent = "Verifiable Fact: The first areas of the world that astrology spread to were China, India and Greece. Each culture infused the basic Babylonian astrological belief structure with its own myths, legends and interpretations. In Greece, many of the characters from ancient Greek mythology were combined with the stars to give their astrology its own local style. The same was true for India and China where local religion and superstition was combined with astrology to give it more meaning to the local population.";
		document.getElementById("fact-source").href = "https://www.mydailymoment.com/horoscope/astrology/7_interesting_facts_about_the_history_of_astrology.php";
		document.getElementById("new1").textContent = "Wow, you made it this time?";
	}
	if (d == 2 && m == 2 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: In ancient Greek mythology, Zeus transformed himself into a bull in order to secretly seduce the mortal Europa. Once he got her attention, he carried her on his back to Crete, where he revealed himself as Zeus. Out of their affair, three sons were born, one of which became the most famous king of Crete. Zeus later paid his respect to the bull by placing it forever in the night sky. The bull seen in the constellation was later called Taurus because that is the Latin word for bull.";
		document.getElementById("fact-source").href = "https://www.theodysseyonline.com/random-fun-facts-about-zodiac-signs";
		document.getElementById("new1").textContent = "What a guy";
	}
	if (d == 3 && m == 2 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: You must have heard about the four elements – Earth, Air, Water, and Fire. But besides these, there are other star signs having qualities, like Mutable, Fixed, and Cardinal. The Cardinal signs are Libra, Capricorn, Aries, and Cancer, which are linked to the four seasons during the year. There are other fixed signs, such as Scorpio, Leo, Taurus, and Aquarius that are considered to be steady, stubborn, and strong. The other mutable signs are Virgo, Pisces, Gemini, and Sagittarius that are linked to communication and high flexibility. Astrology follows the zodiac based on these signs";
		document.getElementById("fact-source").href = "https://www.akashvaani.com/blog/myths-and-facts-about-astrology";
		document.getElementById("new1").textContent = "Pretty kool, right?";
	}
	if (d == 4 && m == 2 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: A lot of people also think that an astrologer can change their life or destiny. This is not possible. Think about it this way: An astrologer has not created your destiny, so he cannot change it. It’s actually you—your subconscious and accumulated karma—who has created your destiny. In life, you get the chance to edit it just a little bit through choices and decisions. You have created it, so you have some power to control it, but you cannot change the whole thing.";
		document.getElementById("fact-source").href = "https://www.sonima.com/meditation/mindful-living/astrology-myths/";
		document.getElementById("new1").textContent = "Wow, that sucks.";
	}
	if (d == 11 && m == 5 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: \"Alice\" is an Aquarius";
		document.getElementById("fact-source").href = "https://www.instagram.com/noraabravos/";
		document.getElementById("new1").textContent = "Happy Birthday Alice!";
	}
	if (d == 2 && m == 6 && y == 2019) {
		document.getElementById("fact").textContent = "Verifiable Fact: An analysis of data from the FBI found that Cancers are the most frequently arrested of all the zodiac signs, and their crimes are often more serious too.";
		document.getElementById("fact-source").href = "https://bestlifeonline.com/crazy-horoscope-facts/";
		document.getElementById("new1").textContent = "Happy Birthday Ryan!";
	}
	if (d == 30 && m == 6 && y == 2019) {
		document.getElementById("fact").textContent = "No one has ever been born on July 30th. They have a";
		document.getElementById("fact-source").href = "https://www.instagram.com/alicegetm/";
		document.getElementById("new1").textContent = "Happy Birthday Nora!";
	}
});
