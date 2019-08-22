const faveColor = prompt ('Choose one of the following colors: red,grey, green');
switch(favColor) {
    case 'red':
    case 'Red':
        alert(`You chose ${faveColor}`);

    break;
    case 'grey':
    case 'Grey':
            alert(`You chose ${faveColor}`);
    break;
    case 'green':
    case 'Green':
            alert(`You chose ${faveColor}`);
    break;
    default:
        alert('Sorry, you did not choose one of the following colors.');
}
