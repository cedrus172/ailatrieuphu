class Player {
    constructor(rewardList) {
        this.currentLevel = 1;
        this.state = 0;
        this.bonus = 0;
        this.highBonus = 0;
        this.rewardList = rewardList;
        this.listQuestions = [];
        this.maxQuestions = 5;
        this.isReply = false;
        this.isLose = false;
        this.lastBonus = 0;
    }

    addQuestion(question) {
        let result = false;
        if (this.listQuestions.length < this.maxQuestions) {
            this.listQuestions.push(question);
            result = true;
        } else
            result = false;
        return result;
    }

    getListQuestions() {
        return this.listQuestions;
    }

    setBonus(bonus) {
        this.bonus = bonus;
        console.log(bonus);
    }

    getCurrentQuestion() {
        return this.listQuestions[this.currentLevel - 1];
    }

    selectOption(option) {
        let result = false;
        if (this.getCurrentQuestion().checkAnswer(option)) {
            this.upLevel();
            result = true;
        } else {
            result = false;
            this.isLose = true;
        }

        return result;
    }

    isHighestBonus() {
        let result = false;
        if (this.bonus > this.highBonus) {
            result = true;
            this.highBonus = this.bonus;
        }
        return result;
    }

    upLevel() {
        this.rewardList.setReward(this.currentLevel);
        let reward = this.rewardList.getReward(this.currentLevel);
        this.setBonus(reward.bonus);
        if (reward.upLevel)
            this.lastBonus = reward.bonus;
        this.currentLevel++;
        this.setState();
        this.rewardList.renderRewardList();
        if (this.currentLevel <= 15)
            loadQuestion(this.getCurrentQuestion());
    }

    setState() {
        let oldState = this.state;
        switch (this.currentLevel) {
            case 1:
                this.state = 0;
                this.maxQuestions = 5;
                break;
            case 6:
                this.state = 1;
                this.maxQuestions = 10;
                break;
            case 11:
                this.state = 2;
                this.maxQuestions = 13;
                break;
            case 13:
                this.state = 3;
                this.maxQuestions = 15;
                break;
            case 15:
                this.state = 4;
                this.maxQuestions = 16;
                break;
            default:
                break;
        }
        if (this.state != oldState) {
            this.createListQuestion();
        }
    }

    resetLevel() {
        this.isLose = false;
        this.bonus = 0;
        this.lastBonus = 0;
        this.currentLevel = 1;
        this.setState();
        this.rewardList.init();
        this.rewardList.renderRewardList();
        this.listQuestions = [];
        this.createListQuestion();
        loadQuestion(this.getCurrentQuestion());
        startCountDown();
    }


    createListQuestion() {
        let listQuestions = getRandomListQuestion(this.state);
        let i = 0;
        let question = new Question(listQuestions[i].question, listQuestions[i].content, listQuestions[i].correct);
        while (this.addQuestion(question)) {
            i++;
            question = new Question(listQuestions[i].question, listQuestions[i].content, listQuestions[i].correct);
        }


    }

}