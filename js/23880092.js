const API = 'https://web1-api.vercel.app/api';

async function loadData(request, templateId, viewId) {
    const reponse = await fetch(`${API}/${request}`);
    const data = await reponse.json();

    var source = document.getElementById(templateId).innerHTML;
    var template = Handlebars.compile(source);
    var context = { data : data };
    var view = document.getElementById(viewId);
    view.innerHTML = template(context);    
}