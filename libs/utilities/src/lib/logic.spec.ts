import { async, TestBed } from '@angular/core/testing';
import { canUse, isTrue, isFalse } from './logic';

describe('Utilities Library', () => {
	describe('logic functions', () => {
		describe('canUse', () => {
			it('should be false for nulls', () => {
				expect(canUse(null)).toBeFalsy();
			});
			it('should be false for undefined', () => {
				expect(canUse(undefined)).toBeFalsy();
			});
			it('should be false for empty strings', () => {
				expect(canUse('')).toBeFalsy();
			});
			it('should be true for a false value', () => {
				expect(canUse(true)).toBeTruthy();
			});
		});
	});
});
