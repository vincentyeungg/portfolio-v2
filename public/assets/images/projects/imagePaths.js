// stores all static images for projects, need to implement better way next time
// uses key value to determine which array of photos to load in the current folder

let imagePaths = {};
let prepend = "/assets/images/projects/";

imagePaths.discord_bot = [
    prepend + "discord-bot/game-bot.png",
];

imagePaths.menu_creator = [
    prepend +  "menu/home.png",
    prepend + "menu/login.png",
    prepend + "menu/newitem.png",
    prepend + "menu/removeitem.png",
    prepend +  "menu/signup.png",
    prepend +  "menu/updateitem.png",
];

imagePaths.nba_db = [
    prepend +  "nba-db/code.png",
    prepend +  "nba-db/er-diagram.png",
    prepend +  "nba-db/query1.png",
    prepend +  "nba-db/query2.png",
]; 

imagePaths.yoga_instructor = [
    prepend + "yoga/yoga-home.png",
    prepend +  "yoga/yoga-instructions.png",
    prepend +  "yoga/yoga-mountain.png",
    prepend +  "yoga/yoga-mountain2.png",
    prepend +  "yoga/yoga-tree.png",
    prepend +  "yoga/yoga-warrior.png",
];

imagePaths.aboutme = "profilepic.jpeg";

imagePaths.contactme = "contactMe-background.jpg";

imagePaths.experience = "experience-img.jpg";

imagePaths.intro = "intro-2.jpg";

export default imagePaths;