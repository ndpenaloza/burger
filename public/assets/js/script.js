// script.js

$(document).ready(() => {

    // Grabing the element for adding new burger
    var addNewBurger = $("#add-new-burger");

    // Add new burger to list
    $("#submit-new-burger").submit((event) => {

        let newBurger = addNewBurger.val().trim();
        if (newBurger) {
            $.ajax({
                url: "/api/burgers",
                method: "POST", 
                data: { burger_name: burger_name}
            }).then(() => {
                location.reload();
            });
        }
    });   
        
    // Eat burger
    $(".eat-burger-button").click((event) => {

        let id = $(event.target).parent().data("id");
        
        $.ajax({
            url: "/api/burgers/" + id,
            type: "PUT",
            data: { devoured: 1}
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
});