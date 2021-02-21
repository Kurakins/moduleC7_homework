import { multiply } from "./index.js"

xdescribe("test multiply", ()=> {
    it('multiplies 1 * 0 to equal 0', () => {
        expect(multiply(1, 0)).toBe(0);
    }),
        it('multiplies 1 * 1 to equal 1', () => {
            expect(multiply(1, 1)).toBe(1);
        });
});