class A {
	constructure(){}
	static testA(){
		return 'testA'
	}
};
class B extends A {
	constructure(){}
	static testB(){
		return super.testA() + ' & testB'
	}
}
alert(B.testB())
