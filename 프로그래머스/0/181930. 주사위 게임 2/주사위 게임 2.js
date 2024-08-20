function solution(a, b, c) {
    const eq1 = a + b + c;
    const eq2 = a**2 + b**2 + c**2;
    const eq3 = a**3 + b**3 + c**3;
    
    const set = new Set([a, b, c]);
    
    const equations = {
        1: eq1 * eq2 * eq3,
        2: eq1 * eq2,        
        3: eq1              
    };
    
    return equations[set.size];
}