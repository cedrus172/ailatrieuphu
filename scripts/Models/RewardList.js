class RewardList {
    constructor() {
        this.init();
    }
    init() {
        this.listReward = [];
        this.setRewardList();
    }

    addReward = (bonus, upLevel) => {
        let obj = { bonus: bonus, isReward: false, upLevel: upLevel };
        this.listReward.push(obj);
    }

    getReward = (level) => {
        let reward = this.listReward[level - 1];
        return reward;
    }

    getBonus = (level) => {
        let bonus = this.listReward[level - 1].bonus;
        return bonus;
    }

    setReward = (level) => {
        this.listReward[level - 1].isReward = true;
        this.renderRewardList();
    }

    renderRewardList = () => {
        rewardEle.empty();
        this.listReward.forEach((item, index) => {
            let number = index + 1;
            let content = ` <li class="list-group-item ${item.upLevel ? 'upLevel' : ''} ${player.currentLevel == number ? 'active' : ''}">
            <span class="numberQuest">${number < 10 ? '&ensp;' : ''}${number}</span>
            <span class="question">${item.isReward ? '●' : '&ensp;'} ${numberFormat(item.bonus)}</span>
        </li>`;
            rewardEle.prepend(content);
        });
    };

    setRewardList = () => {
        this.addReward(200000, false);
        this.addReward(400000, false);
        this.addReward(600000, false);
        this.addReward(1000000, false);
        this.addReward(2000000, true);
        this.addReward(3000000, false);
        this.addReward(6000000, false);
        this.addReward(10000000, false);
        this.addReward(14000000, false);
        this.addReward(22000000, true);
        this.addReward(30000000, false);
        this.addReward(40000000, false);
        this.addReward(60000000, false);
        this.addReward(85000000, false);
        this.addReward(150000000, true);
    }

}