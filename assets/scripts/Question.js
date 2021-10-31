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

    getContent() { return content; }
}
