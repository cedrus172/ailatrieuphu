

var request = false;
var loaded = false;
var quanns = new Array(6);
quanns[0] = 1;
function loadQuestion(level, array) {
    var current;
    if (level < 4 && level > 0) {
        $.ajax({
            type: 'POST',
            data: {
                level: level,
                ln: 5
            },
            url: 'http://choinhanh.vn/games/ai-la-trieu-phu/php/getQuestion.php',
            success: function (data) {
                var temp = data;
                console.log(data);
                if (temp.charAt(0) == "0") {
                    current = temp.split('*');
                    for (var x = 1; x < 6; x++) {
                        array[x] = current[x];
                    }
                    if (request) startGame();
                    else {
                        loaded = true;
                    }
                }
                else {
                    alert("Không thể kết nối tới cơ sở dữ liệu, nhấn F5 để refresh lại trang");
                }
            }
        });
    }
}

function startGame() { }

loadQuestion(1, quanns);

function loadOtherQuestion(level) {
    if (level < 4 && level > 0) {
        $.ajax({
            url: 'php/getQuestion.php',
            type: 'POST',
            data: {
                level: level,
                ln: 1
            },
            success: function (msg) {
                otherQuestion = msg;
            }
        });
    }
}


