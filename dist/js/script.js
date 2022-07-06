"use strict";
document.addEventListener('DOMContentLoaded', () => {
    let search = "";
    // https://api.github.com/search/repositories?q=w

    //form
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        search = Object.fromEntries(formData.entries()).repo;

        getData(search)
            .then((data) => {

                data.forEach(item => {
                    console.log(item.owner['avatar_url']);
                });

            });





    });

    async function getData(srch) {
        const request = await fetch(`https://api.github.com/search/repositories?q=${srch}`);
        const data = await request.json();

        return data.items;
    }

    function renderRepo() {

    }










    // document.querySelector('.btn').addEventListener('click', () => {

    //     fetch('https://api.github.com/search/repositories?q=testTask')
    //         .then(data => data.json())
    //         .then(data => {
    //             data.items.forEach(element => {
    //                 console.log(element);
    //             });
    //         });



    //     console.log('click');


    // });


    // async function getData(url) {
    //     const request = await fetch(url);
    //     const data = await request.text();

    //     return JSON.parse(data);
    // }


});