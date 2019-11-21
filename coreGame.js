let game = {
  generateSquares : function (numOfSquares) {
    dm.container.innerHTML = '';
    if (numOfSquares == EASY_MODE_SQUARES) {
      dm.easyBtn.classList.add('selected');
    } else if (numOfSquares == MEDIUM_MODE_SQUARES) {
      dm.mediumBtn.classList.add('selected');
    } else if (numOfSquares == HARD_MODE_SQUARES) {
      dm.hardBtn.classList.add('selected');
    }

    for (let i = 0; i < numOfSquares; i++) {
      let square = document.createElement('div');
      square.classList.add('square');
      dm.container.append(square);
    }
  }
};
