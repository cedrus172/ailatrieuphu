var isSoundOn = true;
function soundNewQuestion(level) {
    if (level < 10) {
        playingSound.stop();
        if (isSoundOn)
            playingSound = eval("h_ques0" + level).play()
    }
    else if (level < 16) {
        playingSound.stop();
        if (isSoundOn)
            playingSound = eval("h_ques" + level).play()
    }
}

function soundMyAnswerIs(choosen, correct) {
    playingSound.stop();
    switch (choosen) {
        case 0:
            switch (correct) {
                case 0:
                    if (isSoundOn)
                        playingSound = h_ansA_trueA.play()//createjs.Sound.play('ansA_trueA');
                    return 11400;
                    break;
                case 1:
                    if (isSoundOn)
                        playingSound = h_ansA_loseB.play()//createjs.Sound.play('ansA_loseB');
                    return 11600;
                    break;
                case 2:
                    if (isSoundOn)
                        playingSound = h_ansA_loseC.play()//createjs.Sound.play('ansA_loseC');
                    return 11600;
                    break;
                case 3:
                    if (isSoundOn)
                        playingSound = h_ansA_loseD.play()//createjs.Sound.play('ansA_loseD');
                    return 11500;
                    break;
                default:
                    break;
            }
            break;
        case 1:
            switch (correct) {
                case 0:
                    if (isSoundOn)
                        playingSound = h_ansB_loseA.play()//createjs.Sound.play('ansB_loseA');
                    return 12200;
                    break;
                case 1:
                    if (isSoundOn)
                        playingSound = h_ansB_trueB.play()//createjs.Sound.play('ansB_trueB');
                    return 11100;
                    break;
                case 2:
                    if (isSoundOn)
                        playingSound = h_ansB_loseC.play()//createjs.Sound.play('ansB_loseC');
                    return 12000;
                    break;
                case 3:
                    if (isSoundOn)
                        playingSound = h_ansB_loseD.play()//createjs.Sound.play('ansB_loseD');
                    return 11900;
                    break;
                default:
                    break;
            }
            break;
        case 2:
            switch (correct) {
                case 0:
                    if (isSoundOn)
                        playingSound = h_ansC_loseA.play()//createjs.Sound.play('ansC_loseA');
                    return 13600;
                    break;
                case 1:
                    if (isSoundOn)
                        playingSound = h_ansC_loseB.play()//createjs.Sound.play('ansC_loseB');
                    return 13500;
                    break;
                case 2:
                    if (isSoundOn)
                        playingSound = h_ansC_trueC.play()//createjs.Sound.play('ansC_trueC');
                    return 12800;
                    break;
                case 3:
                    if (isSoundOn)
                        playingSound = h_ansC_loseD.play()//createjs.Sound.play('ansC_loseD');
                    return 13500;
                    break;
                default:
                    break;
            }
            break;
        case 3:
            switch (correct) {
                case 0:
                    if (isSoundOn)
                        playingSound = h_ansD_loseA.play()//createjs.Sound.play('ansD_loseA');
                    return 11800;
                    break;
                case 1:
                    if (isSoundOn)
                        playingSound = h_ansD_loseB.play()//createjs.Sound.play('ansD_loseB');
                    return 11600;
                    break;
                case 2:
                    if (isSoundOn)
                        playingSound = h_ansD_loseC.play()//createjs.Sound.play('ansD_loseC');
                    return 11600;
                    break;
                case 3:
                    if (isSoundOn)
                        playingSound = h_ansD_trueD.play()//createjs.Sound.play('ansD_trueD');
                    return 10500;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}


function soundHelpOptions(type) {
    playingSound.stop();
    switch (type) {
        case 0:
            if (isSoundOn)
                playingSound = h_sound5050.play()//createjs.Sound.play('sound5050');
            break;
        case 1:
            if (isSoundOn)
                playingSound = h_call.play()//createjs.Sound.play('call');
            break;
        case 2:
            if (isSoundOn)
                playingSound = h_khan_gia.play()//createjs.Sound.play('khan_gia');
            break;
        case 3:
            break;
        default:
            break;
    }
}

async function soundRemove2Answers(twoAnswer) {
    console.log(twoAnswer);
    let ans1 = parseInt(twoAnswer[0]);
    let ans2 = parseInt(twoAnswer[1])
    if (ans1 == 0) {
        switch (ans2) {
            case 1:
                playingSound = h_ab_2.play();
                return 4200;
                break;
            case 2:
                playingSound = h_ac_1.play();
                return 8200;
                break;
            case 3:
                playingSound = h_ad_1.play();
                return 6200;
                break;
        }
    }
    else if (ans1 == 1) {
        switch (ans2) {
            case 2:
                playingSound = h_bc_1.play();
                return 8200;
                break;
            case 3:
                playingSound = h_bd_1.play();
                return 6200;
                break;
        }
    }
    else {
        playingSound = h_cd_2.play();
        return 8200;
    }

}

//Hàm khi người chơi thắng cuộc
function soundCongratulation() {
    playingSound.stop();
    if (isSoundOn)
        playingSound = h_cheer.play()
}

//Hàm hỏi người chơi đã sẵn sàng
function soundAreYouReady() {
    playingSound.stop();
    if (isSoundOn)
        playingSound = h_ready.play()
}

//Hàm khi thời gian kết thúc và người chơi thua cuộc
function soundYouLoser() {
    if (isSoundOn)
        playingSound = h_ThuaCuoc.play()
}

//Hàm khi hết thời gian
function soundTimeOut() {
    playingSound.stop();
    if (isSoundOn)
        playingSound = h_out_of_time.play()//createjs.Sound.play("out_of_time");
}

function soundBestPlayer() {
    playingSound.stop();
    if (isSoundOn)
        playingSound = h_best_player.play()//createjs.Sound.play("best_player");
}

//Hàm vượt qua câu hỏi số 14
function soundGetOverThe14th() {
    playingSound.stop();
    if (isSoundOn)
        playingSound = h_pass14.play()//createjs.Sound.play("pass14");
}

function soundStarted() {
    playingSound.stop();
    if (isSoundOn)
        playingSound = h_gofind.play()//createjs.Sound.play('gofind');
}

function soundAbandon() {
    playingSound.stop();
    if (isSoundOn)
        playingSound = h_DungChoi.play()//createjs.Sound.play('Dungchoi');
}

function soundImportant() {
    playingSound.stop();
    playingSound = h_important.play()//createjs.Sound.play('important');
}