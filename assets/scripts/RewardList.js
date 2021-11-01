class RewardList {
    constructor() {
        this.init();
    }
    init() {
        this.listReward = [];
        this.setRewardList();
    }

    addReward = (number, bonus, upLevel) => {
        let obj = { number: number, bonus: bonus, isReward: false, upLevel: upLevel };
        this.listReward.push(obj);
    }

    getReward = (level) => {
        let reward = this.listReward.find(a => a.number == level);
        return reward;
    }

    getBonus = (level) => {
        let bonus = this.listReward.find(a => a.number == level).bonus;
        return bonus;
    }

    setReward = (level) => {
        this.listReward.find(a => a.number == level).isReward = true;
        this.renderRewardList();
    }

    renderRewardList = () => {
        rewardEle.empty();
        this.listReward.forEach((item) => {
            let content = ` <li class="list-group-item ${item.upLevel ? 'upLevel' : ''} ${player.currentLevel == item.number ? 'active' : ''}">
            <span class="numberQuest">${item.number < 10 ? '&ensp;' : ''}${item.number}</span>
            <span class="question">${item.isReward ? '●' : '&ensp;'} ${numberFormat(item.bonus)}</span>
        </li>`;
            rewardEle.prepend(content);
        });
    };

    setRewardList = () => {
        let i = 1;
        this.addReward(i, 200000, false);
        i++;
        this.addReward(i, 400000, false);
        i++;
        this.addReward(i, 600000, false);
        i++;
        this.addReward(i, 1000000, false);
        i++;
        this.addReward(i, 2000000, true);
        i++;
        this.addReward(i, 3000000, false);
        i++;
        this.addReward(i, 6000000, false);
        i++;
        this.addReward(i, 10000000, false);
        i++;
        this.addReward(i, 14000000, false);
        i++;
        this.addReward(i, 22000000, true);
        i++;
        this.addReward(i, 30000000, false);
        i++;
        this.addReward(i, 40000000, false);
        i++;
        this.addReward(i, 60000000, false);
        i++;
        this.addReward(i, 85000000, false);
        i++;
        this.addReward(i, 150000000, true);
    }

}