//TO DO LIST
((d) => {

    let add = d.getElementById("add");
    let list = d.getElementById("list");
    let todo = d.getElementById("todo");

    add.addEventListener("click", () => {

        let li = d.createElement("li");

        li.textContent = todo.value;
        li.classList.add("list-group-item");
        todo.value = "";
        todo.focus();
        list.append(li);
    });

})(document);

// =====================================================================================================//

//WHAT'S THE TIME? - AUTO REFRESH (Displays the time in paragraph)

((d) => {

    let time = d.getElementById("time");

    let update = () => {
        time.textContent = new Date().toLocaleTimeString();
    };

    setInterval(update, 1000);
    update();
})(document);


// =====================================================================================================//

// WHAT SIZE IS MY WEBPAGE? - AUTO REFRESH (Displays the size of the web page)
((d) => {

    let height = d.getElementById("height");
    let width = d.getElementById("width");

    height.textContent = window.innerHeight;
    width.textContent = window.innerWidth;

    window.addEventListener("resize", () => {
        height.textContent = window.innerHeight;
        width.textContent = window.innerWidth;
    });


})(document);


// =====================================================================================================//

// VALIDATION FORM (Submitting the form with an empty field will be given a red border and a message saying "Field required")

((d) => {

    let form = d.getElementById("form");

    let fields = Array.from(form.querySelectorAll(".form-control"));

    form.addEventListener("submit", event => {

        let invalid = fields.filter(el => el.value === "");

        fields.forEach(el => {
            el.parentElement.classList.remove("has-error");

            if (el.nextElementSibling) {
                el.nextElementSibling.remove();
            }
        });

        if (invalid.length) {

            event.preventDefault();

            invalid.forEach(el => {
                el.parentElement.classList.add("has-error");
                let p = d.createElement("p");
                p.textContent = "Field Required";
                p.classList.add("help-block");
                el.parentElement.append(p);
            });
        }
    });
})(document);

// =====================================================================================================//


// COUNTER (Press the button to Increment the number)
((d) => {
    let p = d.getElementById("counter");
    let btn = d.getElementById("btn");

    let counter = 0;
    btn.addEventListener("click", () => {
        counter += 1;
        p.textContent = counter;

    });

})(document);


// =====================================================================================================//

// CHANGES BORDER COLOR ON CLICK
((d) => {
    let border = d.getElementById("squareborder");

    border.style.borderColor = "blue";

    border.addEventListener("click", () => {
        if (border.style.borderColor === "blue") {
            border.style.borderColor = "red";
        } else {
            border.style.borderColor = "blue";
        }
    });

})(document);


// =====================================================================================================//

//CLICK THE BUTTON AND MORE WILL APPEAR
((d) => {

    let main = d.getElementById("main-btn");

    main.addEventListener("click", e => {
        let clicked = e.target;

        if (clicked.matches("button")) {
            let b = d.createElement("button")
            b.textContent = "Click Me!";
            b.classList.add("btn-primary", "btn");

            main.append(b);
        }
    });

})(document);

// =====================================================================================================//

//LISTS THE ALPHABET A-Z
((d) => {

    let ul = d.createElement("ul");

    for (let i = 65; i < (65 + 26); i += 1) {
        let li = d.createElement("li");
        li.textContent = String.fromCharCode(i);

        ul.append(li);
    }

    d.getElementById("alphabet").append(ul);
})(document);