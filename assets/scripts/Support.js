class Support {
    constructor(player) {
        this.listSupport = [
            { "idName": 'sp50x50', "isUse": false, "func": () => this.handle50x50() },
            { "idName": 'callFriend', "isUse": false, "func": () => this.handleCallFriend() },
            { "idName": 'askLookers', "isUse": false, "func": () => this.handleAskLookers() },
            { "idName": 'adviseSp', "isUse": false, "func": () => this.handleAdviseSp() },

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
        this.listSupport[number].isUse = true;;
    }

    handle50x50() {
        if (!this.getIsUse(0)) {
            let arrOption = [0, 1, 2, 3];
            console.log(arrOption);
            let correctAnswer = this.getCorrectQuestion();
            arrOption = arrOption.filter(a => a != correctAnswer);
            hideAOption(arrOption[0]);
            hideAOption(arrOption[2]);

            this.setIsUse(0);
        } else
            sendAlert(`Bạn đã sử dụng quyền trợ giúp này`, "Trợ giúp", "error");

    }

    handleCallFriend() {
        if (!this.getIsUse(1)) {
            this.setIsUse(1);
            sendAlert(`Đáp án là : ${this.getAnswerCurrent()}`, "Trợ giúp", "warning");
        } else
            sendAlert(`Bạn đã sử dụng quyền trợ giúp này`, "Trợ giúp", "error");
    }

    handleAskLookers() {
        if (!this.getIsUse(2)) {
            this.setIsUse(2);
            sendAlert(`Đáp án là : ${this.getAnswerCurrent()}`, "Trợ giúp", "warning");
        } else
            sendAlert(`Bạn đã sử dụng quyền trợ giúp này`, "Trợ giúp", "error");
    }

    handleAdviseSp() {
        if (!this.getIsUse(3)) {
            this.setIsUse(3);
            sendAlert(`Đáp án là : ${this.getAnswerCurrent()}`, "Trợ giúp", "warning");
        } else
            sendAlert(`Bạn đã sử dụng quyền trợ giúp này`, "Trợ giúp", "error");
    }


}