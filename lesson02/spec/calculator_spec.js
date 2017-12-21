describe("Calculator", function(){
	
	beforeEach(function(){
		Calculator.current = 0;
	});

	it("should store the current value at all times", function(){
		expect(Calculator.current).toBeDefined();
		expect(Calculator.current).toEqual(0);
	});
		
	describe("When Adding numbers", function(){
		it("should add numbers", function(){
			expect(Calculator.add(5)).toEqual(5);
			expect(Calculator.add(5)).toEqual(10);
		});
		
		it("should add any number of numbers", function(){
			expect(Calculator.add(1, 2, 3)).toEqual(6);
			expect(Calculator.add(1,2,3,4)).toEqual(16);
		});
	});

	describe("When Substracting numbers", function(){
		it("should substract numbers", function(){
			expect(Calculator.sub(5)).toEqual(-5);
			expect(Calculator.sub(5)).toEqual(-10);
		});
	});

	it("should reset the current value", function(){
		Calculator.reset();
		expect(Calculator.current).toEqual(0);
		expect(Calculator.add(5,10)).toEqual(15);
		expect(Calculator.add(5,10)).toEqual(30);
		expect(Calculator.sub(25)).toEqual(5);
		Calculator.reset();
		expect(Calculator.current).toEqual(0);
	});

});