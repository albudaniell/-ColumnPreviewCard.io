 // Function to display a message when a button is clicked
 function showMessage(message) {
    alert(message); 
}

// Additional animation and interaction
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});