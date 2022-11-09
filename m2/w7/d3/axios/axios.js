// class mioTodo {
//     constructor(_userId, _id, _title, _completed) {
//         this.userId = _userId
//         this.id = _id
//         this.title = _title
//         this.completed = _completed
//     }
// }

axios.get('https://jsonplaceholder.typicode.com/todos/1').then(function (response) {
    console.table(response.data);
    console.log(response);
}).catch(function (error) {
    console.log(error);
});


axios.post('https://jsonplaceholder.typicode.com/todos/', { title: 'Cucina' }).then(function (response) {
    console.table(response.data);
    console.log(response);
});

axios.put('https://jsonplaceholder.typicode.com/todos/1', { title: 'fare i piatti' }).then(function (response) {
    console.table(response.data);
    console.log(response);
});

axios.delete('https://jsonplaceholder.typicode.com/todos/1').then(function (response) {
    console.table(response.data);
    console.log(response);
});