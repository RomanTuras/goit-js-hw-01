'use strict';

/**
 * Getting element width
 *
 * @param {Number} content
 * @param {Number} padding
 * @param {Number} border
 *
 * @return {Number}
 */
function getElementWidth(content, padding, border) {
    const width =
        Number.parseFloat(content) +
        (Number.parseFloat(padding) + Number.parseFloat(border)) * 2;

    return width;
}

// -----------< Tests >-----------
console.log(getElementWidth('50px', '8px', '4px'));
// 74
console.log(getElementWidth('60px', '12px', '8.5px'));
// 101
console.log(getElementWidth('200px', '0px', '0px'));
// 200
