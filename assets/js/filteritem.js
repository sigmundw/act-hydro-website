function filterItems(tag) {
    // Get all the <p> elements in the content div
    var items = document.querySelectorAll('.content p');

    // Loop through each item
    items.forEach(function(item) {
        // If the tag is 'all', show all items
        if (tag === 'all') {
            item.style.display = 'block';
        } else {
            // Otherwise, check if the item has the class for the selected tag
            if (item.classList.contains(tag)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

// Initialize by showing all items
filterItems('all');
