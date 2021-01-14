// script.js

$(document).ready(() => {

    // Grabing the element for adding new burger
    var addNewBurger = $("#add-new-burger");

    // Add new burger to list
    $(".burger-form").on("submit", (event) => {

        event.preventDefault();

        let newBurger = addNewBurger.val().trim();
        
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
            let id = $(this).data("id");
            
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: { devoured: 1}
            }).then(() =>{
                console.log("Burger has been devoured");
                location.reload()
            });
    });
});