class Player {
    constructor(rewardList) {
        this.currentLevel = 1;
        this.state = 0;
        this.bonus = 0;
        this.highBonus = 0;
        this.rewardList = rewardList;
        this.listQuestions = [];
        this.maxQuestions = 5;
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

    addBonus(bonusAdd) {
        this.bonus += bonusAdd;
        console.log(bonusAdd);
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
        let bonusAdd = this.rewardList.getBonus(this.currentLevel);
        this.addBonus(bonusAdd);
        this.currentLevel++;
        setState();
        this.rewardList.renderRewardList();
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
                this.maxQuestions = 5;
                break;
            case 11:
                this.state = 2;
                this.maxQuestions = 3;
                break;
            case 13:
                this.state = 3;
                this.maxQuestions = 2;
                break;
            case 15:
                this.state = 4;
                this.maxQuestions = 1;
                break;
            default:
                break;
        }
        if (this.state != oldState) {
            this.createListQuestion();
        }
    }

    resetLevel() {
        this.currentLevel = 1;
        setState();
        this.rewardList.init();
        this.rewardList.renderRewardList();
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