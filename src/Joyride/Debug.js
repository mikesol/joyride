export const monkeyPatchCreateImpl = (backdoor) => (create) => () => { backdoor.create = create; }
const subs = {s: 0}
export const incrSub = () => {
    subs.s += 1;
    console.log("SUB", subs.s);
}
export const decrSub = () => {
    subs.s -= 1;
    console.log("UNSUB", subs.s);
}