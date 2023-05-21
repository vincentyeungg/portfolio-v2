// stores all static images for projects, need to implement better way next time
// uses key value to determine which array of photos to load in the current folder

let imagePaths = {};
let projs_prepend = "/assets/images/projects/";
let bg_prepend = "/assets/images/background/"

imagePaths.poker_bot = [
    projs_prepend + "discord-bot/game-bot.png",
    projs_prepend + "discord-bot/game-bot.png",
    projs_prepend + "discord-bot/game-bot.png",
];

imagePaths.menu_creator = [
    projs_prepend + "menu/home.png",
    projs_prepend + "menu/login.png",
    projs_prepend + "menu/newitem.png",
    projs_prepend + "menu/removeitem.png",
    projs_prepend + "menu/signup.png",
    projs_prepend + "menu/updateitem.png",
];

imagePaths.nba_db = [
    projs_prepend + "nba-db/code.png",
    projs_prepend + "nba-db/er-diagram.png",
    projs_prepend + "nba-db/query1.png",
    projs_prepend + "nba-db/query2.png",
]; 

imagePaths.yoga_instructor = [
    projs_prepend + "yoga/yoga-home.png",
    projs_prepend + "yoga/yoga-instructions.png",
    projs_prepend + "yoga/yoga-mountain.png",
    projs_prepend + "yoga/yoga-mountain2.png",
    projs_prepend + "yoga/yoga-tree.png",
    projs_prepend + "yoga/yoga-warrior.png",
];

imagePaths.aboutme = bg_prepend + "profilepic.jpeg";

imagePaths.contactme = bg_prepend + "contactMe-background.jpg";

imagePaths.experience = bg_prepend + "experience-img.jpg";

imagePaths.intro = bg_prepend + "intro-2.jpg";

imagePaths.skills = bg_prepend + "skills-background.jpg";

export default imagePaths;