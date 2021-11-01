const loadPage = (page) => {
    $('#root').load(`/module/${page}.html`);
}


loadPage('home');

