export const LineAnim = {
    hidden: { width: "0%" },
    show: {
        width: "100%",
        transition: { duration: 1 }
    }
}
export const VerticalLineAnim = {
    hidden: { height: "0%" },
    show: {
        height: "100%",
        transition: { duration: 1 }
    }
}
export const PageAnim = {
    hidden: { opacity: 0, y: 300 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.25 }
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: { duration: 1 }
    }
}
export const TitleAnim = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}
export const PhotoAnim = {
    hidden: { scale: 1.3, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1 }
    }
}
export const Slider = {
    hidden: { x: "-130%", skew: "45deg" },
    show: {
        x: "100%", skew: "0%",
        transition: { ease: "easeOut", duration: 1 }
    }
}
export const SliderContainer = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { ease: "easeOut", staggerChildren: 0.1 } }
}
export const fade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { ease: "easeOut", duration: 0.5 }
    }
}
export const imgAnim = {
    hidden: { opacity: 0, x: -200 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1
        }
    }
}
export const hAnim = {
    hidden: { opacity: 0, x: 300 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }

    }
}