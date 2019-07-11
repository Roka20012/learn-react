import uuid from "uuid/v1";

let users = [
    {
        id: uuid(),
        name: "Kolya"
    },
    {
        id: uuid(),
        name: "Petro"
    },
    {
        id: uuid(),
        name: "Rostyk"
    },
    {
        id: uuid(),
        name: "Vitalik"
    },
    {
        id: uuid(),
        name: "Max"
    },
    {
        id: uuid(),
        name: "Roma"
    },
    {
        id: uuid(),
        name: "Artem"
    },
    {
        id: uuid(),
        name: "Jojo"
    }
];

const Api = {};

Api.get = params =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(
                users.filter(el => {
                    if (params === "") return;
                    if (params === undefined) return el;
                    if (~el.name.toLowerCase().indexOf(params.toLowerCase()))
                        return el;
                })
            );
        }, 2000);
    });

Api.put = name => {
    let id = uuid();
    console.log(id);
    users.push({
        id,
        name
    });
};
Api.delete = id => {
    users = users.filter(el => el.id !== id);
};

export default Api;
