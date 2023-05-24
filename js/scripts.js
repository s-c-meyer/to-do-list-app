function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        let list = $('#list');
        list.append(li);
    }

    li.on('dblclick', function() {
        $(this).toggleClass('strike');
    });

    let crossOutButton = $('<crossOutButton></crossOutButton');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', function() {
        $(this).toggleClass('delete');
        li.toggleClass('delete');
    });

    $('#list').sortable();
}