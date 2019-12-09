

export const handleCloseDialog = () => document.querySelector(".container")
    .addEventListener("click", e => {

        if (e.target.id === "button--closeMessage") {
            e.target.parentNode.close()
        }
    })
