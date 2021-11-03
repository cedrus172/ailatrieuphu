class Question {
    constructor(question, content, correct) {
        this.question = question;
        this.content = content;
        this.correct = correct;
    }

    getQuestion() { return this.question; }

    getAnswer() {
        return this.content[this.correct];
    }

    getCorrect() {
        return this.correct;
    }

    getAnswerStr() {
        let answer = "";
        console.log(this.correct);
        switch (this.correct) {
            case 0:
                answer = "A";
                break;
            case 1:
                answer = "B";
                break;
            case 2:
                answer = "C";
                break;
            case 3:
                answer = "D";
                break;
        }
        return answer + " - " + this.content[this.correct];
    }

    checkAnswer(option) {
        return option == this.correct;
    }

    getContent() { return content; }
}

