import {
    assertEquals,
    assertStrictEquals,
    assertThrows,
  } from "https://deno.land/std@0.160.0/testing/asserts.ts";
import {
    afterEach,
    beforeEach,
    describe,
    it,
  } from "https://deno.land/std@0.160.0/testing/bdd.ts";

import {D1P1,D1P2} from './day1.js';
import {D2P1,D2P2} from './day2.js';
import {D3P1,D3P2} from './day3.js';
  
describe('Day 1', () => {
    //describe('Part 1', () => {
        it('Part 1 Returns the correct answer', () => {
            assertEquals(D1P1,72240);
        });
    //});
    //describe('Part 2', () => {
        it('Part 2 Returns the correct answer', () => {
            assertEquals(D1P2,210957);
        })
    // });
});

describe('Day 2', () => {
    // describe('Part 1', () => {
        it('Part 1 Returns the correct answer', () => {
            assertEquals(D2P1,13809);
        });
    // });
    // describe('Part 2', () => {
        it('Part 2 Returns the correct answer', () => {
            assertEquals(D2P2,12316);
        })
    // });
});

describe('Day 3', () => {
    // describe('Part 1', () => {
        it('Part 1 Returns the correct answer', () => {
            assertEquals(D3P1,8072);
        });
    // });
    // describe('Part 2', () => {
        it('Part 2 Returns the correct answer', () => {
            assertEquals(D3P2,2567);
        })
    // });
});

describe('Day 4', () => {
    
})