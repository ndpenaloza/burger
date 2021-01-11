
$("#submit-new-burger").on("click", (event) => {
    event.preventDefault();

    var newBurger = {
            burger_name: $("#add-new-burger").val().trim(), devoured:0
    };


    $.ajax("/api/burgers", {
        type: "POST", 
        data: newBurger
    }).then(() => {
        location.reload();
    });
});   
    

$(".eat-burger").on("click", (event) => {
    event.preventDefault();

    let id = $(this).data("id");
    let devouredState = { devoured: 1 };
    
    $.ajax({
        url: "/api/burgers/" + id,
        type: "PUT",
        data: devouredState
    }).then(() => {
        location.reload();
    });

});    


$(".delete-burger").on("click", (event) => {
        event.preventDefault();
        let id = $(this).data("id");
        
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
});

