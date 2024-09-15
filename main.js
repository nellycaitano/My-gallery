

document.addEventListener("DOMContentLoaded", function () {
  
  document.getElementById('shuffle-btn').addEventListener('click', function() {
    let fstSection = document.getElementById('fst-section');
    let sndSection = document.getElementById('snd-section');
    
    let fstDivs = fstSection.children;
    if (fstDivs.length >= 2) {

      fstDivs[0].classList.add('move-left');
      fstDivs[1].classList.add('move-right');

      // Once the animation is over, we make the exchange
      setTimeout(function() {
        // Delete motion classes
        fstDivs[0].classList.remove('move-left');
        fstDivs[1].classList.remove('move-right');

        // Invert divs
        fstSection.insertBefore(fstDivs[1], fstDivs[0]);

        // Add a class for a slow, fluid return
        fstDivs[0].classList.add('reset-transform');
        fstDivs[1].classList.add('reset-transform');

        // Remove class after return to allow animation to be replayed later
        setTimeout(function() {
          fstDivs[0].classList.remove('reset-transform');
          fstDivs[1].classList.remove('reset-transform');
        }, 1000); // Return time (1 second)
      }, 500);  // Corresponds to duration of initial transition (0.5s)
    }
    
    let sndDivs = sndSection.children;
    if (sndDivs.length >= 2) {
      sndDivs[0].classList.add('move-up');
      sndDivs[1].classList.add('move-down');

      setTimeout(function() {
        sndDivs[0].classList.remove('move-up');
        sndDivs[1].classList.remove('move-down');

        sndSection.insertBefore(sndDivs[1], sndDivs[0]);

        sndDivs[0].classList.add('reset-transform');
        sndDivs[1].classList.add('reset-transform');

        setTimeout(function() {
          sndDivs[0].classList.remove('reset-transform');
          sndDivs[1].classList.remove('reset-transform');
        }, 1000);  
      }, 500);  
    }

    let sct1 = document.getElementById('sct-1');
    let sct2 = document.getElementById('sct-2');
    
    if (sct1 && sct2) {
      sct1.classList.add('move-left');
      sct2.classList.add('move-right');

      setTimeout(function() {
        sct1.classList.remove('move-left');
        sct2.classList.remove('move-right');

        // Create a temporary node to facilitate inversion
        let tempNode = document.createElement('div');
        sct1.parentNode.insertBefore(tempNode, sct1);

        // Swapping places
        sct2.parentNode.insertBefore(sct1, sct2);
        tempNode.parentNode.insertBefore(sct2, tempNode);

        // Delete the temporary node
        tempNode.remove();

        sct1.classList.add('reset-transform');
        sct2.classList.add('reset-transform');

        setTimeout(function() {
          sct1.classList.remove('reset-transform');
          sct2.classList.remove('reset-transform');
        }, 1000); 
      }, 500);  
    }
  });
});

