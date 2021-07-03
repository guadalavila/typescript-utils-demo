import { isEmail } from "../email"

test("email luc@perdu.com valid", () => {
    expect(isEmail("luc@perdu.com")).toBe(true)
})

test("Empty string not valid", () => {
    expect(isEmail("")).toBe(false)
})

test("No double @ in an email", () => {
    expect(isEmail("martin@toto@titi.com")).toBe(false)
})

test("not trimmed email to be false", () => {
    expect(isEmail(" luc@perdu.com ")).toBe(false)
})
