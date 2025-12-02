// Let's trace through the example manually

// L68: 50 -> 82
// Going left 68 from 50 means: 50, 49, 48, ..., 1, 0, 99, 98, ..., 82
// We pass 0 once during the rotation, end at 82
// Total for this step: 1

// L30: 82 -> 52
// Going left 30 from 82 means: 82, 81, ..., 53, 52
// We don't pass 0
// Total for this step: 0

// R48: 52 -> 0
// Going right 48 from 52 means: 52, 53, ..., 99, 0
// We end exactly at 0, no passes through
// Total for this step: 1 (just the landing)

// L5: 0 -> 95
// Going left 5 from 0 means: 0, 99, 98, 97, 96, 95
// We start at 0, so that's not a pass-through
// Total for this step: 0

// R60: 95 -> 55
// Going right 60 from 95 means: 95, 96, 97, 98, 99, 0, 1, ..., 55
// We pass through 0 once during the rotation
// Total for this step: 1

// L55: 55 -> 0
// Going left 55 from 55 means: 55, 54, ..., 1, 0
// We end exactly at 0, no wrap-around
// Total for this step: 1 (just the landing)

// L1: 0 -> 99
// Going left 1 from 0 means: 0, 99
// We start at 0, so that's not a pass-through
// Total for this step: 0

// L99: 99 -> 0
// Going left 99 from 99 means: 99, 98, ..., 1, 0
// We end exactly at 0, no wrap-around
// Total for this step: 1 (just the landing)

// R14: 0 -> 14
// Going right 14 from 0 means: 0, 1, 2, ..., 14
// We start at 0, so that's not a pass-through
// Total for this step: 0

// L82: 14 -> 32
// Going left 82 from 14 means: 14, 13, ..., 1, 0, 99, 98, ..., 32
// We pass through 0 once during the rotation
// Total for this step: 1

// Total: 1 + 0 + 1 + 0 + 1 + 1 + 0 + 1 + 0 + 1 = 6 ✓

console.log("The problem is: when we LAND on 0, we count it. But when we PASS THROUGH 0 during a rotation and DON'T land on it, we also count it.");
console.log("When we PASS THROUGH 0 and LAND on it (like R48), we only count it ONCE, not twice.");
console.log("When we START at 0 and move (like L5, L1, R14), we DON'T count the starting position.");
