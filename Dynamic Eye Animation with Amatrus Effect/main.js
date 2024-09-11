const move1 = document.getElementById("move1");
const move2 = document.getElementById("move2");
let timeoutId;
const originPosition = { top: '50%', left: '50%' };

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    const movementFactor = 2; // Adjust this value to control the movement range (smaller = less movement)

    const limitedTop = 50 + (clientY / window.innerHeight - 0.5) * 20 * movementFactor;
    const limitedLeft = 50 + (clientX / window.innerWidth - 0.5) * 20 * movementFactor;

    // Move the element based on the mouse position within the limited range
    move1.animate({
        top: `${limitedTop}%`,
        left: `${limitedLeft}%`
    }, { duration: 500, fill: "forwards" });
    move2.animate({
        top: `${limitedTop}%`,
        left: `${limitedLeft}%`
    }, { duration: 500, fill: "forwards" });

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        move1.animate({
            top: originPosition.top,
            left: originPosition.left
        }, { duration: 1000, fill: "forwards" });
        move2.animate({
            top: originPosition.top,
            left: originPosition.left
        }, { duration: 1000, fill: "forwards" });
    }, 3000); // 3 seconds
};
