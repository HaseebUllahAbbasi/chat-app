const chatDataStdDon = [
    {
        id: 1,
        role: 'student',
        msg: "kia hal he",
        time: new Date(1665597720950),
    },
    {
        id: 1,
        role: 'student',
        msg: "hoti he bat",
        time: new Date(1665597720955),
    },
    {
        id: 1,
        role: 'donor',
        msg: "kia hal he admin",
        time: new Date(1665597720935),
    },
    {
        id: 1,
        role: 'donor',
        msg: "send karta hon",
        time: new Date(1665597720945),
    },
];
const chatDataAdmin = [
    {
        admin: true,

        id: 1,
        role: 'student',
        msg: "karam tum sunao",
        time: new Date(1665597720952),
    },
    
    {
        admin: true,
        
        id: 1,
        role: 'student',
        msg: "chalo set set",
        time: new Date(1665597720957),
    },
    {
        admin: true,

        id: 1,
        role: 'donor',
        msg: "kia donate karna he ",
        time: new Date(1665597720938),
    },
    {
        admin: true,
        id: 1,
        role: 'donor',
        msg: "details send karo",
        time: new Date(1665597720950),
    },
];

export {chatDataStdDon,chatDataAdmin} ;
