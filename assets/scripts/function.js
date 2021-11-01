const numberFormat = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

const timer = ms => new Promise(res => setTimeout(res, ms));


const getRandomListQuestion = (state) => {
    let listQuestion = questionAllList[state].questions.sort(() => Math.random() - 0.5)
    console.log(listQuestion);
    return listQuestion;
}


const sendAlert = (content, title, type) => {
    swal({
        title: title,
        text: content,
        icon: type,
        buttons: {
            confirm: {
                text: "OK",
                value: true,
                visible: true,
                className: "btn btn-" + type,
                closeModal: true
            }
        }
    });
}

const sendAskAlert = (content, title, type, func) => {
    swal({
        title: title,
        text: content,
        type: type,
        buttons: {
            confirm: {
                text: "Đồng ý",
                className: "btn btn-success",
            },
            cancel: {
                visible: true,
                className: "btn btn-danger",
            },
        },
    }).then((Delete) => {
        if (Delete) {
            func();
        } else {
            swal.close();
            loadPage('reward');
        }
    });
}