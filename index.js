const gallery = document.getElementsByTagName('section')[0];
const classes = ['main-gallery-picture-item1', 'main-gallery-picture-item2', 'main-gallery-picture-item3'];
let i = 1;
let classItem;

setInterval(() => {
    [classItem] = gallery.classList;

    gallery.classList.add(classes[i]);
    gallery.classList.remove(classItem);

    if (i !== 2)
        i = i + 1;
    else
        i = 0
}, 2000);
