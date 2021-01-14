// script.js

$(document).ready(() => {

    // Grabing the element for adding new burger
    var addNewBurger = $("#add-new-burger");

    // Add new burger to list
    $(".burger-form").on("submit", (event) => {

        event.preventDefault();

        let newBurger = {
            burgerName: addNewBurger.val().trim()
        }
        
        if (newBurger) {
            $.ajax("/api/burgers", {
                type: "POST", 
                data: newBurger
            }).then(() => {
                console.log("New burger created");
                location.reload();
            });
        }
    });   
        
      
    $(".eat-burger-button").on("click", (event) => {
            event.preventDefault();
            let id = $(event.target).data("id");
            
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: { devoured: true}
            }).then(() => {
                console.log("Burger has been devoured");
                location.reload()
            });
    });
});