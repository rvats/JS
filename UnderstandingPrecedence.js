/* JavaScript uses left to right assoication in executing a program if expressions are not separated and just like C BEDMAS Rules Apply */
function test1 (a, b, c) { 
	function foo ( t ) {
		return t;
    }
	a = b * 2 + foo(c * 3);
    return a;
}
console.log(test1(1,2,3));
/*
function test1(1,2,3) {
	a = 1;
	b = 2;
	c = 3;
	a = 2 * 2 + foo (3 * 3)
	a = 4 + foo (9)
	foo will just return 9 so
	a = 4 + 9;
	a = 13
}
*/
console.log(test1(0,1,2));
/*
function test1(0,1,2) {
	a = 0;
	b = 1;
	c = 2;
	a = 1 * 2 + foo (2 * 3)
	a = 2 + foo (6)
	foo will just return 6 so
	a = 2 + 6;
	a = 8
}
*/
function test2 (a, b, c) { 
	function foo ( t ) {
		return t;
    }
	a = foo(c * 3)+ b * 2;
    return a;
}
console.log(test2(1,2,3));
/*
function test1(1,2,3) {
	a = 1;
	b = 2;
	c = 3;
	a = foo (3 * 3) + 2 * 2
	a = foo (9) + 2 * 2
	foo will just return 9 so
	a = 9 + 4;
	a = 13;
}
*/
console.log(test2(0,1,2));
/*
function test1(0,1,2) {
	a = 0;
	b = 1;
	c = 2;
	a = foo (2 * 3) + 1 * 2
	a = foo (6) + 1 * 2
	foo will just return 6 so
	a = 8;
}
*/