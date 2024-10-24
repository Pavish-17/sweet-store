export const Fadeup = (duration = 1.5) => (
    {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration
            }
        },
    }
);


export const FadeLeft = (duration = 1.5) => (
    {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration
            }
        },
    }
);


export const FadeRight = (duration = 1.5) => (
    {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration
            }
        },
    }
);