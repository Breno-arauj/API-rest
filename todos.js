// // const listALLTodos = () => {
// //     fetch('https://jsonplaceholder.typicode.com/todos/')
// //         .then((response) => response.json())
// //     //   .then(data => console.log(data))
// // }

// // listALLTodos();

// // const listALLTodos = () => {
// //     fetch('https://jsonplaceholder.typicode.com/todos/')
// //         .then((response) => response.json())
// //         .then(data => console.log({
// //             // qtd: data.lenght,
// //             // data: data
// //             // }))

// //         }

// // listALLTodos();

//     // const listALLTodos = () => {
//     //     fetch('https://jsonplaceholder.typicode.com/todos/')
//     //         .then((response) => response.json())
//     //         .then(data => {
//     //             const dataFiltered = data.filter(i => i.userId === id)
//     //             console.log({
//     //                 qtd: dataFiltered.lenght,
//     //         data: dataFiltered
//     //             })
//     //         })


//     // }
//     // listALLTodosByIdUser(10);

// const listALLTodosByIdUser = id => {
//     fetch('https://jsonplaceholder.typicode.com/todos/${id}')
//    .then(response => response.json())
//    .then(data => console.log(data))

// }


    // criar um recurso utilizando o REST API do jsonplaceholder

    fetch('https://jsonplaceholder.typicode.com/todos/', {
        method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: 2,
                    title: "Vamos para a festa de amanha",
                    body: "Quero ir com a minha familia e amigos!"
                    
                })
    })
    .then(response => response.json())
    .then(json => console.log(json))
