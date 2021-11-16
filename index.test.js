import {describe, expect, it} from "@jest/globals";
import {getPercents} from "./index";




describe('percents test', ()=> {
    it('test percent casual',()=>{
let result = getPercents(30,200)
        expect(result).toBe(60)
    })
    it('test percent with fraction of percent',()=>{
let result = getPercents(0.1,200)
        expect(result).toBe(0.2)
    })
    it('test percent with fraction of number',()=>{
let result = getPercents(10,0.75)
        expect(result).toBe(0.075)
    })
    it('test percent with empty of number',()=>{
let result = getPercents(10," ")
        expect(result).toBe(0)
    })
    it('test percent with empty of percent',()=>{
let result = getPercents(" ",100)
        expect(result).toBe(0)
    })

})

describe('percents corner tests', ()=> {
    it('test percents with NaN',()=>{
let result = getPercents("a","b")
        expect(result).toBe(NaN)
    })
    it('test percent with 0 of number',()=>{
        let result = getPercents(200,0)
        expect(result).toBe(0)
    })
    it('test percent with 0 of percent',()=>{
        let result = getPercents(0,200)
        expect(result).toBe(0)
    })
})