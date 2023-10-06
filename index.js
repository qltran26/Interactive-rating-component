function changePoint(point) {
    const choices = document.getElementById('choices');
    choices.textContent = `You selected ${point} out of 5`;
}

function openModal() {
    const thanksField = document.querySelector('.thanks__field');
    const ratingField = document.querySelector('.rating__field');
    
    if (thanksField.style.display === 'none') {
        thanksField.style.display = 'block';
        ratingField.style.display = 'none';
    }
}
