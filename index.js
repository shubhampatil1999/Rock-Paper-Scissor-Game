let users = 0;
let coms = 0;

let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");
let uscore = document.querySelector("#user-score");
let cscore = document.querySelector("#computer-score");

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userin = choice.getAttribute("id");
        playgame(userin);
    });
});

const playgame = (choice) => {
    const computer = ["rock", "paper", "scissor"];
    let comchoice = Math.floor(Math.random() * 3);
    gamelogic(computer[comchoice], choice);
}

const gamelogic = (com, user) => {
    let userwin;
    if (com === user) {
        draw();
    } else {
        userwin = true;
        if (user == "rock") {
            userwin = (com == "paper" ? false : true);
        } else if (user == "paper") {
            userwin = (com == "scissor" ? false : true);
        } else if (user == "scissor") {
            userwin = (com == "rock" ? false : true);
        }
        showwin(userwin, user, com);
    }
};

const showwin = (winner, user, com) => {
    if (winner) {
        users++;
        uscore.innerText = users;
        // console.log(`user Win`);
        msg.innerText = (`You Win. Your ${user} Beats ${com}`);
        msg.style.backgroundColor = "green";
    } else {
        coms++;
        cscore.innerText = coms;
        // console.log(`computer win`);
        msg.innerText = (`You Lost! ${com} Beats Your ${user}`);
        msg.style.backgroundColor = "red";
    }
}

const draw = () => {
    msg.innerText = ("match Draw...");
    msg.style.backgroundColor = "darkslategray";
}
