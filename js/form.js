class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(250,10);

        var input = createInput("Name");
        input.position(350,200);

        var create = createButton("Create");
        create.position(350,240);

        var greetings = createElement("h2");

        create.mousePressed(function(){
            input.hide();
            create.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            greetings.html("Hello " + name);
            greetings.position(360,200);
        })
    }
}