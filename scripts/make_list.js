//from https://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
function make_list(array,list_type="ul") {
    // Create the list element:
    var list = document.createElement(list_type);

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}
