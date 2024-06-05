// Sélectionnez tous les éléments de la liste
const menuItems = document.querySelectorAll('.menu li a');

// Ajoutez un écouteur d'événements pour mettre à jour la classe active
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Supprimez la classe active de tous les éléments
    menuItems.forEach(otherItem => otherItem.classList.remove('active'));

    // Ajoutez la classe active à l'élément actuel
    item.classList.add('active');
  });
});