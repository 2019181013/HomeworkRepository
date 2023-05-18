function show_products() {
    fetch("https://2019181013.github.io/HomeworkRepository/LAB4/product.json")
    .then(function(response){
        return response.json();
    })
    .then((items => {
        console.log(items);
    }));
}
