const Database = require('./db');

const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    await saveOrphanage(db, {

        lat: "-23.1957482",
        lng: "-45.8924674",
        name: "Casa das criancas",
        about: "Presta assistencia a criancas de 06 a 15 anos que ser encontre em situacao de risco e/ou vulnerabilidade social",
        whatsapp: "54356575685686",
        images: [
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=723&q=80",

            "https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
        opening_hours: "Horario de visitas das 8h ate 18h",
        open_on_weekends: "0"
    });



    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
    console.log(orphanage);

    //await db.run('DELETE FROM orphanage WHERE id = "3"');


});