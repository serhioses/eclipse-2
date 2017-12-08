'use strict';

// var obj1, obj2, obj3, obj4;

//   obj1 = {
//     oranges: 1,
//     apples: 7,
//     bananas: 4,
//     tomatoes: 9,
//     set: {
//       pens: 8,
//       pencils: 10
//     },
//     tools: {
//       bags: 17,
//       electrical: {
//         punchers: 1
//       }
//     }
//   };
//   obj2 = {
//     cucumbers: 5,
//     oranges: 2,
//     lemons: 8,
//     potatoes: 11,
//     tomatoes: 15
//   };
//   obj3 = {
//     cucumbers: 14,
//     set: {
//       pens: 6
//     },
//     tools: {
//       boxes: 28,
//       mechanical: {
//         screwdrivers: 1
//       }
//     }
//   };
//   obj4 = {
//     strawberries: 41
//   };

// console.log(eclipse.helpers.extend(true, obj1, obj2, obj3, obj4));

describe('Utils', () => {
    it('should create namespace', () => {
        eclipse.utils.namespace('testNS');

        expect(eclipse.testNS).toBeObject();
        expect(eclipse.testNS).toBeEmptyObject();
        // console.log(expect);
    });

    it('should not create namespace', () => {
        eclipse.testNS.value = 1;

        expect(eclipse.testNS.value).toBe(1);

        eclipse.utils.namespace('testNS');

        expect(eclipse.testNS.value).toBe(1);
        expect(eclipse.testNS).toBeNonEmptyObject(1);
    });
});

describe('Color', () => {
    it('should return valid color', () => {
        var newColor1 = eclipse.color.change('transparent', 10, 'lighten');

        expect(newColor1).toBeString();
        expect(newColor1).toStartWith('rgb(');
        expect(newColor1).toEndWith(')');
    });
    it('should properly parse rgb(a) color', () => {
        expect(eclipse.color.isRGBLike('rgb(10,54,16)').value).toBeArray();
        expect(eclipse.color.isRGBLike('rgba(10,54,16,1)').value).toBeArray();
        expect(eclipse.color.isRGBLike('rgba(105,54,16,0.015)').value).toBeArray();
        expect(eclipse.color.isRGBLike('rgba(88,27,211,0)').value).toEqual(['88', '27', '211', '0']);
        expect(eclipse.color.isRGBLike('rgba(88,27,211,0)').type).toEqual('rgba');
        expect(eclipse.color.isRGBLike('rgb(105,54,215)').value).toBeArray();
        expect(eclipse.color.isRGBLike('rgb(105,100,215)').value).toBeArray();
        expect(eclipse.color.isRGBLike('rgb(105,100,215)').type).toEqual('rgb');
        expect(eclipse.color.isRGBLike('rgb(105,100,215)').value).toEqual(['105', '100', '215']);
        expect(eclipse.color.isRGBLike('rgb(63,131,163)').value).toEqual(['63', '131', '163']);
        expect(eclipse.color.isRGBLike('rgb(105,100,215) ').value).toBe(false);
        expect(eclipse.color.isRGBLike('rgb(105,100,215').value).toBe(false);
        expect(eclipse.color.isRGBLike('rgbf(105,100,215)').value).toBe(false);
        expect(eclipse.color.isRGBLike('rgb (105,100,215)').value).toBe(false);
        expect(eclipse.color.isRGBLike('rgba105,100,215)').value).toBe(false);
        expect(eclipse.color.isRGBLike('rgb(105,-2,215)').value).toBe(false);
        expect(eclipse.color.isRGBLike('rgb(105,2,&)').value).toBe(false);
        expect(eclipse.color.isRGBLike('rgb(105 ,2,0)').value).toEqual(['105', '2', '0']);
        expect(eclipse.color.isRGBLike('rgb(105,2p,0)').value).toBe(false);
        expect(eclipse.color.isRGBLike('rgb( 15,2,0)').value).toEqual(['15', '2', '0']);
        expect(eclipse.color.isRGBLike('rgb(15,2, 0)').value).toEqual(['15', '2', '0']);
    });
    it('should properly determine whether it is a hex color', () => {
        expect(eclipse.color.isHexLike('#777')).toEqual('777');
        expect(eclipse.color.isHexLike('aac')).toEqual('aac');
        expect(eclipse.color.isHexLike('451554')).toEqual('451554');
        expect(eclipse.color.isHexLike('#ffd1e6')).toEqual('ffd1e6');
        expect(eclipse.color.isHexLike('#abf')).toEqual('abf');
        expect(eclipse.color.isHexLike('#ffd16')).toBe(false);
        expect(eclipse.color.isHexLike('#aag')).toBe(false);
        expect(eclipse.color.isHexLike('#aag')).toBe(false);
        expect(eclipse.color.isHexLike('#ra1924')).toBe(false);
        expect(eclipse.color.isHexLike('#cc557')).toBe(false);
        expect(eclipse.color.isHexLike('cc557')).toBe(false);
    });
    it('should transform hex to rgb', () => {
        expect(eclipse.color.hexToRgb('')).toEqual(null);
        expect(eclipse.color.hexToRgb('ccy')).toEqual(null);
        expect(eclipse.color.hexToRgb('98daek')).toEqual(null);
        expect(eclipse.color.hexToRgb('#58tbda')).toEqual(null);
        expect(eclipse.color.hexToRgb('#fff')).toEqual(['255', '255', '255']);
        expect(eclipse.color.hexToRgb('#ff0000')).toEqual(['255', '0', '0']);
        expect(eclipse.color.hexToRgb('#48d7b3')).toEqual(['72', '215', '179']);
    });
    it('should properly change color', () => {
        expect(eclipse.color.change('rgb(63,131,163)', 50, 'lighten')).toEqual('rgb(159,193,209)');
    });
});

// setTimeout(() => {
//     $('#content').appendTo($('body'));
// }, 1000);

describe('Decorators', () => {
    it('should debounce the given function', (done) => {
        function testFunc () {
            return 1;
        }
        testFunc = eclipse.decorators.debounce(testFunc, 100);

        expect(testFunc()).toEqual(1);
        expect(testFunc()).toEqual(undefined);
        setTimeout(() => {
            expect(testFunc()).toEqual(undefined);
        }, 50);
        setTimeout(() => {
            expect(testFunc()).toEqual(1);
        }, 101);
        setTimeout(done, 250);
    });

    it('should throttle the given function', (done) => {
        var result;

        function testFunc () {
            return 1;
        }
        testFunc = eclipse.decorators.throttle(testFunc, 100);

        expect(testFunc()).toEqual(1);
        expect(testFunc()).toEqual(undefined);
        expect(testFunc()).toEqual(undefined);
        setTimeout(() => {
            expect(testFunc()).toEqual(undefined);
        }, 50);
        setTimeout(() => {
            expect(testFunc()).toEqual(undefined);
        }, 101);
        setTimeout(done, 250);
    });

    it('should call the given function only at the start or at the end of delay', (done) => {
        var counter1 = 0, counter2 = 0;

        function testFunc1 () {
            counter1 += 1;
        }
        testFunc1 = eclipse.decorators.smartDraw(testFunc1, 100);

        function testFunc2 () {
            counter2 -= 1;
        }
        testFunc2 = eclipse.decorators.smartDraw(testFunc2, 100, true);

        testFunc1();
        testFunc1();
        testFunc1();
        setTimeout(() => {
            testFunc1();
            expect(counter1).toEqual(1);
        }, 105);

        testFunc2();
        testFunc2();
        testFunc2();
        setTimeout(() => {
            testFunc2();
            expect(counter2).toEqual(-2);
        }, 105);

        setTimeout(done, 250);
    });

    it('should call the given function just once', () => {
        var counter = 0;

        function testFunc () {
            counter += 1;
        }
        testFunc = eclipse.decorators.once(testFunc);

        testFunc();
        testFunc();
        testFunc();
        testFunc();

        expect(counter).toBe(1);
    });
});

describe('DOM', () => {
    it('should scroll page to the given value and when the animation is done, call the given callback function', (done) => {
        var isDone = false;

        $('body').css('height', '2000px');

        window.scrollTo(0, 1000);

        eclipse.DOM.scrollPage($('body'), 0, {
            done: function () {
                isDone = true;
            }
        }).then(() => {
            $('body').css('height', '');

            expect(isDone).toEqual(true);
            expect(window.pageYOffset).toEqual(0);

            done();
        });
    });

    it('should return the maximum height of the given elements', () => {
        var startHeight = 100, i, div;

        for (i = 0; i < 5; i += 1) {
            div = $('<div/>');

            div.addClass('division');
            div.css('height', startHeight + 'px');

            $('body').append(div);

            startHeight += 50;
        }

        expect(eclipse.DOM.getMaxHeight($('.division'))).toEqual(300);
    });
});

describe('Helpers', () => {
    it('should return a real class of the given type of a variable', () => {
        expect(eclipse.helpers.getClass(1)).toEqual('Number');
        expect(eclipse.helpers.getClass('1')).toEqual('String');
        expect(eclipse.helpers.getClass(null)).toEqual('Null');
        expect(eclipse.helpers.getClass(undefined)).toEqual('Undefined');
        expect(eclipse.helpers.getClass([])).toEqual('Array');
        expect(eclipse.helpers.getClass({})).toEqual('Object');
        expect(eclipse.helpers.getClass(function () {})).toEqual('Function');
    });

    it('should return true or false in dependence of existing the given value in an array', () => {
        var testObject = {a: 1},
            testArray = [1, 'c', testObject];

        expect(eclipse.helpers.inArray(testArray, 2)).toEqual(false);
        expect(eclipse.helpers.inArray(testArray, 'C')).toEqual(false);
        expect(eclipse.helpers.inArray(testArray, {a: 1})).toEqual(false);
        expect(eclipse.helpers.inArray(testArray, 'c')).toEqual(true);
        expect(eclipse.helpers.inArray(testArray, 1)).toEqual(true);
        expect(eclipse.helpers.inArray(testArray, testObject)).toEqual(true);
    });

    it('should return a new array without the given value', () => {
        expect(eclipse.helpers.removeFromArray([1, 2, 3], 2)).toEqual([1, 3]);
        expect(eclipse.helpers.removeFromArray([1, 2, 3], 8)).toEqual([1, 2, 3]);
    });

    it('should return a new array with the given pushed item if it doesnt exist in the array', () => {
        expect(eclipse.helpers.pushIfMiss([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
        expect(eclipse.helpers.pushIfMiss([1, 2, 3], 1)).toEqual([1, 2, 3]);
    });

    it('should return true or false in dependence of the given value is a finite number', () => {
        expect(eclipse.helpers.isNumeric('a')).toEqual(false);
        expect(eclipse.helpers.isNumeric('12 8')).toEqual(true);
        expect(eclipse.helpers.isNumeric(Infinity)).toEqual(false);
        expect(eclipse.helpers.isNumeric('14.7 $')).toEqual(true);
    });

    it('should add leading zero to number if it is less then 10', () => {
        expect(eclipse.helpers.addLeadingZero(5)).toEqual('05');
        expect(eclipse.helpers.addLeadingZero(58)).toEqual(58);
        expect(eclipse.helpers.addLeadingZero(0)).toEqual('00');
        expect(eclipse.helpers.addLeadingZero(-4)).toEqual('-04');
        expect(eclipse.helpers.addLeadingZero(-47)).toEqual(-47);
    });

    it('should return an absolute url', () => {
        expect(eclipse.helpers.getAbsoluteUrl()).toEqual('http://eclipse-2.loc/');
        expect(eclipse.helpers.getAbsoluteUrl('a')).toEqual('http://eclipse-2.loc/a');
    });

    it('should return proper forms of the given words in dependence of the given quantity', () => {
        expect(eclipse.helpers.plural('product', 'products', 'products', 1, 'en')).toEqual('product');
        expect(eclipse.helpers.plural('product', 'products', 'products', 2, 'en')).toEqual('products');
        expect(eclipse.helpers.plural('product', 'products', 'products', -8, 'en')).toEqual('products');
        expect(eclipse.helpers.plural('product', 'products', 'products', 1057, 'en')).toEqual('products');
        expect(eclipse.helpers.plural('товар', 'товара', 'товаров', 1)).toEqual('товар');
        expect(eclipse.helpers.plural('товар', 'товара', 'товаров', 31)).toEqual('товар');
        expect(eclipse.helpers.plural('товар', 'товара', 'товаров', -151)).toEqual('товар');
        expect(eclipse.helpers.plural('товар', 'товара', 'товаров', 4)).toEqual('товаров');
        expect(eclipse.helpers.plural('товар', 'товара', 'товаров', 23)).toEqual('товаров');
        expect(eclipse.helpers.plural('товар', 'товара', 'товаров', 89722)).toEqual('товаров');
        expect(eclipse.helpers.plural('товар', 'товара', 'товаров', 77)).toEqual('товара');
        expect(eclipse.helpers.plural('товар', 'товара', 'товаров', -89)).toEqual('товара');
        expect(eclipse.helpers.plural('товар', 'товара', 'товаров', 5)).toEqual('товара');
    });
});

describe('Styles', () => {
    it('should properly make ripple effect', (done) => {
        $('body').on('click', '#button', function (e) {
            var expectedColor;

            eclipse.styles.rippleButton.call($(this), e);

            expectedColor = $(this).find('.e-ripple-circle').css('backgroundColor').replace(/,\s/g, ',');

            expect($(this).find('.e-ripple-circle').length).toBe(1);
            expect($(this).find('.e-ripple-circle').width()).toBe(290);
            expect($(this).find('.e-ripple-circle').height()).toBe(290);
            expect(expectedColor).toEqual(eclipse.color.change('rgb(100, 149, 237)', 20, 'darken'));

            done();
        });
        $('#button').trigger('click');
    });
});

describe('Utils', () => {
    it('should properly add method to eclipse object', () => {
        eclipse.utils.addMethod('eclipse.a.b', () => {});
        eclipse.utils.addMethod('eclipse.color', () => {});

        expect(eclipse.a).toBeNonEmptyObject();
        expect(eclipse.a.b).toBeFunction();
        expect(eclipse.color).toBeNonEmptyObject();
    });

    it('should properly add namespace to eclipse object', () => {
        eclipse.utils.namespace('eclipse.d.e');
        eclipse.utils.namespace('eclipse.color');

        expect(eclipse.d).toBeNonEmptyObject();
        expect(eclipse.d.e).toBeEmptyObject();
        expect(eclipse.color).toBeNonEmptyObject();
    });
});
