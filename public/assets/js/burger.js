$(function() {
    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(), devoured:0
        };
    });

    $.ajax("/api/burgers", {
        type: "POST", 
        data: newBurger
    }).then(() => {
        console.log("Added new burger!");
        location.reload();
    });
});

$(".eatburger").on("click", (event) => {
    event.preventDefault();

    let id = $(this).data("id");
    let devouredState = { devoured: 1 };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
    }).then(() => {
        console.log("Burger devoured");
        location.reload();
    });
    $(".trashburger").on("click", (event) => {
        event.preventDefault();
        let id = $(this).data("id");
        // Ajax call to delete burger
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});

