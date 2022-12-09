const expect = require('chai').expect;
const anyValueToBoolean = require('./any-value-to-boolean');

describe('utils - anyValueToBoolean', () => {
    describe('When value is undefined or null', () => {
        it('should return right boolean value', () => {
            const expected = [false, false, false, false];
            const testedUndefinedOrNullValues = [null, undefined, [], {}];

            expect(testedUndefinedOrNullValues.map((undefinedOrNullValue) => {
                return anyValueToBoolean(undefinedOrNullValue);
            })).to.eql(expected);
        });
    });

    describe('When value is boolean', () => {
        it('should return right boolean value', () => {
            const expected = [true, false, true, false, false];
            const testedBooleanValues = [true, false, true, false, false];

            expect(testedBooleanValues.map((booleanValue) => {
                return anyValueToBoolean(booleanValue);
            })).to.eql(expected);
        });
    });

    describe('When value is string', () => {
        it('should return right boolean value', () => {
            const expected = [true, false, true, false, false];
            const testedStringValues = ['true', 'false', '1', '0', 'lorem ispum'];

            expect(testedStringValues.map((stringValue) => {
                return anyValueToBoolean(stringValue);
            })).to.eql(expected);
        });
    });

    describe('When value is number', () => {
        it('should return right boolean value', () => {
            const expected = [false, true, true, true, true];
            const testedNumberValues = [0, 1, 2, 3, 10];

            expect(testedNumberValues.map((numberValue) => {
                return anyValueToBoolean(numberValue);
            })).to.eql(expected);
        });
    });
});
