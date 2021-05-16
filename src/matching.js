const matching = {
    b: {
        css: ['display: flex;'],
        description: 'Flexbox',
        prefix: "b"
    },
    ib: {
        css: ['display: inline-flex;'],
        description: 'Inline flexbox',
        prefix: "ib"
    },
    wb: {
        css: ['display: flex;', 'flex-wrap: wrap;'],
        description: 'Wrap flexbox',
        prefix: "wb"
    },
    wib: {
        css: ['display: inline-flex;', 'flex-wrap: wrap;'],
        description: 'Inline wrap flexbox',
        prefix: "wib"
    },
    h: {
        css: ['flex-direction: row;'],
        description: 'horizontal',
        prefix: "h"
    },
    v: {
        css: ['flex-direction: column;'],
        description: 'vertical',
        prefix: "v"
    },

    t: {
        css: ['align-items: flex-start;'],
        description: 'top',
        prefix: "t"
    },
    vt: {
        css: ['justify-content: flex-start;'],
        description: 'top',
        prefix: "t"
    },
    m: {
        css: ['align-items: center;'],
        description: 'middle',
        prefix: "m"
    },
    vm: {
        css: ['justify-content: center;'],
        description: 'middle',
        prefix: "m"
    },
    bo: {
        css: ['align-items: flex-end;'],
        description: 'bottom',
        prefix: "b"
    },
    vb: {
        css: ['justify-content: flex-end;'],
        description: 'vertical bottom',
        prefix: "b"
    },
    lh: {
        css: ['align-items: baseline;'],
        description: 'baseline',
        prefix: "l"
    },
    l: {
        css: ['justify-content: flex-start;'],
        description: 'left',
        prefix: "l"
    },
    vl: {
        css: ['align-items: flex-start;'],
        description: 'left',
        prefix: "l"
    },
    c: {
        css: ['justify-content: center;'],
        description: 'center',
        prefix: "c"
    },
    vc: {
        css: ['align-items: center;'],
        description: 'center',
        prefix: "c"
    },
    r: {
        css: ['justify-content: flex-end;'],
        description: 'right',
        prefix: "r"
    },
    vr: {
        css: ['align-items: flex-end;'],
        description: 'right',
        prefix: "r"
    },
    s: {
        css: ['align-items: stretch;'],
        description: 'stretch',
        prefix: "s"
    },
    sb: {
        css: ['justify-content: space-between;'],
        description: 'space-betwee',
        prefix: "sb"
    },
    vsb: {
        css: ['justify-content: space-between;'],
        description: 'space-between',
        prefix: "sb"
    },
    sa: {
        css: ['justify-content: space-around;'],
        description: 'space-around',
        prefix: "sa"
    },
    vsa: {
        css: ['justify-content: space-around;'],
        description: 'space-around',
        prefix: "sa"
    },
    se: {
        css: ['justify-content: space-evenly;'],
        description: 'space-evenly',
        prefix: "se"
    },
    vse: {
        css: ['justify-content: space-evenly;'],
        description: 'space-evenly',
        prefix: "se"
    }
}
export default matching