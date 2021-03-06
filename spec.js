
//describe and "it" is from jasmine 
describe('Protractor Demo App', function() {
    //the element function finds html elements on the page and returns an ElementFinder object
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    //element.all returns an ElementArrayFinder
    var history = element.all(by.repeater('result in memory'));

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }
    //run before every it block
    beforeEach(function(){
        //broswer is a global created by protractor, used for browser level commands like browser.get
        browser.get("http://juliemr.github.io/protractor-demo/")
    });

    it("should have a history", function(){
        add(1,2);
        add(3,4);

        //count is the expected length
        expect(history.count()).toEqual(2);
        //last will report the oldest result at the bottom of the history
        expect(history.last().getText()).toContain("1 + 2");
        expect(history.first().getText()).toContain("3 + 4");

        // add(5, 6);
        // expect(history.count()).toEqual(3);
    })

    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function(){
        //sendKeys is used to type into <input>s
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        //click mimics the click event
        goButton.click();

        //getText is used to return the content of the element
        expect(latestResult.getText()).toEqual('3');
    })

    it('should add 4 and 6', function(){
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);

        goButton.click();

        expect(latestResult.getText()).toEqual('10');
    });

    it('should read the value from an input', function(){
        firstNumber.sendKeys(1);
        //check that the value attribute is equal to the user input
        expect(firstNumber.getAttribute('value')).toEqual('1')
    })
  });

  //element takes one param: a Locator which describes how to find the element
  //the by object creates Locators

  //LOCATORS (3 examples):
  //by.model('first')
  //byid('gobutton)
  //by.binding('latest') to find the element bound to the variable latest. this finds the span containing {{latest}}