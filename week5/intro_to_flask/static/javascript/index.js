let game_status = {
    start : 0,
    playing: 1,
    clickable: 2
}

let status1 = game_status.start;
let change_time, begin_time, timeout_id;
let total = 0;
let plays = 0;
let best = 1000000;
$('.waiting').hide();
$('.reaction_time').hide();
$('.too_soon').hide();
$('.output').hide();
$('.reset').click(function(){
    window.location.reload();
})




$('.player').click(function (e) { 
    if (status1 == game_status.start){
        $('.instructions').hide();
        $('.reaction_time').hide();
        $('.too_soon').hide();
        $('.waiting').show();
        $('.player').css('background-color','yellow');
        change_time = rand(1,5);
        status1=game_status.playing;
        timeout_id = setTimeout(
            function(){
                $('.player').css('background-color', 'purple');
                $('.waiting').hide();
                let curr = new Date();
                begin_time = curr.getTime();
                console.log(begin_time);
                status1 = game_status.clickable;
            }, change_time
        )
    }
    else if (status1==game_status.playing){
        $('.reaction_time').hide();
        $('.waiting').hide();
        $('.too_soon').show();
        clearTimeout(timeout_id);
        status1 = game_status.start;
    }
    else if (status1 = game_status.clickable){
        let clicked = new Date();
        click_time = clicked.getTime();
        play_time = (click_time - begin_time);
        $('.reaction_time').show();
        $('.reaction_time_text').text(`${play_time} MS`);     
        $('.output').val(play_time);
        if (play_time<best){
            best=play_time;
            $('.best_score').text("Best Time:"+best);
        }
        plays+=1;
        total+=play_time;
        $('.average_score').text("Average Time:"+(Math.floor(total/plays)));

        status1 = game_status.start;
    }
});



function rand(min, max){
    return (Math.floor(Math.random() * Math.floor(max))+min) * 1000;
}

    