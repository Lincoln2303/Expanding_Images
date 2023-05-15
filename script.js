// II.01. We're selecting (All)  the panels, and save it to a variable:
const panels = document.querySelectorAll('.panel'); 
// Testing: (NOTE: We can test what do we get back if we print out the panels)
// console.log(panels[0]);

// II.02. We're putting the panels to a for loop:
panels.forEach((panel) => {
    // Testing: (NOTE: See what you get back)
    // console.log(panel);
    // II.03. We want to add an eventListener (on each panel)
    // NOTE: When that click happens we add a function
    panel.addEventListener('click', () => {
        // II.06. When we click, it removes the active classes from all panels, and put the active class on the one we click:
        removeActiveClass();
        // Testing:
        // console.log(123);
        // II.04. We set the class "active", in case of click:
        panel.classList.add('active')
    })
})

// II.05. We're creating a function for removing classes in case, if one gets active:
// AFTER: We're adding the function to the eventListener above (II.06.)
function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active'); 
    })
}


