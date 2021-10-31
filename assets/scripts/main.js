
var rewardEle = $('#rewardList');
var rewardList = new RewardList();
var player = new Player(rewardList);
player.createListQuestion();
rewardList.renderRewardList(rewardEle);


