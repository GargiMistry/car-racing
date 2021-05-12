class Form{

    constructor(){}

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(120,0);

        var greeting = createElement('h3');

        var input = createInput(" ");
        input.position(140,170);

        var button = createButton('Play');
        button.position(260,200);

        button.mousePressed(function(){
            var name = input.value();
            input.hide();
            button.hide();

            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello "+name);
            greeting.position(140,170);
        })

    }
    
}