class Question {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
    display() {
        this.title.html("My Quiz Game");
        this.title.position(850/2, 0);

        this.input.position(850/2, 400/2);
        this.button.position(850/2, 400/2 + 50);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            contestant.name = this.input.value();
            contestantCount += 1;
            contestant.index = contestantCount
            contestant.update();
            contestant.updateCount(contestantCount);

            this.greeting.html("Hello " + contestant.name);
            this.greeting.position(850/2, 400/2);
        })
    }
}