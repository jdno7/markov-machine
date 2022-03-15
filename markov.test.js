const { MarkovMachine } = require("./markov")

let mm


describe("Testing Markov", () => {
    // beforeEach(() => {
    //     // console.log('before')
    //     let mm = new MarkovMachine('the arsenist has odly shaped has feet')
    //     mm.makeText(5)
    //     // console.log(mm.words)
    // })
    test('words attribute test',() => {
        let mm = new MarkovMachine('the arsenist has odly shaped has feet')
        mm.makeText(5)
        expect(mm.words.length).toEqual(7) 
    })
    test('Chains attribute',() => {
        let mm = new MarkovMachine('the arsenist has odly shaped has feet')
        
        expect(mm.chains.has).toEqual(['odly','feet']) 
    })
    test('test Text attribute',() => {
        let mm = new MarkovMachine('the arsenist has odly shaped has feet')
        mm.makeText(25)
        expect(mm.text).toContain('odly') 
        expect(mm.text).not.toContain(',') 
        
    })
})