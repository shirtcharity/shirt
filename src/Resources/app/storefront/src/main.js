Array.prototype.forEach.call(document.getElementsByClassName('newtab'), function (element) {
    element.setAttribute('target', '_blank');
    element.setAttribute('rel', 'noopener noreferrer');
});
