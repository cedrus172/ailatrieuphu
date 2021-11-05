class Support {
    constructor(player) {
        this.listSupport = [
            { "idName": 'sp50x50', "isUse": false, "func": () => this.handle50x50() },
            { "idName": 'callFriend', "isUse": false, "func": () => this.handleCallFriend() },
            { "idName": 'askLookers', "isUse": false, "func": () => this.handleAskLookers() }
        ]
        this.m_player = player;
    }

    getAnswerCurrent() {
        let currentQuestion = this.m_player.getCurrentQuestion();
        return currentQuestion.getAnswerStr();
    }

    getCorrectQuestion() {
        let currentQuestion = this.m_player.getCurrentQuestion();
        return currentQuestion.getCorrect();
    }

    useSupport(name) {
        this.listSupport.find(a => a.idName == name).func();
    }


    getIsUse(number) {
        return this.listSupport[number].isUse;
    }

    setIsUse(number) {
        soundHelpOptions(number);
        this.listSupport[number].isUse = true;;
    }

    handle50x50 = async () => {
        if (!this.getIsUse(0)) {
            this.setIsUse(0);
            await timer(3000);
            let arrOption = [0, 1, 2, 3];
            let correctAnswer = this.getCorrectQuestion();
            arrOption = arrOption.filter(a => a != correctAnswer);

            let twoAnswer = [];
            hideAOption(arrOption[0]);
            hideAOption(arrOption[2]);
            listOptions.forEach((option) => {
                if (option.innerHTML != '') {
                    twoAnswer.push(option.dataset.option);
                }
            })
            twoAnswer = twoAnswer.sort();
            await soundRemove2Answers(twoAnswer);
        } else
            sendAlert(`Bạn đã sử dụng quyền trợ giúp này`, "Trợ giúp", "error");

    }

    handleCallFriend = async () => {
        if (!this.getIsUse(1)) {
            this.setIsUse(1);
            await timer(4000);
            sendAlert(`Người thân bạn khuyên chọn phương án : ${this.getAnswerCurrent()}`, "Đang trong cuộc gọi", "warning");
        } else
            sendAlert(`Bạn đã sử dụng quyền trợ giúp này`, "Trợ giúp", "error");
    }

    handleAskLookers = async () => {
        if (!this.getIsUse(2)) {
            this.setIsUse(2);
            await timer(4000);
            $('#myChart').modal('toggle');
            await timer(500);
            let totalPercent = 100;
            let correctAnswer = this.m_player.getCurrentQuestion().getCorrect();
            let data = new Array(4);
            let randomA, randomB, randomC, randomD;
            if (correctAnswer == 0) {
                randomA = Math.floor(Math.random() * totalPercent - 20) + 30;
                totalPercent -= randomA;
                randomB = Math.floor(Math.random() * totalPercent);
                totalPercent -= randomB;
                randomC = Math.floor(Math.random() * totalPercent);
                totalPercent -= randomC;
                randomD = totalPercent;
            } else if (correctAnswer == 1) {
                randomB = Math.floor(Math.random() * totalPercent - 20) + 30;;
                totalPercent -= randomB;
                randomA = Math.floor(Math.random() * totalPercent);
                totalPercent -= randomA;
                randomC = Math.floor(Math.random() * totalPercent);
                totalPercent -= randomC;
                randomD = totalPercent;
            }
            else if (correctAnswer == 2) {
                randomC = Math.floor(Math.random() * totalPercent - 20) + 30;;
                totalPercent -= randomC;
                randomA = Math.floor(Math.random() * totalPercent);
                totalPercent -= randomA;
                randomB = Math.floor(Math.random() * totalPercent);
                totalPercent -= randomB;
                randomD = totalPercent;
            } else if (correctAnswer == 3) {
                randomD = Math.floor(Math.random() * totalPercent - 20) + 30;;
                totalPercent -= randomD;
                randomA = Math.floor(Math.random() * totalPercent);
                totalPercent -= randomA;
                randomB = Math.floor(Math.random() * totalPercent);
                totalPercent -= randomB;
                randomC = totalPercent;
            }
            data[0] = randomA;
            data[1] = randomB;
            data[2] = randomC;
            data[3] = randomD;

            setMyChartData(data);


        } else
            sendAlert(`Bạn đã sử dụng quyền trợ giúp này`, "Trợ giúp", "error");
    }



}