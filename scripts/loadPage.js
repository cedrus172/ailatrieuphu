const loadPage = (page) => {
    if (page == "game") {
        if (playingSound)
            playingSound.stop();
        //playingSound = h_start.play();
        playingSound = h_gofind1.play();
    }
    $('#content').load(`/views/${page}.html`);
}


loadPage('home');

