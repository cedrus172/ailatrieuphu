
const START_TIME = 30;
const END_TIME = 0;
var currentTime = START_TIME;
var rewardEle = $('#rewardList');
var questionTitle = $('#questionTitle');
var countDownTime = $('.countDownTime');
var bonusInfo = $('.bonusInfo');
var optionA = $('#optionA');
var optionB = $('#optionB');
var optionC = $('#optionC');
var optionD = $('#optionD');
var countDown;

var rewardList = new RewardList();
var player = new Player(rewardList);
player.createListQuestion();
rewardList.renderRewardList(rewardEle);

const clickOption = (option) => {
    if (player.isLose) {
        sendIsLose();
        return;
    }
    clearCountDown();
    let optionSelected = parseInt(option.path[0].dataset.option);
    if (player.selectOption(optionSelected)) {
        if (player.currentLevel <= 15) {
            sendAskAlert("Bạn đã trả lời đúng , có muốn tiếp tục không ?", "Chúc mừng", "warning", function () {
                startCountDown();
                loadQuestion(player.getCurrentQuestion());
            });


        }
        else
            sendAskAlert("Bạn đã thua, có muốn chơi lại không ?", "Thua cuộc", "warning", function () {
                player.resetLevel();
            });

    } else
        sendIsLose();
}

sendIsLose = (isLose = true) => {
    let title = isLose ? 'Thua cuộc' : 'Chúc mừng';
    let content = isLose ? `Bạn đã thua và ra về với số tiển thưởng : ${numberFormat(player.lastBonus)}, có muốn chơi lại không ? ` : `Bạn đã thắng với số tiển thưởng : ${numberFormat(player.lastBonus)}, có muốn chơi lại không ? `
    sendAskAlert(content, title, "warning", function () {
        player.resetLevel();
    });
}

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', clickOption);
})

const startCountDown = () => {
    currentTime = START_TIME;
    countDown = setInterval(() => {
        let color = "white";
        if (currentTime == END_TIME) {
            currentTime = START_TIME;
            clearCountDown();
            sendIsLose();
        }
        else
            currentTime--;

        let showTime = currentTime;
        if (currentTime < 10)
            showTime = "0" + showTime.toString();
        if (currentTime <= 5)
            color = '#f44336';
        else if (currentTime <= 10)
            color = '#ce7e00';
        else if (currentTime <= 20)
            color = "#e4cb06";

        console.log(color, currentTime);
        countDownTime.css('color', color);
        countDownTime.html(showTime);
    }, 1000);
};
const clearCountDown = () => {
    clearInterval(countDown);
}

const loadQuestion = (question) => {
    setBonusInfo();
    let content = question.content;
    questionTitle.html(`${question.question}`);
    optionA.html(`A : ${content[0]}`);
    optionB.html(`B : ${content[1]}`);
    optionC.html(`C : ${content[2]}`);
    optionD.html(`D : ${content[3]}`);
    console.log(player.currentLevel);
    console.log(player.state);
    console.log('dap an :' + question.correct);
}

const setBonusInfo = () => {
    bonusInfo.html(`TIỀN THƯỞNG : ${numberFormat(player.bonus)}`);
}

loadQuestion(player.getCurrentQuestion());
startCountDown();



