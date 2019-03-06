describe('variables and constants', () => {
    describe('declaring variables', () => {
        it('has a let keyword', () => {
            let x: number | string = 12;
            interface Food { name: string; calories: number; }
            expect(x).toBe(12);

            x = 13;
            expect(x).toBe(13);

            let y;
            y = 18;
            expect(y).toBe(18);

            y = 'Tacos';
            expect(y).toBe('Tacos');

        });
        it('using the const keyword', () => {
            const MIN_AGE = 13;

            const FAVORITE_NUMBER = [9, 20, 108];
            FAVORITE_NUMBER[0] = 10;

            const ACTOR = {
                name: 'Peter Mayhew',
                role: 'Chewbacca'
            };

            ACTOR.role = 'Chewie';
        });
        it('still has var but it is bad and you should feel bad if you use it', () => {

            const age = 22;
            if (age >= 21) {
                var oldEnough = true;
            }
            expect(oldEnough).toBe(true);
        });
    });
    describe('literals', () => {
        it('has numeric literals', () => {
            let first = 10;
            let second = 3.12;
            let salary = 10_001_800; //underscore instead of comma to make numbers look cleaner in typescript
            let hexNumber = 0xff;
            let binary = 0b101010;
            let octal = 0o744;

        });
        it('has string literals', () => {
            let firstString = 'Hello World';
            expect(firstString).toBe('Hello World');

            let story = 'He said "Oh My Gosh"'; // allows you to have quotes within string (no need for /'')
            let autho = "Flanner O'Connel"; // double quotes when abbreviating names with '

            expect('hi').toBe(`hi`); // you can use back-tics for strings as well

            let lifestory = `it all happened so quickly
            
            there i was in my mom, and then i wasnt. weird
            
            the end.`; // multiple lines when using back-tick (good for HTML within javascript)

            let name = 'Jeff', age = 49;

            let info = 'His name is ' + name + ' and his age is ' + age + '.'; // or you can use back-tic and formating ${name} check below
            console.log(info)

        });
        it('has array literals', () => {
            const things = [];
            things[0] = 'Hello';
            things[1] = 42;
            things[989] = 'you when this far';
            things[990] = things;

            expect(things[2]).toBeUndefined();

            const luckyNumbers: Array<number | string> = []
            const friends: (string | number)[] = [];
            friends[0] = 'David';
            friends[1] = 'Stacey';

        });
        describe('tuples', () => {
            it('making the case', () => {

                // public string FormatName(string first, string last) {}
                // interface NameResult {
                //     fullname: string;
                //     numberOfLetters: number;
                // }
                function add(a: number, b: number): number {
                    return a + b;
                }

                interface NameFormattingResult {
                    fullName: string,
                    numberOfLetters: number
                };
                function formatName(first: string, last: string): NameFormattingResult {
                    const fullName = `${last}, ${first}`;
                    return {
                        fullName: fullName,
                        numberOfLetters: fullName.length
                    }
                }
                const result = formatName('Han', 'Solo');
                expect(result.fullName).toBe('Solo, Han');
                expect(result.numberOfLetters).toBe(9);
            });
            it('the syntax', () => {
                let warren: [string, string, number];
                warren = ['ben', 'potato', 10]

                // let first = warren[0];
                // let age = warren[2];

                let [first, , age] = warren; // this does same thing as two lines above

                expect(first).toBe('ben');
                expect(age).toBe(10);

            });
            it('using a tuple', () => {

                function formatName(first: string, last: string): [string, number] {
                    const fullName = `${last}, ${first}`;
                    return [fullName, fullName.length];
                }

                const [name, len] = formatName('Han', 'Solo');
                expect(name).toBe('Solo, Han');
                expect(len).toBe(9);
            });
            it('using destructuring on an array', () => {
                const friends = ['Reggie', 'Susan', 'Neil'];
                const [first, , last] = friends;
                expect(first).toBe('Reggie');

                const [firstFriend, ...restOfMyFriends] = friends;
                expect(firstFriend).toBe('Reggie');
                expect(restOfMyFriends).toEqual(['Susan', 'Neil']);

            });
            it('using the spread operator', () => {
                const friends = ['Susan', 'Neil'];
                const newFriends = ['Reggie', ...friends];
                expect(newFriends).toEqual(['Reggie', 'Susan', 'Neil']);
            });
        });
    });
});