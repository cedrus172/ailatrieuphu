
const START_TIME = 30;
const END_TIME = 0;
var listOptions = document.querySelectorAll('.option');
var rewardEle = $('#rewardList');
var questionTitle = $('#questionTitle');
var countDownTime = $('.countDownTime');
var bonusInfo = $('.bonusInfo');
var optionA = $('#optionA');
var optionB = $('#optionB');
var optionC = $('#optionC');
var optionD = $('#optionD');
var currentTime, countDown, currentOption, rewardList, player;

const clickOption = async (option) => {
    player.isSelected = true;
    if (player.isLose) {
        sendIsLose();
        return;
    }
    clearCountDown();
    let optionSelected = parseInt(option.path[0].dataset.option);
    let delay = soundMyAnswerIs(optionSelected, player.getCurrentQuestion().getCorrect());
    await timer(delay - 500);
    updateStyleIsWin();
    await timer(3000);
    if (player.selectOption(optionSelected)) {
        startCountDown();
        loadQuestion(player.getCurrentQuestion());
    } else
        sendIsLose();

}

updateStyleIsWin = () => {
    if (player.lastIsWin)
        currentOption.classList.remove('selected');
    listOptions.forEach((option) => {
        if (option.dataset.option == player.getCurrentQuestion().getCorrect()) {
            option.classList.add('isWin');
        }
    })
    //if (player.lastIsWin)
    //    currentOption
}

sendIsLose = async (isLose = true) => {
    soundTimeOut();
    await timer(2000);
    if (isLose) {
        soundYouLoser();
    }
    let title = isLose ? 'Thua cuộc' : 'Chúc mừng';
    let content = isLose ? `Bạn đã thua và ra về với số tiển thưởng : ${numberFormat(player.lastBonus)}, có muốn chơi lại không ? ` : `Bạn đã thắng với số tiển thưởng : ${numberFormat(player.lastBonus)}, có muốn chơi lại không ? `
    sendAskAlert(content, title, "warning", function () {
        player.resetLevel();
        playingSound = h_gofind1.play();
    });
}

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function () {
        if (!player.isSelected) {
            option.classList.add('selected');
            currentOption = option;
        }
    });
    option.addEventListener('click', (e) => {
        if (!player.isSelected)
            clickOption(e);
        else
            sendAlert("Bạn đã chọn câu hỏi , vui lòng đợi hoàn tất", "Thông báo", "error");

    });
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

        countDownTime.css('color', color);
        countDownTime.html(showTime);
    }, 1000);
};
const clearCountDown = () => {
    clearInterval(countDown);
}

const loadQuestion = async (question) => {
    player.isSelected = false;
    if (player.currentLevel == 16) {
        clearCountDown();
        soundCongratulation();
        await timer(2000);
        soundBestPlayer();
        loadPage('reward');
    } else {
        showAllOptions();
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
        if (player.currentLevel == 15) {
            await soundGetOverThe14th();
            await timer(5000);
        }
        if (player.currentLevel > 1) {
            soundNewQuestion(player.currentLevel);
            await timer(3000);
            if (player.lastUpdateState) {
                soundImportant();
                await timer(2000)
            }

        }
        if (player.state <= 2)
            h_moc1.play();
        else if (player.state <= 4)
            h_moc2.play();
        else
            h_moc3.play();

    }


}

const setBonusInfo = () => {
    bonusInfo.html(`TIỀN THƯỞNG : ${numberFormat(player.bonus)}`);
}

var listSupportBtn = document.querySelectorAll('.icon-support');
listSupportBtn.forEach((support) => {
    support.addEventListener('click', event => {
        let nameSp = support.dataset.support;
        player.support.useSupport(nameSp);
        support.classList.add('used');
        event.preventDefault();
    });
})

var resetAllSupportBtn = () => {
    listSupportBtn.forEach((support) => {
        support.classList.remove('used');
    })
}


const hideAOption = (number) => {
    listOptions[number].innerHTML = '';
}

const showAllOptions = () => {
    listOptions.forEach((option) => {
        option.style.display = "block";
        option.classList.remove('selected');
        option.classList.remove('isWin');
        option.classList.remove('isLose');
    })
}

const stopGame = () => {
    sendAskAlert("Bạn có chắc chắn muốn dừng cuộc chơi tại đây ?", "Dừng cuộc chơi", "warning", function () {
        player.lastBonus = player.bonus;
        soundAbandon();
        loadPage('reward');
    }, true);

}
const Init = () => {
    currentTime = START_TIME;
    rewardList = new RewardList();
    player = new Player(rewardList);
    player.createListQuestion();
    rewardList.renderRewardList(rewardEle);
    loadQuestion(player.getCurrentQuestion());
    startCountDown();
}

Init();



